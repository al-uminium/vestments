import React from 'react';
import banner from '../../photos/new-in.png'
import './ShoppingPage.css'

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
        <div className="item-placeholder"></div>
        <div className="item-placeholder"></div>
        <div className="item-placeholder"></div>
      </div>
      <div className="item-break">
        BROWSE YOUR STYLE <br /> SUMMERWEAR
      </div>
      <div className="new item-grid">
        <div className="item-placeholder"></div>
        <div className="item-placeholder"></div>
        <div className="item-placeholder"></div>
        <div className="item-placeholder"></div>
        <div className="item-placeholder"></div>
        <div className="item-placeholder"></div>
      </div>
      <div className="item-break">
        BROWSE YOUR STYLE <br /> SUMMERWEAR
      </div>
      <div className="new item-grid">
        <div className="item-placeholder"></div>
        <div className="item-placeholder"></div>
        <div className="item-placeholder"></div>
        <div className="item-placeholder"></div>
        <div className="item-placeholder"></div>
        <div className="item-placeholder"></div>
      </div>
    </div>
  );
}

export default ShoppingPage;
