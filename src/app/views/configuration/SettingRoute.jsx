import React from 'react'

const settingRoute = [
    {
        path: '/user/roles',
        component: React.lazy(() => import('./roles/index')),
        //  auth: authRoles.sa
    },
    {
        path: '/user/officers',
        component: React.lazy(() => import('./officers/index')),
        //  auth: authRoles.admin
    },
    {
        path: '/user/members',
        component: React.lazy(() => import('./members/index')),
        //  auth: authRoles.admin
    },
    {
        // Price list
        path: '/services',
        component: React.lazy(() => import('./services/index')),
    },
    {
        // Price list
        path: '/products',
        component: React.lazy(() => import('./products/index')),
    },
]

export default settingRoute
