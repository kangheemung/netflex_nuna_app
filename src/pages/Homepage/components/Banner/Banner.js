import React from 'react'
import './Banner.style.css'
;import { usePopularMoviesQuery } from '../../../../hook/usePopularMovies';

const Banner = () => {
  const{data, isLoading, isError, error} = usePopularMoviesQuery();
    console.log("ddd", data);
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (isError) {
      return <div>Error: {error.message}</div>;
    }
    const imageUrl = data?.results[0]?.backdrop_path;
    return (
      <div style={{
        backgroundImage: `url(${imageUrl})`
      }}>

    </div>
  );
}

export default Banner;
