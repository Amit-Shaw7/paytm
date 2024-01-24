import React from 'react'
import Input from '../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { login } from '../apiCalls/user'
import { useSetRecoilState } from 'recoil'
import userState from '../store/user'

const Signin = () => {
  const setUser = useSetRecoilState(userState);
  
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // send data to backend
    const data = {
      email,
      password
    };

    const response = await login(data);
    if(response.status === 200){
      console.log(response.data.user);
      setUser(response.data.user);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    }
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
            Signin
          </Button>

        </form>
        <div className='text-center text-sm text-gray-600 font-semibold'>
          Don&apos;t have account? &nbsp;
          <Link
            to="/signup"
            className='underline decoration-slate-950'
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signin