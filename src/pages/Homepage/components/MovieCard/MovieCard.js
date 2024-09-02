import React from 'react'
import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css';
import{number}from './18.png';

const MovieCard = ({movie,index}) => {
  return (
    <div
    style={{
      backgroundImage:
        "url("+
        `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
        ")"
    }}
    className='MovieCard'
  >
        <div key={index} className='Movie_Card_text' >
            <h5>{movie.title}</h5>
            <p>
            {movie.genre_ids.map((id) => (
              <Badge pill bg="danger" key={id}>
                 {id}
               </Badge>
           ))}
            </p>
          <div>
            <div>⭐️{movie.vote_average.toFixed(1)}</div>
            <div>{movie.popularity.toFixed(0)}</div>
            <div>{movie.adult ? <img src={require('./18.png')} alt="over18" /> : '👶18under'}</div>
          </div>
        </div>
    </div>
   );

}

export default MovieCard
