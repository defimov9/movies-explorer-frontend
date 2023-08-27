import React, { useContext, useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { filterMovies } from '../../utils/moviesUtils';

const SavedMovies = () => {
  const { savedMovies } = useContext(CurrentUserContext);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [keyWord, setKeyWord] = useState('');
  const [isShort, setIsShort] = useState(false);

  const getFilteredMovies = (keyWord, isShortMovie) => {
    setFilteredMovies(filterMovies(savedMovies, keyWord, isShortMovie));
  };

  const handleSearchSubmit = (word) => {
    setKeyWord(word);
    getFilteredMovies(word, isShort);
  };

  const handleIsShortCheckbox = (isChecked) => {
    setIsShort(isChecked);
    getFilteredMovies(keyWord, isChecked);
  };

  useEffect(() => {
    setFilteredMovies(savedMovies);
  }, [savedMovies]);

  return (
    <>
      <Header loggedIn={true} />
      <main className='movies'>
        <div className='movies__container'>
          <SearchForm
            handleSearchSubmit={handleSearchSubmit}
            handleIsShortCheckbox={handleIsShortCheckbox}
            keyWord={keyWord}
            isShort={isShort}
            setIsShort={setIsShort}
          />
          {!filteredMovies.length && keyWord ? (
            <p className='movies__error'>Ничего не найдено</p>
          ) : (
            <MoviesCardList movies={filteredMovies} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
