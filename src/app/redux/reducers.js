import { combineReducers } from 'redux'
import NotificationReducer from './Notification/reducer'
import EcommerceReducer from './Ecommerce/reducer'
import NavigationReducer from './Navigation/reducer'
import QueryReducer from "./BREAD/reducer";
import LandingReducer from "./Landing/reducer";

const RootReducer = combineReducers({
  notifications: NotificationReducer,
  navigations: NavigationReducer,
  ecommerce: EcommerceReducer,
  query: QueryReducer,
  landing: LandingReducer,
})

export default RootReducer
