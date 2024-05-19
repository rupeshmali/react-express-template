const Button = ({ children, ...props }) => {
    return (
        <button
            className="
                h-10 px-4 rounded bg-slate-800 hover:bg-black text-white text-sm
                font-medium transition-all
            "
            {...props}
        >
            {children}
        </button>
    )
}
export default Button