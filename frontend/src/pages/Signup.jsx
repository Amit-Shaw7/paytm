import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    };
    const handleLastName = (event) => {
        setLastName(event.target.value);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName, lastName, email, password);
        // send data to backend
    }
    return (
        <div className='min-h-screen w-full flex items-center justify-center'>
            <div className='w-[300px] shadow-md p-5 flex flex-col gap-3'>
                <div className='flex flex-col items-center justify-center gap-5'>
                    <h1 className='font-bold text-3xl'>Signup</h1>
                    <p className='text-md text-gray-500 font-[500] text-center'>Enter your information to create an account</p>
                </div>

                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <Input
                        value={firstName}
                        onChange={handleFirstName}
                        label='First Name'
                        placeholder='Amit'
                        type='text'
                        htmlFor='firstName'
                        id='firstName'
                        required={true}
                    />

                    <Input
                        value={lastName}
                        onChange={handleLastName}
                        label='Last Name'
                        placeholder='Shaw'
                        type='text'
                        htmlFor='lastName'
                        id='lastName'
                        required={true}
                    />

                    <Input
                        value={email}
                        onChange={handleEmail}
                        label='Email'
                        placeholder='amit@gmail.com'
                        type='email'
                        htmlFor='email'
                        id='email'
                        required={true}
                    />

                    <Input
                        value={password}
                        onChange={handlePassword}
                        label='Password'
                        placeholder='******'
                        type='password'
                        htmlFor='password'
                        id='password'
                        required={true}
                    />

                    <Button
                        type="submit"
                        name="signup"
                        size="small"
                        fullWidth={true}
                    >
                        Sign up
                    </Button>

                </form>
                <div className='text-center text-sm text-gray-600 font-semibold'>
                    Already have account? &nbsp;
                    <Link
                        to="/signin"
                        className='underline decoration-slate-950'
                    >
                        login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Signup