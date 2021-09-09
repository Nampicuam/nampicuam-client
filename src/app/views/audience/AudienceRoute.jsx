import React from 'react'

const audienceRoute = [
    {
        path: '/audiences/stream',
        component: React.lazy(() => import('./stream/index')),
    },
    {
        path: '/audiences/donation',
        component: React.lazy(() => import('./donation/index')),
    },
    {
        path: '/audiences/volunteer',
        component: React.lazy(() => import('./volunteer/index')),
    },
    {
        path: '/audiences/sponsors',
        component: React.lazy(() => import('./sponsor/index')),
    },
    {
        path: '/audiences/booking',
        component: React.lazy(() => import('./booking/index')),
    },
]

export default audienceRoute
