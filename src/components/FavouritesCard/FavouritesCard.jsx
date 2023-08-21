import React from 'react';
import './FavouritesCard.css'

const FavouritesCard = () => {
  return (
    <div className='favourites-card-container'>
      <div className="favourite-image-container">
        <img src="nothing for now" alt="" />
      </div>
      <div className="item-name">THIS IS A temporary title</div>
      <div className="item-cost">$420</div>
      <div className="item-colour">Maroon</div>
      <div className="item-size">M</div>
    </div>
  );
}

export default FavouritesCard;
