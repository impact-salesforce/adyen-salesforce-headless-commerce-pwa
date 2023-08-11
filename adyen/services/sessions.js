import {ApiClient} from './api'

export class AdyenSessionsService {
    baseUrl = '/api/adyen/sessions'
    apiClient = null

    constructor(token) {
        this.apiClient = new ApiClient(this.baseUrl, token)
    }

    async createSession(customerId, locale) {
        const res = await this.apiClient.post({
            body: JSON.stringify({
                locale
            }),
            headers: {
                customerid: customerId
            }
        })
        if (res.status >= 300) {
            throw new Error(res)
        } else {
            return await res.json()
        }
    }
}
