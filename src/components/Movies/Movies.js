import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
  const movies = [
    {
      id: 0,
      title: '33 слова о дизайне',
      duration: '1ч 42м',
      image:
        'https://avatars.mds.yandex.net/i?id=844ae563cc976aa2d81a3616fed2ca1191b6da1e-8404489-images-thumbs&n=13',
    },
    {
      id: 1,
      title: '33 слова о дизайне',
      duration: '1ч 42м',
      image:
        'https://avatars.mds.yandex.net/i?id=844ae563cc976aa2d81a3616fed2ca1191b6da1e-8404489-images-thumbs&n=13',
    },
    {
      id: 2,
      title: '33 слова о дизайне',
      duration: '1ч 42м',
      image:
        'https://avatars.mds.yandex.net/i?id=844ae563cc976aa2d81a3616fed2ca1191b6da1e-8404489-images-thumbs&n=13',
    },
    {
      id: 3,
      title: '33 слова о дизайне',
      duration: '1ч 42м',
      image:
        'https://avatars.mds.yandex.net/i?id=844ae563cc976aa2d81a3616fed2ca1191b6da1e-8404489-images-thumbs&n=13',
    },
    {
      id: 4,
      title: '33 слова о дизайне',
      duration: '1ч 42м',
      image:
        'https://avatars.mds.yandex.net/i?id=844ae563cc976aa2d81a3616fed2ca1191b6da1e-8404489-images-thumbs&n=13',
    },
    {
      id: 5,
      title: '33 слова о дизайне',
      duration: '1ч 42м',
      image:
        'https://avatars.mds.yandex.net/i?id=844ae563cc976aa2d81a3616fed2ca1191b6da1e-8404489-images-thumbs&n=13',
    },
    {
      id: 6,
      title: '33 слова о дизайне',
      duration: '1ч 42м',
      image:
        'https://avatars.mds.yandex.net/i?id=844ae563cc976aa2d81a3616fed2ca1191b6da1e-8404489-images-thumbs&n=13',
    },
    {
      id: 7,
      title: '33 слова о дизайне',
      duration: '1ч 42м',
      image:
        'https://avatars.mds.yandex.net/i?id=844ae563cc976aa2d81a3616fed2ca1191b6da1e-8404489-images-thumbs&n=13',
    },
    {
      id: 8,
      title: '33 слова о дизайне',
      duration: '1ч 42м',
      image:
        'https://avatars.mds.yandex.net/i?id=844ae563cc976aa2d81a3616fed2ca1191b6da1e-8404489-images-thumbs&n=13',
    },
    {
      id: 9,
      title: '33 слова о дизайне',
      duration: '1ч 42м',
      image:
        'https://avatars.mds.yandex.net/i?id=844ae563cc976aa2d81a3616fed2ca1191b6da1e-8404489-images-thumbs&n=13',
    },
    {
      id: 10,
      title: '33 слова о дизайне',
      duration: '1ч 42м',
      image:
        'https://avatars.mds.yandex.net/i?id=844ae563cc976aa2d81a3616fed2ca1191b6da1e-8404489-images-thumbs&n=13',
    },
    {
      id: 6,
      title: '33 слова о дизайне',
      duration: '1ч 42м',
      image:
        'https://avatars.mds.yandex.net/i?id=844ae563cc976aa2d81a3616fed2ca1191b6da1e-8404489-images-thumbs&n=13',
    },
    {
      id: 7,
      title: '33 слова о дизайне',
      duration: '1ч 42м',
      image:
        'https://avatars.mds.yandex.net/i?id=844ae563cc976aa2d81a3616fed2ca1191b6da1e-8404489-images-thumbs&n=13',
    },
    {
      id: 8,
      title: '33 слова о дизайне',
      duration: '1ч 42м',
      image:
        'https://avatars.mds.yandex.net/i?id=844ae563cc976aa2d81a3616fed2ca1191b6da1e-8404489-images-thumbs&n=13',
    },
    {
      id: 9,
      title: '33 слова о дизайне',
      duration: '1ч 42м',
      image:
        'https://avatars.mds.yandex.net/i?id=844ae563cc976aa2d81a3616fed2ca1191b6da1e-8404489-images-thumbs&n=13',
    },
    {
      id: 10,
      title: '33 слова о дизайне',
      duration: '1ч 42м',
      image:
        'https://avatars.mds.yandex.net/i?id=844ae563cc976aa2d81a3616fed2ca1191b6da1e-8404489-images-thumbs&n=13',
    },
  ];

  return (
    <>
      <Header loggedIn={true} />
      <main className='movies'>
        <div className='movies__container'>
          <SearchForm />
          <MoviesCardList movies={movies} />
          <button className='movies__btn'>Ещё</button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Movies;
