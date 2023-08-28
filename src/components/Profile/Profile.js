import React from 'react';
import Header from '../Header/Header';
import './Profile.css';

const Profile = ({ userName = 'Денис', email = 'defimov9@gmail.com' }) => {
  return (
    <>
      <Header loggedIn={true} />
      <section className='profile'>
        <h2 className='profile__welcome'>{`Привет, ${userName}!`}</h2>
        <form className='profile__form'>
          <label className='profile__label'>
            Имя
            <input
              className='profile__input'
              type='text'
              name='name'
              placeholder='Имя'
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
