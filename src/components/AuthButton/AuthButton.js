import React from 'react';
import './AuthButton.css';

const AuthButton = ({ text, onSubmit }) => {
  return (
    <button className='auth-btn' type='submit' onSubmit={onSubmit}>
      {text}
    </button>
  );
};

export default AuthButton;
