import React from 'react';
import iconArrowDown from "../../../images/icon/icon-arrow-down.svg";
import Slider from "./Slider";

function Text() {
  return (
    <div className="offer">
      <h2 className="offer__main-text">Новые том сезоне</h2>
      <p className="offer__description">Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне.
        Время исследовать.</p>
      <div className="offer__button-block">
        <img className="offer__icon-arrow" src={iconArrowDown} alt=" Иконка кнопки 'Откыть магазин'."/>
        <div className="offer__button">
          <a href="/#" className="offer__link-button">
            Открыть магазин
          </a>
        </div>
      </div>
      <Slider/>
    </div>
  );
}

export default Text;