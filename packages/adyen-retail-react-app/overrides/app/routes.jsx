/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React from 'react'
import loadable from '@loadable/component'
import {getConfig} from '@salesforce/pwa-kit-runtime/utils/ssr-config'
import {configureRoutes} from '@salesforce/retail-react-app/app/utils/routes-utils'
import {routes as _routes} from '@salesforce/retail-react-app/app/routes'
import {Skeleton} from '@chakra-ui/react'

/* -----------------Adyen Begin ------------------------ */
// these hooks need to be passed to checkout page from Adyen
import '@adyen/adyen-salesforce-pwa/dist/app/adyen.css'
import {
    AuthHelpers,
    useAccessToken,
    useAuthHelper,
    useCustomerId,
    useCustomerType,
    useOrder,
    useProducts,
    useShopperBasketsMutation
} from '@salesforce/commerce-sdk-react'
// Components
const fallback = <Skeleton height="75vh" width="100%" />

// Create your pages here and add them to the routes array
// Use loadable to split code into smaller js chunks
// Checkout page from Adyen
const Checkout = loadable(() => import('@adyen/adyen-salesforce-pwa'), {
    fallback: fallback,
    resolveComponent: (components) => {
        return () => (
            <components.Checkout
                useAccessToken={useAccessToken}
                useCustomerId={useCustomerId}
                useCustomerType={useCustomerType}
                useShopperBasketsMutation={useShopperBasketsMutation}
            />
        )
    }
})

// CheckoutConfirmation page from Adyen
const CheckoutConfirmation = loadable(() => import('@adyen/adyen-salesforce-pwa'), {
    fallback: fallback,
    resolveComponent: (components) => {
        return () => (
            <components.CheckoutConfirmation
                useOrder={useOrder}
                useProducts={useProducts}
                useAuthHelper={useAuthHelper}
                AuthHelpers={AuthHelpers}
            />
        )
    }
})

// Checkout Error page from Adyen
const AdyenCheckoutError = loadable(() => import('@adyen/adyen-salesforce-pwa'), {
    fallback: fallback,
    resolveComponent: (components) => {
        return () => <components.AdyenCheckoutError />
    }
})

const routes = [
    {
        path: '/checkout',
        component: Checkout,
        exact: true
    },
    {
        path: '/checkout/error',
        component: AdyenCheckoutError
    },
    {
        path: '/checkout/confirmation/:orderNo',
        component: CheckoutConfirmation
    },
    ..._routes
]

/* -----------------Adyen End ------------------------ */
export default () => {
    const config = getConfig()
    return configureRoutes(routes, config, {
        ignoredRoutes: ['/callback', '*']
    })
}
