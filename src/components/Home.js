import heroImg from '../assets/seaside_cliffs.svg';
import '../styles/Home.css';
import data from '../data/data.json';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <img src={heroImg} alt='Photo de falaises en bord de mer agitée'></img>
        <h1 className='hero-title'>Chez vous, partout et ailleurs</h1>
      </header>
      <section className='home-gallery'>
        {data.map((elem) => (
          <article className='home-gallery_article' key={elem.id}>
            <img src={elem.cover} alt={elem.title}></img>
            <header className='home-gallery_article-header'>
              <h2>{elem.title}</h2>
            </header>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Home;
