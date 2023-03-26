import React from "react";
import "./Navbar.css";
import heart from "../../icons/heart.svg"
import cart from "../../icons/shopping-cart.svg"
import { Link } from "react-router-dom"

function Navbar(){
  return(
    <div className="Navbar">
      <div className="logo icon">
        <Link to="/">VESTMENTS</Link>
      </div>
      <div className="icon">
        <img src={heart} alt="wishlist" className="wishlist icon" />
        <img src={cart} alt="shopping cart" className="cart icon" />
      </div>
    </div>
  )
}

export default Navbar