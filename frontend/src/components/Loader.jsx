import CrossBtn from "./CrossBtn";
import Proptypes from "prop-types";

const Loader = ({ handleClose }) => {
    return (
        <div className="w-full p-2 relative flex items-center justify-center">
            <CrossBtn handleClose={handleClose} />
            <div className="animate-spin w-max">
                <div className='border-4 border-gray-200 border-t-4 border-t-green-500 rounded-full h-[50px] w-[50px]'></div>
            </div>
        </div>
    )
}

export default Loader

Loader.propTypes = {
    handleClose: Proptypes.func
}