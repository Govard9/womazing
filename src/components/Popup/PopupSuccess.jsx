import React from 'react';

function PopupSuccess(props) {
  return (
    <div className="popup">
      <div className="popup__main-container">
        <h2 className="popup__title">Отлично! Мы скоро вам перезвоним.</h2>
        <button className="popup__button-request-call popup__button-request-call_close">Закрыть</button>
      </div>
    </div>
  );
}

export default PopupSuccess;