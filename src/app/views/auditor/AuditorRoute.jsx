import React from 'react'

const auditorRoute = [
    {
        path: '/ecommerce/products',
        component: React.lazy(() => import('./ecommerce/products/index')),
    },
    {
        path: '/ecommerce/booking',
        component: React.lazy(() => import('../audience/booking/index')),
    },
    {
        path: '/ecommerce/cart',
        component: React.lazy(() => import('./ecommerce/cart/index')),
        exact: true,
    },
    {
        path: `/ecommerce/cart/:id/items`,
        component: React.lazy(() => import('./ecommerce/cart_items/index')),
    },
    // {
    //     // Price list
    //     path: '/services',
    //     component: React.lazy(() => import('./services/index')),
    // },
]

export default auditorRoute
