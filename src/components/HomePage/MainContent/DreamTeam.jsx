import React from 'react';
import imageTeam from '../../../images/DreamTeam/dream-team-image.jpg';
import Slider from "../HomeHeader/Slider";

function DreamTeam(props) {
  return (
    <>
      <h3 className="new-collection__title new-collection__title_margin-top">Команда мечты Womazing</h3>
      <section className="dream-team">
        <div className="dream-team__block-slider">
          <img src={imageTeam} alt=" Три девушки из команды Womazing." className="dream-team__image"/>
          <Slider dreamTeam={true} />
        </div>
        <div className="dream-team__block-text">
          <h6 className="dream-team__title">Для каждой</h6>
          <p className="dream-team__text">
            Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
          </p>
          <p className="dream-team__text">
            Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.
          </p>
          <p className="dream-team__block-link">
            <a href="/#" className="dream-team__link">Подробнее о бренде</a>
          </p>
        </div>
      </section>
    </>
  );
}

export default DreamTeam;