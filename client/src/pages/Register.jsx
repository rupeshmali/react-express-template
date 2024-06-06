import { useContext, useState } from "react"
import { AuthContext } from "../contexts/auth"

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { errorMessage, doRegistration } = useContext(AuthContext)

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleResgister = async () => {
        await doRegistration(name, email, password);
    }
    return (
        <div className="flex flex-col col-span-1 gap-10 bg-slate-100 p-10 rounded grow w-full">
            <div className="text-4xl"><h1>Sign up</h1></div>
            <div className="text-sm text-red-500 rounded">{errorMessage}</div>
            <div><input className="rounded p-2 w-full" placeholder="Enter your name" type="text" onChange={handleName} /></div>
            <div><input className="rounded p-2 w-full" placeholder="Enter your email" type="text" onChange={handleEmail} /></div>
            <div><input className="rounded p-2 w-full" placeholder="Enter your password" type="password" onChange={handlePassword} name="" id="" /></div>
            <div><button className="rounded bg-blue-500 text-white p-2 w-full" onClick={handleResgister}>Register</button></div>
        </div>
    )
}
export default Register