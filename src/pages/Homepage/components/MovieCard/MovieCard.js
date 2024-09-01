import React from 'react'
import Badge from 'react-bootstrap/Badge';

const MovieCard = ({movie,index}) => {
  return (
    <div
    style={{
      backgroundImage:
        "url("+
        `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
        ")"
    }}
    className='banner'
  >
        <div key={index}>
            <h1>{movie.title}</h1>
            <h3>
            {movie.genre_ids.map((id) => (
              <Badge pill bg="danger" key={id}>
                 {id}
               </Badge>
           ))}
            </h3>
            <div>
                <div>{movie.vote_average}</div>
                <div>{movie.popularity}</div>
                <div>{movie.adult?'over18':'under18'}</div>
            </div>

        </div>
      MovieCard
    </div>
   );

}

export default MovieCard
