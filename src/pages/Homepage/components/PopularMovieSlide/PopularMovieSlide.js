import React from 'react';
import { usePopularMoviesQuery } from '../../../../hook/usePopularMovies';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Alert, Container } from 'react-bootstrap'; 
import MovieCard from '../MovieCard/MovieCard';
import './PopularMovieSlide.style.css'
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

  }
};

const PopularMovieSlide = () => {
  const{data, isLoading, isError, error} = usePopularMoviesQuery();
  console.log("PopularMovieSlide", data);
  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError){
    return <Alert variant="danger">{error.message}</Alert>;
  }
return (<div>
  <div className='popular_title'>
  <Container>
  <h2>Popular movies</h2>
  </Container>
  </div>
<Carousel
  // swipeable={false}
  // draggable={false}
  // showDots={true}
 responsive={responsive}
  // ssr={true} // means to render carousel on server-side.
  infinite={true}
  centerMode={true}
  // autoPlay={this.props.deviceType !== "mobile" ? true : false}
  // autoPlaySpeed={1000}
  // keyBoardControl={true}
  // customTransition="all .5"
  // transitionDuration={500}
  containerClass = "carousel-container"
  // removeArrowOnDeviceType={["tablet", "mobile"]}
  // deviceType={this.props.deviceType}
  // dotListClass="custom-dot-list-style"
  itemClass = "movie-slider p-1"
>
  {data.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
</Carousel>
  </div>
  );
};

export default PopularMovieSlide;
