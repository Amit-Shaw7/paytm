import PropTypes from 'prop-types'

const Input = ({ label, value, onChange, type, placeholder, htmlFor, id, size, required }) => {
    return (
        <div className='flex flex-col gap-2 w-full'>
           {label && <label
                className='text-md text-black font-semibold'
                htmlFor={htmlFor}
            >
                {label}
            </label>}

            <input
                className={`
                    ${size === "large" ? "h-12" : "h-9"}
                    p-2
                    text-gray-600
                    border
                    border-gray-300
                    rounded-md
                    font-semibold
                `}
                required={required}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                id={id}
                name={label}
            />
        </div>
    )
}

export default Input;
Input.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    htmlFor: PropTypes.string,
    size: PropTypes.string.isRequired,
    required: PropTypes.string.isRequired,
}