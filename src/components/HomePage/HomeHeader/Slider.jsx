import React from 'react';

function Slider({dreamTeam}) {

  if (dreamTeam) {
    return (
      <div className="slider slider_dream-team">
        <div className="slider__rectangle"></div>
        <div className="slider__rectangle slider__rectangle_dream-team-active"></div>
        <div className="slider__rectangle"></div>
      </div>
    );
  } else {
    return (
      <div className="slider">
        <div className="slider__rectangle"></div>
        <div className="slider__rectangle slider__rectangle_active"></div>
        <div className="slider__rectangle"></div>
      </div>
    );
  }

}

export default Slider;