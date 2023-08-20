import React from 'react';
import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import photo from '../../images/about-me-photo.jpg';

const AboutMe = () => {
  return (
    <section className='about-me'>
      <SectionTitle>Студент</SectionTitle>
      <div className='about-me__container'>
        <div className='about-me__text'>
          <h3 className='about-me__name'>Денис</h3>
          <p className='about-me__job'>Фронтенд-разработчик, 22 года</p>
          <p className='about-me__info'>
            Я родился в Кургане, живу в Екатеринбурге, закончил УРФУ по
            специальности "Информатика и вычислительная техника", сейчас
            обучаюсь в магистратуре УРФУ. Люблю музыку, недавно начал заниматься
            спортом. В университете, полюбил фронтенд. С нетерпением жду первой
            работы.
          </p>
          <a
            className='about-me__link'
            href='https://github.com/defimov9'
            target='_blank'
            rel='noreferrer'>
            Github
          </a>
        </div>
        <img className='about-me__photo' src={photo} alt='фотография' />
      </div>
    </section>
  );
};

export default AboutMe;
