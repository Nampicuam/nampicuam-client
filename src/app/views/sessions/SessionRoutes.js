import ForgotPassword from './ForgotPassword'
import Landing from './landing/index'
import NotFound from './NotFound'
import Register from './register/Register'

const sessionRoutes = [
    {
        path: '/session/landing',
        component: Landing,
    },
    {
        path: '/session/signup',
        component: Register,
    },
    {
        path: '/session/forgot-password',
        component: ForgotPassword,
    },
    {
        path: '/session/404',
        component: NotFound,
    },
]

export default sessionRoutes
