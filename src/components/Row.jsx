import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Movies from './Movies';

const Row = ({ title, fetchUrl, rowID }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const res = await axios.get(fetchUrl);
      const data = await res.data;
      setMovies(data.results);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [fetchUrl]);

  const handlePrev = () => {
    let slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const handleNext = () => {
    let slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <h2 className='text-white text-base md:text-xl font-bold p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          size={40}
          className='hidden bg-white opacity-50 hover:opacity-100 absolute left-0 rounded-full cursor-pointer group-hover:block z-10'
          onClick={handlePrev}
        />

        <div
          id={'slider' + rowID} //the row id enables the scroll  functionality on different rows
          className='relative w-full h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide'
        >
          {movies.map((movie) => {
            return <Movies movie={movie} key={movie?.id} />;
          })}
        </div>

        <MdChevronRight
          size={40}
          className='hidden group-hover:block absolute right-0 bg-white opacity-50 hover:opacity-100 bg-transparent rounded-full cursor-pointer z-10'
          onClick={handleNext}
        />
      </div>
    </>
  );
};

export default Row;
