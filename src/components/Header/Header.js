import React from 'react';
import './Header.css';
import logo from '../../images/logo-header.svg';
import NavAuth from '../NavAuth/NavAuth';
import Navigation from '../Navigation/Navigation';
import { useState } from 'react';
import burgerIcon from '../../images/burger-icon.svg';
import burgerClosedIcon from '../../images/burger-close.svg';
import { Link } from 'react-router-dom';

const Header = ({ loggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='header'>
      {loggedIn ? (
        <button
          className='header__burger'
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img
            className='header__burger-icon'
            src={isMenuOpen ? burgerClosedIcon : burgerIcon}
            alt='иконка меню'
          />
        </button>
      ) : null}
      <Link className='header__home' to='/'>
        <img className='header__logo' src={logo} alt='логотип' />
      </Link>
      {loggedIn ? <Navigation isMenuOpen={isMenuOpen} /> : <NavAuth />}
    </header>
  );
};

export default Header;
