import { Audience } from 'app/containers/SideBarMenu/audience'
import { SET_USER_NAVIGATION } from './action'

// const initialState = []
const initialState = [...Audience];

const NavigationReducer = function (state = initialState, action) {
    const {type, payload} =action
    switch (type) {
        case SET_USER_NAVIGATION: 
            return [...payload] 
        case 'Portal': 
            return  [...payload] 
        default: 
            return [...state]
    }
}

export default NavigationReducer
