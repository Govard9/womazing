import React from 'react';

function PopupCallback({isOpen, onClose}) {

  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__main-container">
        <button className="popup__close-button" type="button" onClick={onClose} ></button>
        <h2 className="popup__title">Заказать обратный звонок</h2>
        <form className="popup__form">
          <input
            type="text"
            className="popup__input"
            name="name"
            placeholder="Имя"
            required
          />
          <input
            type="email"
            className="popup__input"
            name="email"
            placeholder="E-mail"
            required
          />
          <input
            type="tel"
            className="popup__input"
            name="phone"
            placeholder="Телефон"
            required
          />
          <button className="popup__button-request-call">
            Заказать звонок
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupCallback;