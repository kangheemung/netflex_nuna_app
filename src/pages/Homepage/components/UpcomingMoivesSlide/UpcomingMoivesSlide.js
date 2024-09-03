import React from "react";
import { Alert} from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

import { useUpcomingMoviesQuery } from "../../../../hook/useUpcomingMovies";
import MovieUpcomingMoviesSlide from '../../../../common/MovieUpcomingMoviesSlide/MovieUpcomingMoviesSlide';
import {responsive} from '../../../../constants/responsive';
const UpcomingMoivesSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError){
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
    <MovieUpcomingMoviesSlide
     title='Top Rated Movies'
     movies={data.results}
     responsive={responsive}
    />
  </div>
  );
};

export default UpcomingMoivesSlide;