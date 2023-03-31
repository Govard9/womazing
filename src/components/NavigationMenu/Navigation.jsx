import React from 'react';
import logoDress from '../../images/icon/dress-logo.svg';
import callOrder from '../../images/icon/call-order.svg';
import shoppingBag from '../../images/icon/shopping-bag.svg';


function Navigation({footer, onPopup, }) {

  if (!footer) {
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
          <span className="navigation__block-call-order" onClick={onPopup}>
            <img src={callOrder}
                 alt=" Иконка для открытия всплыващего окна обратного звонка."
                 className="navigation__call-order"
            />
          </span>
          <p className="navigation__phone-number">
            <a href="tel:74958235412" className="navigation__link-number">+7 (495) 823-54-12</a>
          </p>
        </div>
        <div className="navigation__counter">
          <span className="navigation__block-quantity">
            <p className="navigation__quantity">
              0
            </p>
          </span>
          <img src={shoppingBag} alt=" Иконка корзины для покупок." className="navigation__shopping-bag"/>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navigation navigation_footer-center">
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
  }
}

export default Navigation;