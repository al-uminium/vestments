import React from 'react';
import './FavouritesPage.css'
import FavouritesCard from '../FavouritesCard/FavouritesCard';

const FavouritesPage = () => {
  return (
    <div className='favourites-container'>
      <FavouritesCard />
      <FavouritesCard />
      <FavouritesCard />
    </div>
  );
}

export default FavouritesPage;
