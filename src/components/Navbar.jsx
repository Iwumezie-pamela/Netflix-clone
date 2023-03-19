import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = useGlobalContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className='flex items-center justify-between p-4 z-[100] absolute w-full'>
      <Link
        to='/'
        className='text-red-600 uppercase text-4xl font-bold cursor-pointer'
      >
        netflix
      </Link>

      {user?.email ? (
        <div className='flex items-center text-white ml-1'>
          <Link to='/account' className='mr-2 sm:mr-4 cursor-pointer'>
            Account
          </Link>
          <button
            onClick={handleLogout}
            className='bg-red-600 py-1 px-2 sm:py-2 sm:px-6 rounded cursor-pointer'
          >
            Logout
          </button>
        </div>
      ) : (
        <div className='ml-2 text-white '>
          <Link to='/login' className='mr-2 sm:mr-4 cursor-pointer'>
            Sign In
          </Link>
          <Link
            to='/signup'
            className=' bg-red-600  py-1 px-1 sm:py-2 sm:px-6 rounded cursor-pointer'
          >
            Sign Up
          </Link>
        </div>
      )}
    </section>
  );
};

export default Navbar;
