import React from 'react';
import logoDress from '../../images/icon/dress-logo.svg';
import callOrder from '../../images/icon/call-order.svg';
import shoppingBag from '../../images/icon/shopping-bag.svg';

function Navigation({footer}) {
  if (footer) {
    return (
      <div className="navigation">
        <div className="navigation__block-logo">
          <img src={logoDress} alt=" Иконка платья для логотипа сайта." className="navigation__dress-logo"></img>
          <h1 className="navigation__title-logo">
            <a href="/#" className="navigation__logo-link">
              Womazing
            </a>
          </h1>
        </div>
        <nav className="navigation__nav">
          <ul className="navigation__items">
            <li className="navigation__links">
              <a href="/#" className="navigation__link navigation__link_selection">Главная</a>
            </li>
            <li className="navigation__links">
              <a href="/#" className="navigation__link">Магазин</a>
            </li>
            <li className="navigation__links">
              <a href="/#" className="navigation__link">О бренде</a>
            </li>
            <li className="navigation__links">
              <a href="/#" className="navigation__link">Контакты</a>
            </li>
          </ul>
        </nav>
        <p className="navigation__phone-number navigation__phone-number_items-right">
          <a href="tel:74958235412" className="navigation__link-number">+7 (495) 823-54-12</a>
          <a href="mailto:hello@womazing.com" className="navigation__link-email">hello@womazing.com</a>
        </p>
      </div>
    );
  } else {
    return (
      <div className="navigation">
        <div className="navigation__block-logo">
          <img src={logoDress} alt=" Иконка платья для логотипа сайта." className="navigation__dress-logo"></img>
          <h1 className="navigation__title-logo">
            <a href="/#" className="navigation__logo-link">
              Womazing
            </a>
          </h1>
        </div>
        <nav className="navigation__nav">
          <ul className="navigation__items">
            <li className="navigation__links">
              <a href="/#" className="navigation__link navigation__link_selection">Главная</a>
            </li>
            <li className="navigation__links">
              <a href="/#" className="navigation__link">Магазин</a>
            </li>
            <li className="navigation__links">
              <a href="/#" className="navigation__link">О бренде</a>
            </li>
            <li className="navigation__links">
              <a href="/#" className="navigation__link">Контакты</a>
            </li>
          </ul>
        </nav>
        <div className="navigation__call-block">
          <img src={callOrder} alt=" Иконка телефона для автоматического набора номера"
               className="navigation__call-order"></img>
          <p className="navigation__phone-number">
            <a href="tel:74958235412" className="navigation__link-number">+7 (495) 823-54-12</a>
          </p>
        </div>
        <img src={shoppingBag} alt=" Иконка корзины для покупок." className="navigation__shopping-bag"></img>
      </div>
    );
  }
}

export default Navigation;