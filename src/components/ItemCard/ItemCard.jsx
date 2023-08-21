import React from 'react';
import './ItemCard.css'
import FavouriteIcon from '../Favourite_Icon/FavouriteIcon';

const ItemCard = () => {
  return (
    <div className='item-container placeholder'>
      <img src="nothing for now" alt="" />
      <div className='favourite-icon-container'>
        <FavouriteIcon />
      </div>
    </div>
  );
}

export default ItemCard;
