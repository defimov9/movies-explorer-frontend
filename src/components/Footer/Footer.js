import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <h3 className='footer__title'>
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <div className='footer__container'>
          <p className='footer__copyright'>© {new Date().getFullYear()}</p>
          <ul className='footer__list'>
            <li className='footer__item'>
              <a
                className='footer__link'
                href='https://practicum.yandex.ru/'
                target='_blank'
                rel='noreferrer'>
                Яндекс.Практикум
              </a>
            </li>
            <li className='footer__item'>
              <a
                className='footer__link'
                href='https://github.com/defimov9'
                target='_blank'
                rel='noreferrer'>
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
