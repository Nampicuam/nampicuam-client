import { tanong } from '../talaan'
import { Newsfeed, Gallery, Event } from './types'

export const newsfeed = () => async (dispatch) => {
    await tanong('newsfeeds').then((data) => {
        dispatch({
            type: Newsfeed,
            payload: data,
        })
    })
}
export const gallery = () => async (dispatch) => {
    await tanong('galleries').then((data) => {
        dispatch({
            type: Gallery,
            payload: data,
        })
    })
    // return Promise.resolve(data);
}
export const event = () => async (dispatch) => {
    await tanong('events').then((data) => {
        dispatch({
            type: Event,
            payload: data,
        })
    })
    // return Promise.resolve(data);
}
