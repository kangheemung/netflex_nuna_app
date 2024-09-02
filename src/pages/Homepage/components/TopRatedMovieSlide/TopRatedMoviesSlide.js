import React from "react";
import { Alert, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard/MovieCard";
import "./TopRatedMoviesSlide.style.css";
import { useTopRatedMoviesQuery } from '../../../../hook/useTopRatedMovies';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
    <div className="PopularMovieSlide text-white">
      <Container>
        <h3>Top Rated Movies</h3>
      </Container>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {data.results.map((movie, id) => {
          return <MovieCard key={id} movie={movie} />;
        })}
      </Carousel>
    </div>
  );
};

export default TopRatedMovieSlide;