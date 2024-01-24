import React from 'react'
import Navbar from '../components/Navbar'
import Input from '../components/Input';
import UserItem from '../components/UserItem';
import userState from '../store/user';
import { useRecoilValue } from 'recoil';
import balanceState from '../store/balance';
import { useNavigate } from 'react-router-dom';
import SendMoney from '../components/SendMoney';

const Dashboard = () => {
    const balance = useRecoilValue(balanceState);
    const user = useRecoilValue(userState);

    

    console.log(user);

    const navigate = useNavigate();

    const [searchText, setSearchText] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [friendId, setFriend] = React.useState("");


    const handleSearchText = (event) => {
        setSearchText(event.target.value);
    }

    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = (id) => {
        setOpen(true);
        setFriend(id)
    }

    React.useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    return (
        <>
            <div className='h-full w-full relative'>
                <Navbar />

                <div className='mt-5 flex flex-col justify-center gap-10 px-10'>
                    <p className='mt-3 text-3xl font-bold'>Your balance : {balance}</p>

                    <div className='flex flex-col gap-5'>
                        <p className='text-3xl font-bold'>Users</p>
                        <Input
                            value={searchText}
                            onChange={handleSearchText}
                            placeholder="Search users..."
                            required={true}
                            id='search'
                            type='text'
                            size='large'
                        />
                    </div>

                    <div className='flex flex-col gap-3'>
                        {
                            users.map((user) => (
                                <UserItem
                                    key={user._id}
                                    name={user.firstName}
                                    id={user._id}
                                    openSendMoneyModal={handleOpen}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <SendMoney open={open} handleClose={handleClose} id={friendId}/>
        </>
    )
}

export default Dashboard;


const users = [
    {
        firstName: "amit",
        lastName: "shaw",
        _id: 1
    },
    {
        firstName: "amit",
        lastName: "shaw",
        _id: 2
    },
    {
        firstName: "amit",
        lastName: "shaw",
        _id: 3
    },
    {
        firstName: "amit",
        lastName: "shaw",
        _id: 4
    },
]