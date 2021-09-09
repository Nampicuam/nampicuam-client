import { Newsfeed, Gallery, Event } from './types'
const initialState = {
    news: [],
    galleries: [],
    events: [],
}

const reducer = function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case Newsfeed:
            return {
                ...state,
                news: [...payload],
            }
        case Gallery:
            return {
                ...state,
                galleries: [...payload],
            }
        case Event:
            return {
                ...state,
                events: [...payload],
            }
        default:
            return state
    }
}

export default reducer
