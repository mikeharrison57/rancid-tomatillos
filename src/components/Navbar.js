import React from 'react';
import '../styles/Navbar.css';
import HomeIcon from '../assets/red-home-icon.png';
import MovieReel from '../assets/film-reel.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='nav-bar'>
    <article className='heading-container'>
      <img className='movie-reel'
        src={ MovieReel }
        alt='movie reel'
        />
        <h1 className='app-heading'>Rancid Tomatillos</h1>
    </article>
      <Link to="/">
        <img className='home-button'
          src={ HomeIcon }
          alt='home button'
        />
      </Link>
    </header>
  )
}

export default Navbar
