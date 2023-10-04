import React from 'react';
import success from '../../images/success.svg';
import error from '../../images/error.svg';
import './InfoTooltip.css';

const InfoTooltip = ({ isOpen, tooltipSettings, onClose }) => {
  return (
    <div className={`popup ${isOpen ? `popup_opened` : ''}`} onClick={onClose}>
      <div className='popup__container'>
        <img
          className='popup__image'
          src={tooltipSettings.isSuccess ? success : error}
          alt={tooltipSettings.message}
        />
        <p className='popup__title'>{tooltipSettings.message}</p>
        <button className='popup__close' type='button' onClick={onClose} />
      </div>
    </div>
  );
};

export default InfoTooltip;
