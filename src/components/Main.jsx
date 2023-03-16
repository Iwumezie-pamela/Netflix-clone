import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Request';

const Main = () => {
  const [movies, setMovies] = useState([]);

  // display one movie at a time i.e select it randomly
  const movie = movies[Math.floor(Math.random() * movies.length)];

  const fetchMovies = async () => {
    try {
      const res = await axios.get(requests.requestPopular);
      const data = res.data;
      setMovies(data.results);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // truncate text
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  return (
    <section className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          className='w-full h-full  object-cover '
        />
        {/* ? means optional chaining that way we can reach or access nested objects */}

        {/* text */}
        <div className='absolute w-full top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl capitalize font-bold mb-4'>
            {movie?.title}
          </h1>

          <div className='mb-4'>
            <button className='capitalize  cursor-pointer text-black border bg-gray-300 py-2 px-5 mr-4'>
              play
            </button>
            <button className='capitalize cursor-pointer bg-transparent text-white px-5 py-2 border border-white'>
              watch later
            </button>
          </div>
          <p className='text-gray-400 text-sm mb-[0.1rem]'>
            Released: {movie?.release_date}
          </p>
          <p className='w-full md:max-w-[70%] lg:max-w-[35%]  text-gray-200'>
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
