import React from 'react';
import './MovieTopMovieSlide.style.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from '../MovieCard/MovieCard';
import { Container } from "react-bootstrap";
const MovieTopMovieSlide = ({title,movies,responsive}) => {
  return (
    <div>
        <div>
        <Container>
            <h2>{title}</h2>
        </Container>
        </div>
        <Carousel
            responsive={responsive}
            infinite={true}
            centerMode={true}
            containerClass = "carousel-container"
            itemClass = "movie-slider p-1"
        >
            {movies.map((movie, index) => (
                    <MovieCard movie={movie} key={index} />
            ))}
        </Carousel>
    </div>
  );
};

export default MovieTopMovieSlide
