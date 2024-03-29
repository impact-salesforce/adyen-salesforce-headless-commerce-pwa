import {hmacValidator} from '@adyen/api-library'
import NotificationRequest from '@adyen/api-library/lib/src/notification/notificationRequest'
import Logger from './logger'

const messages = {
    AUTH_ERROR: 'Access Denied!',
    AUTH_SUCCESS: '[accepted]',
    DEFAULT_ERROR: 'Technical error!'
}

async function handleWebhook(req, res, next) {
    try {
        // handle webhook notification here and update order status using ORDER API from commerce SDK.
        // check eventCode structure and types here: https://docs.adyen.com/development-resources/webhooks/webhook-types/
        // `return next()` if notification is successfully handled.
        // webhookSuccess middleware return correct response for the webhook.
        // throw relevant error if notification is not successfully handled.
        // errorHandler middleware return error response and logs the error.
    } catch (err) {
        return next(err)
    }
}

function authenticate(req, res, next) {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader) {
            throw new Error(messages.AUTH_ERROR)
        }
        const credentialSeparator = ':'
        const authHeaderSeparator = ' '
        const encoding = 'base64'
        const encodedCredentials = authHeader.split(authHeaderSeparator)[1]
        const auth = new Buffer.from(encodedCredentials, encoding)
            .toString()
            .split(credentialSeparator)
        const user = auth[0]
        const pass = auth[1]

        if (
            user === process.env.ADYEN_WEBHOOK_USER &&
            pass === process.env.ADYEN_WEBHOOK_PASSWORD
        ) {
            return next()
        } else {
            throw new Error(messages.AUTH_ERROR)
        }
    } catch (err) {
        Logger.error('authenticate', err.message)
        return next(err)
    }
}

function validateHmac(req, res, next) {
    const ADYEN_HMAC_KEY = process.env.ADYEN_HMAC_KEY
    if (!ADYEN_HMAC_KEY) return next()
    const {notificationItems} = req.body
    const {NotificationRequestItem} = notificationItems[0]
    try {
        const HmacValidator = new hmacValidator()
        if (HmacValidator.validateHMAC(NotificationRequestItem, ADYEN_HMAC_KEY)) {
            return next()
        } else {
            throw new Error(messages.AUTH_ERROR)
        }
    } catch (err) {
        Logger.error('validateHmac', err.message)
        return next(err)
    }
}

function parseNotification(req, res, next) {
    try {
        const notificationRequest = new NotificationRequest(req.body)
        const notificationRequestItem = (notificationRequest.notificationItems || []).filter(
            (item) => !!item
        )
        if (!notificationRequestItem[0]) {
            return next(
                new Error(
                    'Handling of Adyen notification has failed. No input parameters were provided.'
                )
            )
        }
        res.locals.notification = notificationRequestItem[0]
        Logger.info('AdyenNotification', JSON.stringify(res.locals.notification))
        return next()
    } catch (err) {
        return next(err)
    }
}

export {authenticate, validateHmac, handleWebhook, parseNotification}
