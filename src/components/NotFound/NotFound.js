import React from 'react';
import './NotFound.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  const handleBackClick = () => navigate(-1);

  return (
    <section className='not-found'>
      <div className='not-found__container'>
        <p className='not-found__error'>404</p>
        <h2 className='not-found__text'>Страница не найдена</h2>
      </div>
      <button className='not-found__btn' onClick={handleBackClick}>
        Назад
      </button>
    </section>
  );
};

export default NotFound;
