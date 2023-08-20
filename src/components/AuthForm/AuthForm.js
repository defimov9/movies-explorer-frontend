import React from 'react';
import './AuthForm.css';

const AuthForm = ({ children }) => {
  return <form className='form'>{children}</form>;
};

export default AuthForm;
