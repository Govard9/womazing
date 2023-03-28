import React from 'react';

function Slider(props) {
  return (
    <div className="slider">
      <a href="/#" className="slider__link">
        <div className="slider__rectangle"></div>
      </a>
      <a href="/#" className="slider__link">
        <div className="slider__rectangle slider__rectangle_active"></div>
      </a>
      <a href="/#" className="slider__link">
        <div className="slider__rectangle"></div>
      </a>
    </div>
  );
}

export default Slider;