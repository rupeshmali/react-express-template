import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
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