import React from 'react';
import './Item.css'
import Dropdown from '../Dropdown/Dropdown.jsx';
import favourite from "../../icons/favourite.svg"
import favouriteClicked from '../../icons/favourite-clicked.svg'

function Item () {
  return (
    <div className='Item'>
      <div className="item-img-container">
        Image goes here
      </div>
      <div className="item-details-container">
        <span className="item-title">LOREM IPSUM DOLOR SIT AMET consectetur adipiscing elit.</span>
        <div className="item-size-container">
          <Dropdown />
        </div>
        <div className="add-to-bag-container">
          <button className="add-to-bag">ADD TO BAG</button>
          <div className="favourites-icon favourites-icon-clicked">
            <img src={favouriteClicked} alt="" />
          </div>
        </div>
        <div className="item-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae magna posuere, pellentesque diam eu, cursus nunc. Nunc posuere lectus ac eros mattis lobortis et vel nibh. Morbi lorem mi, lacinia in sapien quis, blandit tincidunt massa. Fusce finibus tristique hendrerit. Donec ut elementum turpis, quis mattis lacus. Suspendisse quis elit sapien. Quisque et ipsum vel nunc pretium dictum a vitae nulla. Etiam mattis eros massa, ut lobortis mauris condimentum id.
        </div>
      </div>
    </div>
  );
}

export default Item; 
