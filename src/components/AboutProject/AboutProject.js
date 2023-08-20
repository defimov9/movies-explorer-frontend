import React from 'react';
import './AboutProject.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const AboutProject = () => {
  return (
    <section className='about-project'>
      <SectionTitle>О проекте</SectionTitle>
      <ul className='about-project__descr'>
        <li className='about-project__item'>
          <h3 className='about-project__item-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className='about-project__item'>
          <h3 className='about-project__item-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className='about-project__timeline'>
        <div className='about-project__week'>
          <p className='about-project__week-title'>1 неделя</p>
          <p className='about-project__week-text'>Back-end</p>
        </div>
        <div className='about-project__week'>
          <p className='about-project__week-title about-project__week-title_size_large'>
            4 недели
          </p>
          <p className='about-project__week-text'>Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
