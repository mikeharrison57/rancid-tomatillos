import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <header className='Navbar'>
      <h1>Rancid Tomatillos</h1>
      <button onClick={() => window.location.reload()}>HOME</button>
    </header>
  )
}

export default Navbar