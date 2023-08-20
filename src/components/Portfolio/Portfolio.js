import React from 'react';
import './Portfolio.css';
import linkArrow from '../../images/portfolio-link-icon.svg';

const Portfolio = () => {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            href='https://github.com/defimov9/how-to-learn'
            target='_blank'
            rel='noreferrer'>
            Статичный сайт
            <img
              className='portfolio__link-icon'
              src={linkArrow}
              alt='стрелка'
            />
          </a>
        </li>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            href='https://defimov9.github.io/russian-travel/index.html#'
            target='_blank'
            rel='noreferrer'>
            Адаптивный сайт
            <img
              className='portfolio__link-icon'
              src={linkArrow}
              alt='стрелка'
            />
          </a>
        </li>
        <li className='portfolio__item'>
          <a
            className='portfolio__link'
            href='https://github.com/defimov9/react-mesto-api-full-gha'
            target='_blank'
            rel='noreferrer'>
            Одностраничное приложение
            <img
              className='portfolio__link-icon'
              src={linkArrow}
              alt='стрелка'
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
