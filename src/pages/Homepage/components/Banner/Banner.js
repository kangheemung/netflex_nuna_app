import React from 'react'
import './Banner.style.css'
import { usePopularMoviesQuery } from '../../../../hook/usePopularMovies'
const Banner = () => {
    const {data}= usePopularMoviesQuery()
    console.log("ddd", data);
  return (
    <div>
      Banner
    </div>
  )
}

export default Banner;
