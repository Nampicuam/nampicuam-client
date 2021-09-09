import {  Settings, Headquarter, Audits, Audience, Receptionist } from 'app/containers/SideBarMenu';
import { baguhin } from '../talaan';
export const SET_USER_NAVIGATION = 'SET_USER_NAVIGATION'

const getfilteredNavigations = (navList = [], role) => {
    return navList.reduce((array, nav) => {
        if (nav.auth) {
            if (nav.auth.includes(role)) {
                array.push(nav)
            }
        } else {
            if (nav.children) {
                nav.children = getfilteredNavigations(nav.children, role)
                array.push(nav)
            } else {
                array.push(nav)
            }
        }
        return array
    }, [])
}

const switchPlatform = (code) => {
    switch (code) {
        case 'Settings': return Settings
        case 'Headquarters': return Headquarter
        case 'audits': return Audits
        case 'receptionist': return Receptionist
        default:
        return Audience
    }
}

export function getNavigationByUser() {
    return (dispatch, getState) => {
        let { user, navigations = [] } = getState()

        let filteredNavigations = getfilteredNavigations(navigations, user.role)

        dispatch({
            type: SET_USER_NAVIGATION,
            payload: [...filteredNavigations],
        })
    }
}

export const switchPortal = (code) => async (dispatch, getState) => {
        // search this code later.
        // let { user, navigations = [] } = getState()
        // console.log('navigations :',user);
    
        const platform = switchPlatform(code)
        let auth = JSON.parse(localStorage.getItem('auth'));
        console.log(auth);
        baguhin('users', auth.id, { currentApp: code }, false)
        dispatch({
            type: 'Portal',
            payload: [...platform],
        })
    }
