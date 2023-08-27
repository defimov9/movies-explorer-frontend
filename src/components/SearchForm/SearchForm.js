import React, { useEffect, useState } from 'react';
import './SearchForm.css';

const SearchForm = ({
  isLoading,
  handleSearchSubmit,
  handleIsShortCheckbox,
  keyWord,
  isShort,
  setIsShort,
}) => {
  const [emptyInputError, setEmptyInputError] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setSearchValue(keyWord);
  }, [keyWord]);

  const handleSubmit = (e) => {
    console.log(searchValue);
    e.preventDefault();
    if (searchValue) {
      handleSearchSubmit(searchValue);
      setEmptyInputError(false);
    } else {
      setEmptyInputError(true);
    }
  };

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleChangeCheckbox = () => {
    setIsShort(!isShort);
    handleIsShortCheckbox(!isShort);
  };

  return (
    <section className='search'>
      <form
        className='search__form'
        name='search'
        onSubmit={handleSubmit}
        noValidate>
        <div className='search__icon'></div>
        <input
          className='search__input'
          placeholder='Фильм'
          type='text'
          name='keyWord'
          value={searchValue}
          onChange={handleChangeSearch}
          disabled={isLoading}
          required
        />
        {emptyInputError ? (
          <span className='search__error' id='searchFilm-error'>
            Нужно ввести ключевое слово
          </span>
        ) : null}

        <button className='search__btn' type='submit'>
          Найти
        </button>
        <label className='search__label'>
          <input
            className='search__checkbox'
            type='checkbox'
            id='short-movies'
            onChange={handleChangeCheckbox}
            checked={isShort}
          />
          <span className='search__pseudo'>
            <span className='search__circle' />
          </span>
          Короткометражки
        </label>
      </form>
    </section>
  );
};

export default SearchForm;
