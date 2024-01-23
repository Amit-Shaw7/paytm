import PropTypes from 'prop-types'

const Avatar = ({name}) => {
  return (
    <div className='flex items-center justify-center w-[40px] h-[40px] rounded-full bg-gray-500 text-gray-200'>
        <p>{name?.charAt(0)?.toUpperCase()}</p>
    </div>
  )
}

Avatar.propTypes = {
    name : PropTypes.string
}

export default Avatar