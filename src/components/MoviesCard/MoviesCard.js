import React, { useContext } from 'react';
import './MoviesCard.css';
import { BEATFILM_URL } from '../../utils/constants';
import { useLocation } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';

const MoviesCard = ({ movie, onCardLike, onCardDelete }) => {
  const { pathname } = useLocation();
  const { savedMovies, setSavedMovies } = useContext(CurrentUserContext);

  const isSaved = savedMovies
    ? savedMovies.some((m) => m.movieId === movie.id)
    : false;

  const buttonClass =
    pathname === '/saved-movies'
      ? 'movies-card__btn_delete'
      : isSaved
      ? 'movies-card__btn_active'
      : '';

  const formatDuration = (minutes) => {
    const min = minutes % 60;
    const hours = Math.floor(minutes / 60);
    return !hours ? `${min}м` : `${hours}ч ${min}м`;
  };

  const saveMovie = () => {
    mainApi
      .createMovie(movie)
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
      })
      .catch((err) => console.log(err));
  };

  const deleteMovie = () => {
    mainApi
      .deleteMovie(movie.id)
      .then(() => {
        setSavedMovies((state) => state.filter((m) => m.movieId === movie.id));
      })
      .catch((err) => console.log(err));
  };

  const handleLikeClick = () => {
    const isMovieSaved = savedMovies.some((m) => m.movieId === movie.id);
    isMovieSaved ? deleteMovie(movie) : saveMovie(movie);
  };

  const handleDeleteClick = () => {
    deleteMovie(movie);
  };

  return (
    <li className='movies-card'>
      <a
        className='movies-card__trailer-link'
        href={movie.trailerLink}
        target='_blank'
        rel='noreferrer'>
        <img
          className='movies-card__image'
          src={movie.image.url ? BEATFILM_URL + movie.image.url : movie.image}
          alt={movie.title}
        />
      </a>

      <div className='movies-card__container'>
        <p className='movies-card__title'>{movie.nameRU}</p>
        <button
          className={`movies-card__btn ${buttonClass}`}
          onClick={
            pathname === '/saved-movies' ? handleDeleteClick : handleLikeClick
          }
        />
      </div>
      <p className='movies-card__duration'>{formatDuration(movie.duration)}</p>
    </li>
  );
};

export default MoviesCard;
