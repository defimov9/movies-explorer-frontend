import React from 'react';
import './AuthButton.css';

const AuthButton = ({ text, formName, isValid, isLoading }) => {
  return (
    <button
      className='auth-btn'
      type='submit'
      form={formName}
      disabled={!isValid || isLoading}>
      {isLoading ? 'Загрузка...' : text}
    </button>
  );
};

export default AuthButton;
