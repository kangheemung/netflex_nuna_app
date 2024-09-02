import React from "react";
import { Alert, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";
import "./UpcomingMovies.style.css";
import { useUpcomingMoviesQuery } from "../../../../hook/useUpcomingMovies";
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

const UpcomingMoivesSlide = () => {
  const { data, isLoading, isError, error } = useUpcomingMoviesQuery();

  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError){
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className="UpcomingMoiveSlide text-white">
      <Container>
        <h3>Upcoming Movies</h3>
      </Container>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {data.results.map((movie, id) => {
          return <MovieCard key={id } movie={movie} />;
        })}
      </Carousel>
    </div>
  );
};

export default UpcomingMoivesSlide;