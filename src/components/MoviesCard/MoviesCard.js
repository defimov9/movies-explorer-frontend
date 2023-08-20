import React from 'react';
import './MoviesCard.css';

const MoviesCard = ({ movie }) => {
  const onSavedPage = window.location.pathname === '/saved-movies';
  const isLiked = false;
  const buttonClass = onSavedPage
    ? 'movies-card__btn_delete'
    : isLiked
    ? 'movies-card__btn_active'
    : '';

  return (
    <li className='movies-card'>
      <img className='movies-card__image' src={movie.image} alt={movie.title} />
      <div className='movies-card__container'>
        <p className='movies-card__title'>{movie.title}</p>
        <button className={`movies-card__btn ${buttonClass}`} />
      </div>
      <p className='movies-card__duration'>{movie.duration}</p>
    </li>
  );
};

export default MoviesCard;
