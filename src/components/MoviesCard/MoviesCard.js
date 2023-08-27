import React, { useContext, useEffect, useState } from 'react';
import './MoviesCard.css';
import { BEATFILM_URL } from '../../utils/constants';
import { useLocation } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';

const MoviesCard = ({ movie }) => {
  const { pathname } = useLocation();
  const { savedMovies, setSavedMovies } = useContext(CurrentUserContext);

  const [savedStatus, setSavedStatus] = useState({});

  useEffect(() => {
    const savedMovie = savedMovies.find(
      (m) => m.movieId === movie.id || m._id === movie._id
    );

    setSavedStatus(
      savedMovie
        ? { isSaved: true, _id: savedMovie._id }
        : { isSaved: false, _id: '' }
    );
  }, [savedMovies, movie.id, movie._id]);

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
      .deleteMovie(savedStatus._id)
      .then(() => {
        setSavedMovies((state) =>
          state.filter((m) => m._id !== savedStatus._id)
        );
        setSavedStatus({});
      })
      .catch((err) => console.log(err));
  };

  const handleLikeClick = () => {
    savedStatus.isSaved ? deleteMovie(movie) : saveMovie(movie);
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
          className={`movies-card__btn ${
            pathname === '/saved-movies'
              ? 'movies-card__btn_delete'
              : savedStatus.isSaved
              ? 'movies-card__btn_active'
              : ''
          }`}
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
