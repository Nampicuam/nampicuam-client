import React from 'react'
import { authRoles } from '../../../auth/authRoles'

const reportsRoute = [
    {
        path: '/events',
        component: React.lazy(() => import('./events/index')),
        //  auth: authRoles.sa
    },
    {
        path: '/volunteers',
        component: React.lazy(() => import('./volunteers/index')),
        auth: authRoles.admin,
    },
    {
        path: '/donors',
        component: React.lazy(() => import('./donors/index')),
        auth: authRoles.admin,
    },
]

export default reportsRoute
