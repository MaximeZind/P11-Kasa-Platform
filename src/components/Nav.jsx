import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import classes from '../styles/Nav.module.css';

function Nav() {

  const location = useLocation().pathname;
  console.log(location);

  return (
    <header className={classes.header}>
      <a href='../'>
        <img src={logo} className={classes.kasa_logo} alt="logo du site Kasa" />
      </a>
      <nav className={classes.header_nav}>
        <a href='../' style={{
          textDecoration: location === '/' ? `underline` : 'auto'
        }}>Accueil</a>
        <a href='../about' style={{
          textDecoration: location === '/about' ? `underline` : 'auto'
        }}>A Propos</a>
      </nav>
    </header>
  );
}

export default Nav;