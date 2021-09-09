import React from 'react'
import { Redirect } from 'react-router-dom'
////////////////////////////////
// Template
///////////////////////////////
import dashboardRoutes from './views/headquarter/dashboard/DashboardRoutes'
import utilitiesRoutes from './views/templates/utilities/UtilitiesRoutes'
import materialRoutes from './views/templates/material-kit/MaterialRoutes'
import chartsRoute from './views/templates/charts/ChartsRoute'
import dragAndDropRoute from './views/templates/Drag&Drop/DragAndDropRoute'
import formsRoutes from './views/templates/forms/FormsRoutes'
import mapRoutes from './views/templates/map/MapRoutes'
//////////////////////////////////////
// Dynamic components
/////////////////////////////////////
import settingRoute from './views/configuration/SettingRoute'
import eventsRoute from './views/headquarter/reports/ReportRoute'
import audienceRoute from './views/audience/AudienceRoute'
import auditorRoute from './views/auditor/AuditorRoute'

const redirectRoute = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/dashboard/default" />,
    },
]

// const errorRoute = [
//     {
//         component: () => <Redirect to="/session/404" />,
//     },
// ]

const routes = [
    ...dashboardRoutes,
    ...settingRoute,
    ...materialRoutes,
    ...utilitiesRoutes,
    ...chartsRoute,
    ...dragAndDropRoute,
    ...formsRoutes,
    ...mapRoutes,
    ...redirectRoute,
    ...eventsRoute,
    ...audienceRoute,
    ...auditorRoute,
    // ...errorRoute,
]

export default routes
