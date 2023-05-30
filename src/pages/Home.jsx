import React from 'react';
import heroImg from '../assets/seaside_cliffs.svg';
import classes from '../styles/Home.module.css';
import Gallery from '../components/Gallery';
import data from '../data/data.json';
// import Card from '../components/Card';

function Home() {

  const pageTitle = 'Accueil'
  document.title =`Kasa - ${pageTitle}`;

  return (
    <div className="home">
      <header className={classes.home_header}>
        <img src={heroImg} alt='Photo de falaises en bord de mer agitée'></img>
        <h1>Chez vous, partout et ailleurs</h1>
      </header>
      <Gallery data = {data} />
    </div>
  );
}

export default Home;
