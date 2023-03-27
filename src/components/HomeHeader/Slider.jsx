import React from 'react';

function Slider(props) {
  return (
    <div className="slider">
      <div className="slider__rectangle"></div>
      <div className="slider__rectangle slider__rectangle_active"></div>
      <div className="slider__rectangle">
      </div>
    </div>
  );
}

export default Slider;