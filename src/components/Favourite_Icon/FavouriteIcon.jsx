import React from 'react';
import './FavouriteIcon.css'
import favourite from "../../icons/favourite.svg"
import favouriteClicked from '../../icons/favourite-clicked.svg'

const FavouriteIcon = () => {
  return (
    <div className="favourites-icon">
      <img src={favourite} alt="" />
    </div>
  );
}

export default FavouriteIcon;
