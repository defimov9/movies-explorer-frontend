import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import MoviesApi from '../../utils/MoviesApi';
import { filterMovies } from '../../utils/moviesUtils';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [keyWord, setKeyWord] = useState('');
  const [isShort, setIsShort] = useState(false);
  const [moviesCount, setMoviesCount] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMoreBtnVisible, setIsMoreBtnVisible] = useState(false);

  const beatFilmsMovies =
    JSON.parse(localStorage.getItem('beatFilmsMovies')) || [];

  useEffect(() => {
    const keyWord = localStorage.getItem('keyWord') || '';
    const isShort = JSON.parse(localStorage.getItem('isShort')) || false;
    const searchResult = JSON.parse(localStorage.getItem('searchResult')) || [];

    if (keyWord) setKeyWord(keyWord);
    if (isShort) setIsShort(isShort);
    if (searchResult) setSearchedMovies(searchResult);
  }, []);

  useEffect(() => {
    searchedMovies.length > moviesCount
      ? setIsMoreBtnVisible(true)
      : setIsMoreBtnVisible(false);
  }, [moviesCount, searchedMovies.length]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 1280) {
      setMoviesCount(16);
    } else if (windowWidth <= 768) {
      setMoviesCount(8);
    } else {
      setMoviesCount(5);
    }
  }, [windowWidth, keyWord]);

  const setFilterResult = (movies) => {
    localStorage.setItem('searchResult', JSON.stringify(movies));
    setSearchedMovies(movies);
  };

  const getFilteredMovies = (keyWord, isShortMovies) => {
    if (!beatFilmsMovies.length) {
      setIsLoading(true);
      MoviesApi.getMovies()
        .then((movies) => {
          localStorage.setItem('beatFilmsMovies', JSON.stringify(movies));
          setFilterResult(filterMovies(movies, keyWord, isShortMovies));
        })
        .catch((err) => {
          setSearchError(true);
        })
        .finally(() => setIsLoading(false));
    } else {
      setFilterResult(filterMovies(beatFilmsMovies, keyWord, isShortMovies));
    }
  };

  const handleSearchSubmit = (word) => {
    localStorage.setItem('keyWord', word);
    setKeyWord(word);
    getFilteredMovies(word, isShort);
  };

  const handleIsShortCheckbox = (isChecked) => {
    localStorage.setItem('isShort', isChecked);
    setIsShort(isChecked);
    getFilteredMovies(keyWord, isChecked);
  };

  const handleResize = () => setWindowWidth(window.innerWidth);

  const handleShowMore = () => {
    windowWidth >= 768
      ? setMoviesCount(moviesCount + 4)
      : setMoviesCount(moviesCount + 2);
  };

  return (
    <>
      <Header loggedIn={true} />
      <main className='movies'>
        <div className='movies__container'>
          <SearchForm
            isLoading={isLoading}
            handleSearchSubmit={handleSearchSubmit}
            handleIsShortCheckbox={handleIsShortCheckbox}
            keyWord={keyWord}
            isShort={isShort}
            setIsShort={setIsShort}
          />
          {isLoading ? (
            <Preloader />
          ) : (
            <MoviesCardList movies={searchedMovies.slice(0, moviesCount)} />
          )}
          {!isLoading && searchedMovies.length === 0 && keyWord ? (
            <p className='movies__error'>Ничего не найдено</p>
          ) : null}
          {!isLoading && searchError ? (
            <p className='movies__error'>
              Во время запроса произошла ошибка. Возможно, проблема с
              соединением или сервер недоступен. Подождите немного и попробуйте
              ещё раз
            </p>
          ) : null}
          {isMoreBtnVisible ? (
            <button className='movies__btn' onClick={handleShowMore}>
              Ещё
            </button>
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Movies;
