import { createContext, useEffect, useState } from "react";
import { signup, login, getMe } from "../../api/auth";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { PATHS, TOKEN_KEY } from "../../utils/constants";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "../../utils/local-storage";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')
    const [showSuccessToast, setShowSuccessToast] = useState('')
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const handleToast = (message) => {
        setShowSuccessToast(message)
        setTimeout(() => {
            setShowSuccessToast('')
        }, 5000)
    }
    const doRegistration = async (name, email, password) => {
        if (!(name !== '' && email !== '' && password !== '')) {
            setErrorMessage('Error: Name, Email and Password is required.')
            return
        }
        try {
            const payload = {
                name,
                email,
                password
            }
            const { data } = await signup(payload)
            handleToast(data.message)
            navigate(PATHS.LOGIN)
        } catch (error) {
            let message = 'Something went wrong'
            console.log(error);
            if (isAxiosError(error)) {
                message = error.response.data?.message || message;
            }
            setErrorMessage(message)
        }
    }
    const doLogin = async (email, password) => {
        if (!(email !== '' && password !== '')) {
            setErrorMessage('Error: Name, Email and Password is required.')
            return
        }
        try {
            const payload = {
                email,
                password
            }
            const { data } = await login(payload)
            setLocalStorage(TOKEN_KEY, data.token)
            setCurrentUser(data.user)
            handleToast(data.message)
            window.location.href = window.location.origin + PATHS.HOME;

        } catch (error) {
            let message = 'Something went wrong'
            if (isAxiosError(error)) {
                message = error.response.data?.message || message;
            }
            setErrorMessage(message)
        }
    }
    const doLogout = () => {
        removeLocalStorage(TOKEN_KEY)
        window.location.href = window.location.origin + PATHS.LOGIN;
    }
    const handleAuth = async () => {
        try {
            const { data } = await getMe();
            setCurrentUser(data.user)
        } catch (error) {
            removeLocalStorage(TOKEN_KEY)
        }
        setLoading(false)
    }
    const values = {
        doRegistration,
        doLogin,
        currentUser,
        errorMessage,
        doLogout
    }

    useEffect(() => {
        /**
         * 1. Check if token exists in localStorage
         * 2. Send the request to server with token to get the user
         * 3. If user is found, set the user. If user is not found, clear the access token and navigate user to login page
         */
        const token = getLocalStorage(TOKEN_KEY)
        if (!token) {
            setLoading(false)
            return;
        }
        handleAuth()
    }, [])
    if (loading) return (
        <div className="h-screen flex justify-center items-center">Loading...</div>
    )
    return (
        <AuthContext.Provider value={values}>
            {showSuccessToast && (
                <div id="toast-simple" className="fixed top-10 left-[50%] translate-x-[-50%] flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                    <div className="ps-4 text-sm font-normal">{showSuccessToast}</div>
                </div>
            )}
            {children}
        </AuthContext.Provider>
    )
}