import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
  return (
    <div className = "container">
      <div class = "theImg">
        <ImageThumbnail />
        <HeaderTitle />
      </div>
    </div>
  )
}

export default HeaderContainer;