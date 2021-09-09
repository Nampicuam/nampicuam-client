import React, { createContext, useEffect, useState } from 'react'
import grantedPortal from '../containers/PlatformEnum/config';

export const PlatformContext = createContext();

export const PlatformProvider = ({ children }) => {
    const [portals, setPortals] = useState([])
    const getPlatform = async () => {
        try {
            let auth = JSON.parse(localStorage.getItem('auth'));
            setPortals (grantedPortal(auth.rolename));
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {getPlatform()}, [])

    return (
        <PlatformContext.Provider value={{ portals }} >
            {children}
        </PlatformContext.Provider>
    )
}

export default PlatformContext
