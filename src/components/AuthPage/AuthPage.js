import React from 'react';
import './AuthPage.css';
import { Link } from 'react-router-dom';

const AuthPage = ({ children, title }) => {
  return (
    <main className='auth'>
      <div className='auth__container'>
        <Link className='auth__logo' to='/' />
        <h2 className='auth__title'>{title}</h2>
      </div>
      {children}
    </main>
  );
};

export default AuthPage;
