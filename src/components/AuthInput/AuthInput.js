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
  maxLength,
  minLength,
  isLoading,
  pattern,
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
        minLength={minLength || null}
        maxLength={maxLength || null}
        disabled={isLoading}
        pattern={pattern || null}
      />
      <p className='auth-input__error' id={`${name}-error`}>
        {error || ''}
      </p>
    </label>
  );
};

export default AuthInput;
