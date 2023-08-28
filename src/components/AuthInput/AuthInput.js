import React from 'react';
import './AuthInput.css';

const AuthInput = ({
  label,
  type,
  name,
  onChange,
  value,
  error,
  placeholder,
}) => {
  return (
    <label className='auth-input'>
      {label}
      <input
        className='auth-input__input'
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required
      />
      <p className='auth-input__error' id={`${name}-error`}>
        {error ? error : ''}
      </p>
    </label>
  );
};

export default AuthInput;
