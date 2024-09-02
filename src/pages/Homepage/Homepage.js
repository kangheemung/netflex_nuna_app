import React from 'react';
import './Homepage.style.css';
import Banner from './components/Banner/Banner';
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import TopRatedMovieSlide from './components/TopRatedMovieSlide/TopRatedMoviesSlide';
import UpcomingMoivesSlide from './components/UpcomingMoivesSlide/UpcomingMoivesSlide';


const Homepage = () => {
//1. 배너 =>popular 영화를 들고 와서 첫번째 아이템을 보여주자 
//2.popular movie
// 3.top rated Movie
// 4. upcoming movie
  return (
    <div>
      <Banner/>
     <PopularMovieSlide/>
     <TopRatedMovieSlide/>
     <UpcomingMoivesSlide/>
    </div>
  )
}

export default Homepage
