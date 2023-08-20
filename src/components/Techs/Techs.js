import React from 'react';
import './Techs.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const Techs = () => {
  return (
    <section className='techs'>
      <SectionTitle>Технологии</SectionTitle>
      <div className='techs__descr'>
        <h3 className='techs__title'>7 технологий</h3>
        <p className='techs__text'>
          На курсе веб-разработки мы освоили технологии, которые применили
          в&nbsp; дипломном проекте.
        </p>
      </div>
      <ul className='techs__list'>
        <li className='techs__item'>HTML</li>
        <li className='techs__item'>CSS</li>
        <li className='techs__item'>JS</li>
        <li className='techs__item'>React</li>
        <li className='techs__item'>Git</li>
        <li className='techs__item'>Express.js</li>
        <li className='techs__item'>mongoDB</li>
      </ul>
    </section>
  );
};

export default Techs;
