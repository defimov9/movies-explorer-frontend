import React, { useState } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import AuthForm from '../AuthForm/AuthForm';
import AuthInput from '../AuthInput/AuthInput';
import AuthButton from '../AuthButton/AuthButton';
import { Link } from 'react-router-dom';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  return (
    <AuthPage title='Рады видеть!'>
      <AuthForm>
        <AuthInput
          type='email'
          name='email'
          value={values.email}
          label='E-mail'
          placeholder='Введите ваш E-mail'
          onChange={handleChange}
        />
        <AuthInput
          type='password'
          name='password'
          value={values.password}
          label='Пароль'
          placeholder='Введите пароль'
          onChange={handleChange}
        />
      </AuthForm>
      <div className='auth__buttons'>
        <AuthButton text='Войти' />
        <p className='auth__text'>
          Ещё не зарегистрированы?{' '}
          <Link className='auth__btn' to='/signup'>
            Регистрация
          </Link>
        </p>
      </div>
    </AuthPage>
  );
};

export default Login;
