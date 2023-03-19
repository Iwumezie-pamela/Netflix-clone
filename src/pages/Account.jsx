import React from 'react';
import netflixImage from '../assets/netflix-image.jpeg';
import { useGlobalContext } from '../context/AuthContext';

const Account = () => {
  const { user } = useGlobalContext();
  return (
    <>
      <div className='w-full  h-[400px]'>
        <img
          src={netflixImage}
          alt=''
          className='absolute w-full h-[400px] object-cover -z-10'
        />
        <div className=' w-full h-[400px] bg-black/60'></div>

        <h1 className='p-4 text-white absolute top-[20%] text-3xl md:text-5xl md:p-8 capitalize font-bold'>
          my shows
        </h1>
      </div>
      <div className='p-4 '>
        <p className='text-white capitalize mb-8 font-bold md:text-xl'>
          my shows
        </p>
        <p className='text-white'>
          You have no saved shows. Click here to add shows to your list.
        </p>
      </div>
    </>
  );
};

export default Account;
