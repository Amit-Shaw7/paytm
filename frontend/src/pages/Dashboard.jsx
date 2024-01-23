import React from 'react'
import Navbar from '../components/Navbar'
import Input from '../components/Input';
import UserItem from '../components/UserItem';
import userState from '../store/user';
import { getProfile } from '../apiCalls/user';
import { useRecoilState } from 'recoil';

const Dashboard = () => {
    const [user , setUser] = useRecoilState(userState);

    const fetchUser = async () => {
        const response = await getProfile();
        if (response.status === 200) {
            setUser(response.data);
        }
    }
    React.useEffect(() => {
        fetchUser();
    }, []);

    const [searchText, setSearchText] = React.useState("");
    const handleSearchText = (event) => {
        setSearchText(event.target.value);
    }

    return (
        <div className='h-full w-full'>
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
                            />
                        ))
                    }
                </div>
            </div>
        </div>
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