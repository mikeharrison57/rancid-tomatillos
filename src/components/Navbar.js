import React from 'react';
import '../styles/Navbar.css';
import HomeIcon from '../assets/red-home-icon.png';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <header className='nav-bar'>
      <h1>Rancid Tomatillos</h1>
      <NavLink to="/">
        <img className='home-button'
          src={ HomeIcon }
          alt='home button'
        />
      </NavLink>
    </header>
  )
}

export default Navbar
