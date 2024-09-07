import React from 'react';
import './MovieRecommend.style.css';
import { useMovieRecommendQuery } from '../../../hook/useMovieRecommend';
import MovieSlider from "../../../common/MovieSlider/MovieSlider";
import {  Alert , Spinner} from 'react-bootstrap';


const MovieRecommend = ({id}) => {

  const {
     data: recommendData,
    isLoading,
    isError,
    error
  } = useMovieRecommendQuery({id});
  if (isLoading) {
    return (
      <div className='spinner-area'>
        <Spinner
        animation="border"
        variant="danger"
        style={{width: "5rem", height:"5rem"}}/>
      </div>
    );
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  console.log("recommendData", recommendData);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="recommend-card-container">
      <h3  style={{ marginTop: "2em" }}>Movie Recommendation</h3>
     <MovieSlider
          movies={recommendData.results}
          isLoading={isLoading}
          isError={isError}
          responsive={responsive}
          isWhite={true}
        />
    </div>

  )
}

export default MovieRecommend
