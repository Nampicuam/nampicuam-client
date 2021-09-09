import { MatxLoading } from 'app/components'
import axios from 'axios'
// import jwtDecode from 'jwt-decode'
import React, { createContext, useEffect, useReducer } from 'react'
import { magpakilala } from './../redux/talaan'

const initialState = {
    isAuthenticated: false,
    isInitialised: false,
    user: null,
}

// const isValidToken = (token) => {
//     if (!token) { return false }
//     const decodedToken = jwtDecode(token) 
//     const currentTime = Date.now() / 1000
//     // console.log(decodedToken)
//     return decodedToken.exp > currentTime
// }

const setSession = (token) => {
    if (token) {
        localStorage.setItem('token', token)
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    } else {
        localStorage.removeItem('token')
        localStorage.removeItem('auth')
        delete axios.defaults.headers.common.Authorization
    }
}

const reducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case 'INIT': {
            const { isAuthenticated, user } = payload
            return {
                ...state,
                isAuthenticated,
                isInitialised: true,
                user,
            }
        }
        case 'LOGIN': {
            return {
                ...state,
                isAuthenticated: true,
                user: payload,
            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            }
        }
        case 'REGISTER': {
            const { user } = payload

            return {
                ...state,
                isAuthenticated: true,
                user,
            }
        }
        default: {
            return { ...state }
        }
    }
}

const AuthContext = createContext({
    ...initialState,
    method: 'Sanctum',
    login: () => Promise.resolve(),
    logout: () => {},
    register: () => Promise.resolve(),
    getSanctumToken: () => Promise.resolve(),
})

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const login = async (email, password) => {
        const response = await magpakilala(email, password)
        const { user, token } = response
        localStorage.setItem('auth', JSON.stringify(user))
        setSession(token)
        dispatch({
            type: 'LOGIN',
            payload: user,
        })
    }

    const register = async (email, username, password) => {
        const response = await axios.post('/api/auth/register', {
            email,
            username,
            password,
        })
        const { accessToken, user } = response.data
        setSession(accessToken)
        dispatch({
            type: 'REGISTER',
            payload: {
                user,
            },
        })
    }
    const getSanctumToken = () =>
        axios.get('../../sanctum/csrf-cookie', { withCredentials: true })

    const logout = () => {
        setSession(null)
        dispatch({ type: 'LOGOUT' })
    }

    useEffect(() => {
        ;(async () => {
            try {
                const token = window.localStorage.getItem('token')
                const user = window.localStorage.getItem('auth')
                //  if (token && isValidToken(token)) { // for JWT only
                // isValidToken(token)
                if (token && user) {
                    setSession(token)
                    // const response = await axios.get('/api/auth/profile')
                    // const { user } = response.data

                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: true,
                            user,
                        },
                    })
                } else {
                    dispatch({
                        type: 'INIT',
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        },
                    })
                }
            } catch (err) {
                console.error(err)
                dispatch({
                    type: 'INIT',
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                })
            }
        })()
    }, [])

    if (!state.isInitialised) {
        return <MatxLoading />
    }

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: 'JWT',
                login,
                logout,
                register,
                getSanctumToken,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
