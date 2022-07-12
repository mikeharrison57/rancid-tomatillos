import React from 'react';
import '../styles/Navbar.css';
import HomeIcon from '../assets/red-home-icon.png';


const Navbar = () => {
  return (
    <header className='Navbar'>
      <h1>Rancid Tomatillos</h1>
      <img className='HomeButton'
        src={ HomeIcon }
        alt='home button'
        onClick={() => window.location.reload()}
      />
      {/* <label tabindex="0" for="date">DEPARTURE DATE?
              <input tabindex="0" type="date" name="date" required>
            </label> */}
    </header>
  )
}

export default Navbar