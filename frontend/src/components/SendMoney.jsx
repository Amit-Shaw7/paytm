import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import Avatar from './Avatar'
import Input from './Input'
import Button from './Button'
import CrossBtn from './CrossBtn'
import { fetchUser } from '../apiCalls/user'
import Loader from './Loader'

const SendMoney = ({ id, open, handleClose }) => {
    const [friend, setFriend] = React.useState("");

    const [amount, setAmount] = React.useState("");
    const [loader, setLoader] = React.useState(false);
    const handleAmount = (e) => {
        setAmount(e.target.value);
    };

    const initiateTransfer = () => {

    };

    const getuserDetails = useCallback(async () => {
        setLoader(true);
        const response = await fetchUser(id);
        if (response.status === 200) {
            setLoader(false);
            setFriend(response.data.user);
        }
    }, [id]);

    React.useEffect(() => {
        getuserDetails();
    }, [getuserDetails]);

    return (
        <>
            <div className={`${open ? "opacity-50" : "opacity-0 hidden"} bg-black flex items-center justify-center min-h-screen w-full absolute top-0 left-0 transition duration-300 z-0`}>

            </div>

            <div className={`transition duration-300 ${open ? "w-[350px] h-max" : "w-0 h-0 hidden"}  p-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-md`}>

                {
                    loader
                        ?
                        <div className='h-full w-full flex items-center justify-center'>
                            <Loader handleClose={handleClose}/>
                        </div>
                        :

                        <div className='flex flex-col gap-4 relative'>
                            <CrossBtn handleClose={handleClose} />
                            <h3 className='mb-4 text-3xl font-semibold text-center'>Send money</h3>
                            <div className='flex gap-4 items-center '>
                                <Avatar
                                    color="success"
                                    name={friend?.firstName}
                                />
                                <h4 className='text-2xl font-semibold'>{friend?.firstName}</h4>
                            </div>

                            <Input
                                id='friendsName'
                                placeholder='Enter amount'
                                required={true}
                                type='text'
                                label="Amount (in Rs)"
                                htmlFor="amount"
                                onChange={handleAmount}
                                value={amount}
                            />

                            <Button
                                name='transfer'
                                color="success"
                                fullWidth={true}
                                type="button"
                                size="small"
                                onClick={initiateTransfer}
                            >
                                Initiate transfer
                            </Button>
                        </div>
                }
            </div>
        </>
    )
}

SendMoney.propTypes = {
    id: PropTypes.string,
    open: PropTypes.bool,
    handleClose: PropTypes.func
}

export default SendMoney