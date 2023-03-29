import React from 'react';
import triggerOne from "../../../images/icon/icon-trigger-one.svg";
import triggerTwo from "../../../images/icon/icon-trigger-two.svg";
import triggerThree from "../../../images/icon/icon-trigger-three.svg";

function Important(props) {
  return (
    <>
      <h3 className="new-collection__title new-collection__title_margin-top">Что для нас важно</h3>
      <section className="important">
        <div className="important__triggers">
          <span role="button" className="important__trigger">
            <img src={triggerOne} alt=" Иконка шестеренки с галочкой внутри для тригера 'Качество'."
                 className="important__icon"/>
            <h5 className="important__title-trigger">Качество</h5>
            <p className="important__text-trigger">
              Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного
            </p>
          </span>
          <span role="button" className="important__trigger">
            <img src={triggerTwo} alt=" Иконка шестеренки для тригера 'Скорость'." className="important__icon"/>
            <h5 className="important__title-trigger">Скорость</h5>
            <p className="important__text-trigger">
              Благодаря отлаженной системе в Womazing мы можем отшивать
              до 20-ти единиц продукции в наших собственных цехах
            </p>
          </span>
          <span role="button" className="important__trigger">
            <img src={triggerThree} alt=" Иконка руки для тригера 'Ответственность'." className="important__icon"/>
            <h5 className="important__title-trigger">Ответственность</h5>
            <p className="important__text-trigger">
              Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing
            </p>
          </span>
        </div>
      </section>
    </>
  );
}

export default Important;