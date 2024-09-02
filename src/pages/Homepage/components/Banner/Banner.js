import React from 'react'
import './Banner.style.css'
import { usePopularMoviesQuery } from '../../../../hook/usePopularMovies';
import { Alert } from 'react-bootstrap';
const Banner = () => {
  const{data, isLoading, isError, error} = usePopularMoviesQuery();
    console.log("ddd", data);
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (isError) {
      return <Alert variant='danger'>Error: {error.message}</Alert>;
    }
  
    return (
      <div className='banner_area'>
      <div style={{
        backgroundImage: "url("+`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data.results[0].backdrop_path}`+")"
      }} className='banner'>
        <div className='banner-text-area'>
          <div className='banner-text'>
          <h1 className='title'>{data.results[0].title}</h1>
          <p>{data.results[0].overview}</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Banner;
