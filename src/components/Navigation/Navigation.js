import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import profileIcon from '../../images/profile-icon.svg';

const Navigation = ({ isMenuOpen }) => {
  const navigationOpened = isMenuOpen ? 'navigation_opened' : '';
  const navigationMenuOpened = isMenuOpen ? 'navigation__menu_opened' : '';

  return (
    <nav className={`navigation ${navigationOpened}`}>
      <div className={`navigation__menu ${navigationMenuOpened}`}>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <NavLink
              className={({ isActive }) =>
                `navigation__link navigation__link_home ${
                  isActive ? 'navigation__link_active' : ''
                }`
              }
              to='/'>
              Главная
            </NavLink>
          </li>
          <li className='navigation__item'>
            <NavLink
              className={({ isActive }) =>
                `navigation__link ${isActive ? 'navigation__link_active' : ''}`
              }
              to='/movies'>
              Фильмы
            </NavLink>
          </li>
          <li className='navigation__item'>
            <NavLink
              className={({ isActive }) =>
                `navigation__link ${isActive ? 'navigation__link_active' : ''}`
              }
              to='/saved-movies'>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <NavLink
          className='navigation__link navigation__link_profile'
          to='/profile'>
          Аккаунт{' '}
          <img className='navigation__icon' src={profileIcon} alt='профиль' />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
