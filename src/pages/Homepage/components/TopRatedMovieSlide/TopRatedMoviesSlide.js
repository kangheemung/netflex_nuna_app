import React from "react";
import { Alert} from "react-bootstrap";
import { useTopRatedMoviesQuery } from '../../../../hook/useTopRatedMovies';
import "./TopRatedMoviesSlide.style.css";
import MovieTopMovieSlide from '../../../../common/MovieTopMovieSlide/MovieTopMovieSlide';
import {responsive} from '../../../../constants/responsive';

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();
  console.log(data)

  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError){
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
        <div>
          <MovieTopMovieSlide
           title='Top Rated Movies'
           movies={data.results}
           responsive={responsive}
          />
        </div>
  );
};

export default TopRatedMovieSlide;