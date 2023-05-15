import logo from '../assets/logo.svg';
import '../styles/Banner.css';

function Banner() {
  return (
      <header className='banner'>
            <img src={logo} className="kasa-logo" alt="logo du site Kasa" />
            <nav className='banner_nav'>
                <a href='./'>Accueil</a>
                <a href='#'>A Propos</a>
            </nav>
      </header>

  );
}

export default Banner;