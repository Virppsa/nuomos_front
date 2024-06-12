import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Edvino Pirtelė
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to="/" className='nav-links' onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/baidares" className='nav-links' onClick={handleClick}>
                Baidarės
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/sodybos" className='nav-links' onClick={handleClick}>
                Sodybos
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/kainos" className='nav-links' onClick={handleClick}>
                Kainos
              </Link>
            </li>
            <li className='nav-item'>
              <a href="#kontaktai" className='nav-links' onClick={handleClick}>
                Kontaktai
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
