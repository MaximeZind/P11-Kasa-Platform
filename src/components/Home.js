import heroImg from '../assets/seaside_cliffs.svg';
import '../styles/Home.css';

function App() {
  return (
    <div className="home">
      <header className="home-header">
        <img src={heroImg} alt='Photo de falaises en bord de mer agitée'></img>
        <h1 className='hero-title'>Chez vous, partout et ailleurs</h1>
      </header>
      <section className='home-gallery'>
        
      </section>
    </div>
  );
}

export default App;
