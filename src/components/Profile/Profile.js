import React, { useContext } from 'react';
import Header from '../Header/Header';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

const Profile = ({ handleSignOut, loggedIn }) => {
  const { currentUser } = useContext(CurrentUserContext);
  console.log();
  const { name, email } = currentUser.user;

  const { values, handleChange, errors, isValid } = useFormWithValidation();

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className='profile'>
        <h2 className='profile__welcome'>{`Привет, ${name}!`}</h2>
        <form className='profile__form'>
          <label className='profile__label'>
            Имя
            <input
              className='profile__input'
              type='text'
              name='name'
              placeholder='Имя'
              value={values.name || name}
              onChange={handleChange}
              required
            />
          </label>
          <label className='profile__label'>
            E-mail
            <input
              className='profile__input'
              type='email'
              name='email'
              placeholder='E-mail'
              value={values.email || email}
              onChange={handleChange}
              required
            />
          </label>
        </form>
        <div className='profile__btns'>
          <button className='profile__btn'>Редактировать</button>
          <button className='profile__btn profile__btn_logout'>
            Выйти из аккаунта
          </button>
        </div>
      </section>
    </>
  );
};

export default Profile;
