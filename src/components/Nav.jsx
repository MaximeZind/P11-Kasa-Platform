import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import classes from '../styles/Nav.module.css';

function Nav() {

  return (
    <header className={classes.header}>
      <NavLink to="../">
      <img src={logo} className={classes.kasa_logo} alt="logo du site Kasa" />
      </NavLink>
      <nav className={classes.header_nav}>
        <NavLink to="../" style={({ isActive }) => {
            return {
              textDecoration: isActive ? `underline` : 'auto',
            };
          }}>
          Accueil
        </NavLink>
        <NavLink to="../about" style={({ isActive }) => {
            return {
              textDecoration: isActive ? `underline` : 'auto',
            };
          }}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Nav;