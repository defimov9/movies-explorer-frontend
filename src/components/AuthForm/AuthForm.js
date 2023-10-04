import React from 'react';
import './AuthForm.css';

const AuthForm = ({ children, onSubmit, name }) => {
  return (
    <form className='form' id={name} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default AuthForm;
