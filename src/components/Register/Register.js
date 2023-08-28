import React, { useState } from 'react';
import AuthPage from '../AuthPage/AuthPage';
import AuthForm from '../AuthForm/AuthForm';
import AuthInput from '../AuthInput/AuthInput';
import AuthButton from '../AuthButton/AuthButton';
import { Link } from 'react-router-dom';

const Register = () => {
  const [values, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  return (
    <AuthPage title='Добро пожаловать!'>
      <AuthForm>
        <AuthInput
          type='text'
          name='name'
          value={values.name}
          label='Имя'
          placeholder='Введите ваше имя'
          onChange={handleChange}
        />
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
      <div className='auth__buttons auth__buttons_register'>
        <AuthButton text='Зарегестрироваться' />
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
