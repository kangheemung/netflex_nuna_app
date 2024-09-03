import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './MovieCard.style.css';
import { useMovieGenreQuery } from '../../hook/useMovieGenre';
import { number } from './18.png'; // Import statement at the top

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
      if (!Array.isArray(genreData)) return [];
      
      const genreNameList = genreIdList.map((id) => {
          const genreObj = genreData.find((genre) => genre.id === id);
          return genreObj ? genreObj.name : 'Genre not found';
      });

      return genreNameList;
  };



    console.log("ggg", genreData);

    return (
        <div
            style={{
                backgroundImage: `url(https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path})`
            }}
            className='MovieCard'
        >
             <div className='Movie_Card_text' >
            <h5>{movie.title}</h5>
            <p>
            {genreData && (
                    <p>
                        {showGenre(movie.genre_ids).map((genre, index) => (
                            <Badge pill bg="danger" key={index}>
                                {genre}
                            </Badge>
                        ))}
                    </p>
                )}
            </p>
          <div>
            <div>⭐️{movie.vote_average.toFixed(1)}</div>
            <div>{movie.popularity.toFixed(0)}</div>
            <div>{movie.adult ? <img src={require('./18.png')} alt="over18" /> : '👶18under'}</div>
          </div>
        </div>
        </div>
    );
};

export default MovieCard;
