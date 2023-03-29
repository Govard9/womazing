import React from 'react';
import tshort from '../../../images/NewCollection/t-short__usa.jpg';
import glow from '../../../images/NewCollection/swimsuit-glow.jpg';
import sweatshirt from '../../../images/NewCollection/sweatshirt.jpg';

function NewCollection(props) {
  return (
    <>
      <h3 className="new-collection__title">Новая коллекция</h3>
      <section className="new-collection">
        <article className="new-collection__card">
          <div className="new-collection__image-container">
            <img className="new-collection__image-card" src={tshort} alt=" Девушка в футболке с надписью USA."/>
          </div>
          <div className="new-collection__container">
            <h4 className="new-collection__title-card">
              <a href="/#" className="new-collection__link">Футболка USA</a>
            </h4>
            <div className="new-collection__container-price">
              <p className="new-collection__old-price">$229</p>
              <p className="new-collection__new-price">$129</p>
            </div>
          </div>
        </article>
        <article className="new-collection__card">
          <div className="new-collection__image-container">
            <img className="new-collection__image-card" src={glow} alt=" Девушка в купальнике на берегу моря."/>
          </div>
          <div className="new-collection__container">
            <h4 className="new-collection__title-card">
              <a href="/#" className="new-collection__link">Купальник Glow</a>
            </h4>
            <div className="new-collection__container-price">
              <p className="new-collection__new-price">$129</p>
            </div>
          </div>
        </article>
        <article className="new-collection__card">
          <div className="new-collection__image-container">
            <img className="new-collection__image-card" src={sweatshirt} alt=" Девушка в белом свитшоте на фоне гор."/>
          </div>
          <div className="new-collection__container">
            <h4 className="new-collection__title-card">
              <a href="/#" className="new-collection__link">Свитшот Sweet Shot</a>
            </h4>
            <div className="new-collection__container-price">
              <p className="new-collection__new-price">$129</p>
            </div>
          </div>
        </article>
      </section>
      <div className="new-collection__button">
        <a href="/#" className="new-collection__link-button">
          Открыть магазин
        </a>
      </div>
    </>

  );
}

export default NewCollection;