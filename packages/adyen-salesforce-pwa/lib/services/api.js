export class ApiClient {
    url = null
    token = null

    constructor(url, token) {
        this.url = url
        this.token = token
    }

    base(method, options) {
        if (options?.queryParams) {
            this.url = `${this.url}?${new URLSearchParams(options.queryParams)}`
        }
        return fetch(this.url, {
            method: method,
            body: options?.body || null,
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${this.token}`,
                ...options?.headers
            }
        })
    }

    get(options) {
        return this.base('get', options)
    }

    post(options) {
        return this.base('post', options)
    }
}
