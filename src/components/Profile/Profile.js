import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import mainApi from '../../utils/MainApi';

const Profile = ({ handleSignOut, loggedIn }) => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, setValues } =
    useFormWithValidation();

  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: currentUser.user.name,
    email: currentUser.user.email,
  };

  const updateUserInfo = (values) => {
    setIsLoading(true);
    mainApi
      .updateUserInfo(values)
      .then((updatedData) => {
        setCurrentUser(updatedData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserInfo(values);
  };

  useEffect(() => {
    setValues({
      name: currentUser.user.name,
      email: currentUser.user.email,
    });
  }, [currentUser.user.email, currentUser.user.name, setValues]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className='profile'>
        <h2 className='profile__welcome'>{`Привет, ${currentUser.user.name}!`}</h2>
        <form
          className='profile__form'
          id='edit-profile'
          onSubmit={handleSubmit}>
          <label className='profile__label'>
            Имя
            <input
              className='profile__input'
              type='text'
              name='name'
              placeholder='Имя'
              value={values.name || ''}
              onChange={handleChange}
              required
              minLength='2'
              pattern='^(?!\s)[A-Za-zА-Яа-я\-\s]+$'
              disabled={isLoading}
            />
            <p className='profile__error profile__error_name'>{errors.name}</p>
          </label>
          <label className='profile__label'>
            E-mail
            <input
              className='profile__input'
              type='email'
              name='email'
              placeholder='E-mail'
              value={values.email || ''}
              onChange={handleChange}
              required
              pattern='.+@.+\..+$'
              disabled={isLoading}
            />
            <p className='profile__error profile__error_email'>
              {errors.email}
            </p>
          </label>
        </form>
        <div className='profile__btns'>
          <button
            className='profile__btn'
            type='submit'
            form='edit-profile'
            disabled={
              !isValid ||
              isLoading ||
              (values.name === initialValues.name &&
                values.email === initialValues.email)
            }>
            {!isLoading ? 'Редактировать' : 'Сохраняем'}
          </button>
          <button
            className='profile__btn profile__btn_logout'
            onClick={handleSignOut}>
            Выйти из аккаунта
          </button>
        </div>
      </section>
    </>
  );
};

export default Profile;
