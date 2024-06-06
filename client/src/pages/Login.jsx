import { useContext, useState } from "react"
import { AuthContext } from "../contexts/auth"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { doLogin, errorMessage } = useContext(AuthContext)

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleLogin = async () => {
        await doLogin(email, password);
    }

    return (
        <div className="flex flex-col col-span-1 gap-10 bg-slate-100 p-10 grow w-full">
            <div className="text-4xl"><h1>Login</h1></div>
            <div className="text-sm text-red-500 rounded">{errorMessage}</div>
            <input className="rounded p-2 w-full" placeholder="Enter your email" type="text" onChange={handleEmail} />
            <input className="rounded p-2 w-full" placeholder="Enter your password" type="password" onChange={handlePassword} name="" id="" />
            <button className="rounded bg-blue-500 text-white p-2 w-full" onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login