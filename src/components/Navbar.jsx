import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section className='flex items-center justify-between p-4 z-[100] absolute w-full'>
      <h1 className='text-red-600 uppercase text-4xl font-bold cursor-pointer'>
        netflix
      </h1>

      <div className='text-white '>
        {/* <Link to='./signin'>sign in</Link>
        <Link to='./signout'>sign up</Link> */}

        <button className='mr-4 cursor-pointer'>Sign In</button>
        <button className='bg-red-600 py-2 px-6 rounded cursor-pointer'>
          Sign Up
        </button>
      </div>
    </section>
  );
};

export default Navbar;
