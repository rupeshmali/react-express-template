import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'
import { PATHS } from '../../utils/constants'

const AuthLayout = () => {
    const { currentUser } = useContext(AuthContext)
    if(currentUser) return <Navigate to={PATHS.HOME} />
    return (
            <div className="grid grid-cols-3 gap-5 auth-container">
                <div className="col-span-2">
                    <img className='w-full h-full object-cover' src="/login.jpg"></img>
                </div>
                <Outlet />
            </div>
    )
}

export default AuthLayout