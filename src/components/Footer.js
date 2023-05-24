import logo_footer from '../assets/logo_footer.svg';
import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
      <footer className='footer'>
            <img src={logo_footer} className="kasa-logo-footer" alt="logo du site Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
      </footer>

  );
}

export default Footer;