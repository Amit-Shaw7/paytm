import PropTypes from 'prop-types'

const CrossBtn = ({ handleClose }) => {
    return (
        <div onClick={handleClose} className='absolute top-[0px] right-[0px] cursor-pointer'>
            <img
                height="15px"
                width="15px"
                src='/cross.svg'
            />
        </div>
    )
}

CrossBtn.propTypes = {
    handleClose: PropTypes.func
}

export default CrossBtn