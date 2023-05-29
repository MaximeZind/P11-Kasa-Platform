import React from 'react';
import logo from '../assets/logo.svg';
import classes from '../styles/Nav.module.css';

function Nav() {
  return (
    <header className={classes.banner}>
      <a href='../'>
        <img src={logo} className="kasa-logo" alt="logo du site Kasa" />
      </a>
      <nav className={classes.banner_nav}>
        <a href='../'>Accueil</a>
        <a href='../about'>A Propos</a>
      </nav>
    </header>

  );
}

export default Nav;