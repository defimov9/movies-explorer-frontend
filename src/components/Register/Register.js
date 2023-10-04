import React, { useState } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import AuthForm from '../AuthForm/AuthForm';
import AuthInput from '../AuthInput/AuthInput';
import AuthButton from '../AuthButton/AuthButton';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

const Register = ({ handleRegister, isLoading }) => {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(values.name, values.email, values.password);
  };

  return (
    <AuthPage title='Добро пожаловать!'>
      <AuthForm onSubmit={handleSubmit} name='register'>
        <AuthInput
          type='text'
          name='name'
          value={values.name || ''}
          label='Имя'
          placeholder='Введите ваше имя'
          onChange={handleChange}
          isLoading={isLoading}
          error={errors.name}
          minLength='2'
          maxLength='30'
          pattern='^(?!\s)[A-Za-zА-Яа-я\-\s]+$'
        />
        <AuthInput
          type='email'
          name='email'
          value={values.email || ''}
          label='E-mail'
          placeholder='Введите ваш E-mail'
          onChange={handleChange}
          isLoading={isLoading}
          error={errors.email}
          pattern='.+@.+\..+$'
        />
        <AuthInput
          type='password'
          name='password'
          value={values.password || ''}
          label='Пароль'
          placeholder='Введите пароль'
          onChange={handleChange}
          isLoading={isLoading}
          error={errors.password}
          minLength='6'
          maxLength='30'
        />
      </AuthForm>
      <div className='auth__buttons auth__buttons_register'>
        <AuthButton
          text='Зарегестрироваться'
          formName='register'
          isValid={isValid}
          isLoading={isLoading}
        />
        <p className='auth__text'>
          Уже зарегистрированы?{' '}
          <Link className='auth__btn' to='/signin'>
            Войти
          </Link>
        </p>
      </div>
    </AuthPage>
  );
};

export default Register;
