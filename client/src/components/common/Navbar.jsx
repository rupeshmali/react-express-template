import Button from "../custom/Button"

const Navbar = () => {
    return (
        <div className="px-5 bg-white border-b min-h-[60px] flex items-center">
            <div className="flex items-center justify-between w-[1920px] mx-auto">
                <div className="font-medium text-slate-800">
                    react-express-starter
                </div>
                <Button>
                    Get Started
                </Button>
            </div>
        </div>
    )
}
export default Navbar;