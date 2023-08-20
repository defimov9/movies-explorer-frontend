import React from 'react';
import { Link } from 'react-router-dom';
import './NavAuth.css';

const NavAuth = () => {
  return (
    <nav className='nav-auth'>
      <Link to='/signup' className='nav-auth__link'>
        Регистрация
      </Link>
      <Link to='/signin' className='nav-auth__link nav-auth__link_sign-in'>
        Войти
      </Link>
    </nav>
  );
};

export default NavAuth;
