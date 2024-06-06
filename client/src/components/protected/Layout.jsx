import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'
import { PATHS } from '../../utils/constants'

const Layout = () => {
    const {currentUser } = useContext(AuthContext)
    if(!currentUser){
        return <Navigate to={PATHS.LOGIN} />
    }
    return (
        <Outlet />
    )
}

export default Layout