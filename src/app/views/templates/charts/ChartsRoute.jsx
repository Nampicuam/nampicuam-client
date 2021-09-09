import React from 'react'

const chartsRoute = [
    {
        path: '/charts/echarts',
        component: React.lazy(() => import('./echarts/AppEchart')),
    },
    {
        path: '/charts/users',
        component: React.lazy(() => import('./users/index')),
    },
]

export default chartsRoute
