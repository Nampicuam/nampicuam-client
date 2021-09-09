import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserTag, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { authRoles } from './../../auth/authRoles'
export const Settings = [
    {
        name: 'Roles',
        path: '/user/roles',
        auth: authRoles.sa,
        icon: <FontAwesomeIcon icon={faUserTag} />,
    },
    {
        name: 'Officers',
        path: '/user/officers',
        icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
        name: 'Members',
        path: '/user/members',
        icon: <FontAwesomeIcon icon={faUserTie} />,
    },
    {
        name: 'Services',
        path: '/services',
        icon: <FontAwesomeIcon icon={faUserTie} />,
    },
    {
        name: 'Product',
        path: '/products',
        icon: <FontAwesomeIcon icon={faUserTie} />,
    },
]
