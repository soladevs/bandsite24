import React, { useState } from 'react';
import logo from './dps.png'; // Update with the correct path to your logo file

const NavBar = ({ active = 'home' }) => {
  const [activeItem, setActiveItem] = useState(active);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav>
      <ul>
        <img src={logo} className="App-logo top-logo" alt="logo" />
        <li className={activeItem === 'home' ? 'active' : ''}>
          <a href="/bandsite24" onClick={() => handleItemClick('home')}>
            <p>HOME</p>
          </a>
        </li>
        <li className={activeItem === 'store' ? 'active' : ''}>
          <a href="/bandsite24/#store" onClick={() => handleItemClick('store')}>
            <p>STORE</p>
          </a>
        </li>
        <li className={activeItem === 'social' ? 'active' : ''}>
          <a href="/bandsite24/#social" onClick={() => handleItemClick('social')}>
            <p>SOCIAL</p>
          </a>
        </li>
        <li className={activeItem === 'contact' ? 'active' : ''}>
          <a href="/bandsite24/#contact" onClick={() => handleItemClick('contact')}>
            <p>CONTACT</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
