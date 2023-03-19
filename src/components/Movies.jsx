import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useGlobalContext } from '../context/AuthContext';

const Movies = ({ movie }) => {
  const { user } = useGlobalContext();

  const [like, setLike] = useState(false);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
    } else {
      alert('Please log in to save a movie');
    }
  };

  return (
    <div
      className='w-[160px] sm:w-[200px] md:2-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'
      key={movie?.id}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
        alt={movie?.title}
        className='w-full h-auto block'
      />

      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white hover:transition-all hover:ease-in-out  hover:duration-150'>
        <p className='flex items-center justify-center h-full text-xs md:text-sm font-bold overflow-hidden whitespace-normal'>
          {movie?.title}
        </p>

        <p onClick={saveShow}>
          {like ? (
            <FaHeart className='absolute top-4 left-4 text-gray-300' />
          ) : (
            <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movies;
