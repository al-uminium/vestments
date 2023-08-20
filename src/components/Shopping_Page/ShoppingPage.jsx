import React from 'react';
import banner from '../../photos/new-in.png'
import './ShoppingPage.css'
import ItemCard from '../../ItemCard/ItemCard';
import { Link } from 'react-router-dom';

function ShoppingPage () {

  return (
    <div className="ShoppingPage">
      <div className="shop-banner">
        <img src={banner} alt="banner" className="banner"></img>
        <div className='banner-logo'>
          NEW IN VESTMENTS
        </div>
      </div>
      <div className="new item-grid">
        <Link to="/shop/items/1"><ItemCard /></Link>
        <ItemCard />
        <ItemCard />
      </div>
      <div className="item-break">
        BROWSE YOUR STYLE <br /> SUMMERWEAR
      </div>
      <div className="new item-grid">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
      <div className="item-break">
        BROWSE YOUR STYLE <br /> SUMMERWEAR
      </div>
      <div className="new item-grid">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
}

export default ShoppingPage;
