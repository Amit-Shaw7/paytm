import PropTypes from 'prop-types'

const Button = ({ children, name, onClick, type, size, fullWidth, color }) => {
    return (
        <button
            className={`
                ${size === "small" ? "py-2 px-4" : "py-4 px-8"}
                ${fullWidth ? "w-full" : "w-fit"}
                ${color === "success" ? "bg-green-500" : "bg-black"}
                text-white
                font-[500]
                rounded-md
                cursor-pointer
                hover:bg-slate-900
                transition-all
                duration-300
            `}
            type={type}
            onClick={onClick}
            name={name}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    color: PropTypes.string,
    fullWidth: PropTypes.bool,
    size: PropTypes.string
}

export default Button