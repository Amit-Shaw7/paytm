import PropTypes from 'prop-types'

const Avatar = ({name , color}) => {
  return (
    <div 
    className={`
      ${color === "success" ? "bg-green-500" : "bg-gray-500" }
      flex 
      items-center 
      justify-center 
      w-[40px] h-[40px] 
      rounded-full  
      text-gray-200
    `}>
        <p>{name?.charAt(0)?.toUpperCase()}</p>
    </div>
  )
}

Avatar.propTypes = {
    name : PropTypes.string,
    color : PropTypes.string
}

export default Avatar