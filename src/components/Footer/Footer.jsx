import React from 'react';
import Navigation from "../NavigationMenu/Navigation";
import instagram from "../../images/icon/icon-social-instagram.svg";
import facebook from "../../images/icon/icon-social-facebook.svg";
import twitter from "../../images/icon/icon-social-twitter.svg";
import pay from "../../images/icon/icon-pay-visa-and-mastercard.svg";

function Footer(props) {
  return (
    <section className="footer-section">
      <div className="footer-section__navigation">
        <Navigation footer={true}/>
      </div>
      <div className="footer-section__info">
        <div className="footer-section__block-copyright">
          <p className="footer-section__copyright-text">&copy; Все права защищены</p>
          <a href="/#" className="footer-section__privacy-policy">
            Политика конфиденциальности
          </a>
          <a href="/#" className="footer-section__public-offer">
            Публичная оферта
          </a>
        </div>
        <div className="footer-section__array-categories">
          <ul className="footer-section__categories">
            <li className="footer-section__category">
              <a href="/#" className="footer-section__link-category">Пальто</a>
            </li>
            <li className="footer-section__category">
              <a href="/#" className="footer-section__link-category">Свитшоты</a>
            </li>
            <li className="footer-section__category">
              <a href="/#" className="footer-section__link-category">Кардиганы</a>
            </li>
            <li className="footer-section__category">
              <a href="/#" className="footer-section__link-category">Толстовки</a>
            </li>
          </ul>
        </div>
        <div className="footer-section__block-social-and-pay">
          <ul className="footer-section__social-array">
            <li className="footer-section__social">
              <a href="/#" className="footer-section__social-link">
                <img src={instagram} alt=" Иконка инстаграмма в нижней части сайта."
                     className="footer-section__social-icon"/>
              </a>
            </li>
            <li className="footer-section__social">
              <a href="/#" className="footer-section__social-link">
                <img src={facebook} alt=" Иконка фейсбука в нижней части сайта."
                     className="footer-section__social-icon"/>
              </a>
            </li>
            <li className="footer-section__social">
              <a href="/#" className="footer-section__social-link">
                <img src={twitter} alt=" Иконка триттера в нижней части сайта."
                     className="footer-section__social-icon"/>
              </a>
            </li>
          </ul>
          <div className="footer-section__pay">
            <img src={pay} alt=" Оплатить товар на сайте можно Visa и MasterCard"
                 className="footer-section__image-pay"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;