import {createCheckoutResponse} from '../../utils/createCheckoutResponse.mjs'
import AdyenCheckoutConfig from './checkout-config'
import Logger from './logger'
import {v4 as uuidv4} from 'uuid'

const errorMessages = {
    PAYMENTS_DETAILS_NOT_SUCCESSFUL: 'payments details call not successful'
}

async function sendPaymentDetails(req, res, next) {
    Logger.info('sendPaymentDetails', 'start')
    const checkout = AdyenCheckoutConfig.getInstance()
    try {
        const {data} = req.body
        const response = await checkout.instance.paymentsDetails(data, {
            idempotencyKey: uuidv4()
        })
        Logger.info('sendPaymentDetails', `resultCode ${response.resultCode}`)
        const checkoutResponse = createCheckoutResponse(response)
        if (checkoutResponse.isFinal && !checkoutResponse.isSuccessful) {
            throw new Error(errorMessages.PAYMENTS_DETAILS_NOT_SUCCESSFUL)
        }
        res.locals.response = checkoutResponse
        next()
    } catch (err) {
        Logger.error('sendPaymentDetails', err.message)
        next(err)
    }
}

export default sendPaymentDetails
