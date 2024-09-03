import React from 'react';
import './MovieSlicer.style.css';
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from '../MovieCard/MovieCard';

const MovieSlider = ({title,movies,responsive}) => {

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
  )
}

export default MovieSlider
