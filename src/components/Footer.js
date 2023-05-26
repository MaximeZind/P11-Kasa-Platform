import logo_footer from '../assets/logo_footer.svg';
import React from 'react';
import classes from '../styles/Footer.module.css';

function Footer() {
  return (
      <footer className={classes.footer}>
            <img src={logo_footer} className={classes.kasa_logo_footer} alt="logo du site Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
      </footer>

  );
} 

export default Footer;