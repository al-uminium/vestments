import React, { useState } from 'react';
import './Dropdown.css'

const Dropdown = () => {
  const [dropdownValue, setDropdownValue] = useState("Please Select Your Size")

  const handleClick = (val) => {
    console.log(val.target.id)
    setDropdownValue(val.target.id)
  }
  return (
    <div class="dropdown">
      <button className="dropbtn">{dropdownValue}</button>
      <div class="dropdown-content">
        <span onClick={handleClick} id="XS">XS</span>
        <span onClick={handleClick} id="S">S</span>
        <span onClick={handleClick} id="M">M</span>
        <span onClick={handleClick} id="L">L</span>
        <span onClick={handleClick} id="XL">XL</span>
      </div>
    </div>
  );
}

export default Dropdown;
