import React from 'react';

const Navbar = () => {
  return (
    <header>
      <h1>Rancid Tomatillos</h1>
      <button onClick={() => window.location.reload()}>HOME</button>
    </header>
  )
}

export default Navbar