import React from 'react';
import photoOne from '../../images/image-header-1.png';
import photoTwo from '../../images/image-header-2.png';
import photoThree from '../../images/image-header-3.png';

function ImageHeader() {
  return (
    <div className="header-image">
      <img className="header-image__photo-one" src={photoOne} alt=" Фото девушки в очках с синими волосами."/>
      <img className="header-image__photo-two" src={photoTwo} alt=" Фото девушки в шляпе."/>
      <img className="header-image__photo-three" src={photoThree} alt=" Фото девушки с совмещенными кулаками."/>
    </div>
  );
}

export default ImageHeader;