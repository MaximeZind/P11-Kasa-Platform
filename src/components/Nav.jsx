import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import classes from '../styles/Nav.module.css';

function Nav() {

  const location = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <header className={classes.header}>
        <img src={logo} className={classes.kasa_logo} alt="logo du site Kasa" onClick={() => navigate("../")}/>
      <nav className={classes.header_nav}>
        <p onClick={() => navigate("../")} style={{
          textDecoration: location === '/' ? `underline` : 'auto'
        }}>Accueil</p>
        <p onClick={() => navigate("../about")} style={{
          textDecoration: location === '/about' ? `underline` : 'auto'
        }} >A Propos</p>
      </nav>
    </header>
  );
}

export default Nav;