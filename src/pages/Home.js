import heroImg from '../assets/seaside_cliffs.svg';
import '../styles/Home.css';
import data from '../data/data.json';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src={heroImg} alt='Photo de falaises en bord de mer agitée'></img>
        <h1 className='hero-title'>Chez vous, partout et ailleurs</h1>
      </header>
      <section className='home-gallery'>
        {data.map((elem) => (
          < Card id = {elem.id} cover = {elem.cover} title = {elem.title} key = {elem.id}/>
        ))}
      </section>
    </div>
  );
}

export default Home;
