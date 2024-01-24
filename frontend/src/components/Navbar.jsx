import Avatar from './Avatar'
import userState from '../store/user'
import { useRecoilValue } from 'recoil'

const Navbar = () => {
    const user = useRecoilValue(userState);
    return (
        <div className='h-[60px] border-b border-gray-300 flex justify-between px-10 items-center'>
            <p className='font-bold text-2xl'>Paytm</p>
            <Avatar name={user?.firstName}/>
        </div>
    )
}

export default Navbar