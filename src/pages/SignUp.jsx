import React, { useState } from 'react';
import netflixImage from '../assets/netflix-image.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/AuthContext';

const SignUp = () => {
  const { user, signUp } = useGlobalContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className='w-full h-screen  '>
        <img
          src={netflixImage}
          className='hidden sm:block w-full h-full absolute object-cover'
          alt=''
        />
        <div className='fixed top-0 left-0 w-full h-screen bg-black/60'></div>
        <div className='z-50 fixed w-full px-4 py-24 '>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75'>
            <div className='max-w-[320px]  mx-auto py-16'>
              <h1 className='text-white text-3xl font-bold capitalize mb-6'>
                sign up
              </h1>

              <form onSubmit={handleSubmit}>
                <input
                  type='email'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='outline-none bg-gray-700 text-gray-200 py-3 w-full mb-4 px-3 '
                  autoComplete='email'
                />
                <input
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='outline-none bg-gray-700 text-gray-200 py-3 w-full mb-8 px-3'
                  autoComplete='password'
                />
                <button
                  type='submit'
                  className='text-white text-centers font-bold bg-red-600 w-full py-3 outline-none rounded'
                >
                  Sign Up
                </button>

                <div className='flex items-center justify-between mt-6'>
                  <div className='flex items-center '>
                    <input type='checkbox' id='remember' className='mr-2' />
                    <label htmlFor='remember' className='text-gray-600 text-sm'>
                      Remember me
                    </label>
                  </div>

                  <p className='capitalize text-sm text-gray-600 '>
                    need help?
                  </p>
                </div>
                <p className='text-gray-600 mt-8'>
                  Already subscribed to Netflix?{' '}
                  <Link to='/login' className='cursor-pointer text-white'>
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
