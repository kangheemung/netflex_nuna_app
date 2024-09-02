import React from 'react'
import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css';

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
            <div>{movie.vote_average}</div>
            <div>{movie.popularity}</div>
            <div>{movie.adult ? 'over18' : 'under18'}</div>
          </div>
      

        </div>
    </div>
   );

}

export default MovieCard
