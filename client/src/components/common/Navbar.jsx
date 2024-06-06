import { Link } from "react-router-dom";
import { PATHS } from "../../utils/constants";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { TbLogout } from "react-icons/tb";

const Navbar = () => {
    const { doLogout, currentUser } = useContext(AuthContext)
    return (
        <div className="px-5 bg-white border-b h-[60px] flex items-center">
            <div className="flex items-center justify-between w-[1920px] mx-auto">
                <Link to={PATHS.HOME} className="font-medium text-slate-800">
                    react-express-starter
                </Link>
                <div className="flex items-center gap-2">
                    {currentUser ? (
                        <>
                            <span className="font-medium text-sm text-slate-800 px-3">
                                {currentUser.name}
                            </span>
                            <div className="h-6 w-[1px] bg-slate-200"></div>
                            <span className="flex items-center gap-2 px-3 cursor-pointer py-2 text-red-500 text-sm" onClick={doLogout}>
                                Logout
                                <TbLogout size={16}/>
                            </span>
                        </>
                    ) : (
                        <>
                            <Link to={PATHS.LOGIN} className="rounded py-2 px-3 text-indigo-700 font-medium text-sm">
                                Login
                            </Link>
                            <Link to={PATHS.REGISTER} className="rounded py-2 px-3 text-indigo-700 font-medium text-sm">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Navbar;