import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

const MoviesCardList = ({ movies }) => {
  return (
    <section className='movies-card-list'>
      <ul className='movies-card-list__list'>
        {movies.map((movie) => (
          <MoviesCard key={movie.id || movie._id} movie={movie} />
        ))}
      </ul>
    </section>
  );
};

export default React.memo(MoviesCardList);
