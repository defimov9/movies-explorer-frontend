import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className='search'>
      <form className='search__form' name='search'>
        <div className='search__icon'></div>
        <input
          className='search__input'
          placeholder='Фильм'
          type='text'
          required
        />
        <button className='search__btn' type='submit'>
          Найти
        </button>
        <label className='search__label'>
          <input
            className='search__checkbox'
            type='checkbox'
            id='short-movies'
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
