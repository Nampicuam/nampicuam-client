import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import Reducers from './reducers'

const initialState = {}
const middlewares = [thunk]
let devtools = (x) => x

if (
    process.env.NODE_ENV !== 'production' &&
    process.browser &&
    window.__REDUX_DEVTOOLS_EXTENSION__
) {
    devtools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

export const Store = createStore(
    Reducers,
    initialState,
    compose(applyMiddleware(...middlewares), devtools)
)
