import React from 'react';
import iconArrowDown from "../../../images/icon/icon-arrow-down.svg";
import Slider from "./Slider";

function Text() {
  return (
    <div className="offer">
      <h2 className="offer__main-text">Новые поступления в этом сезоне</h2>
      <p className="offer__description">Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне.
        Время исследовать.</p>
      <div className="offer__button-block">
        <a href="/#" className="offer__link-button">
          <img className="offer__icon-arrow" src={iconArrowDown} alt=" Иконка кнопки 'Откыть магазин'."/>
          <div className="offer__button">Открыть магазин</div>
        </a>
      </div>
      <Slider/>
    </div>
  );
}

export default Text;