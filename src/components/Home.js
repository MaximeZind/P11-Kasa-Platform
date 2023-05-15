import heroImg from '../assets/seaside_cliffs.svg';
import '../styles/Home.css';
import data from '../data/data.json';

function Home() {
  console.log(data);
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

export default Home;
