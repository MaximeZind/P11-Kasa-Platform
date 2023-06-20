import React from 'react';
import heroImg from '../assets/seaside_cliffs.svg';
import classes from '../styles/Home.module.css';
import Gallery from '../components/Gallery';
import {importData} from '../utils/import';
import Banner from '../components/Banner';

function Home() {

  const pageTitle = 'Accueil'
  document.title =`Kasa - ${pageTitle}`;
  const data = importData();

  return (
    <div className={classes.home}>
      <Banner title = 'Chez vous, partout et ailleurs' heroImg = {heroImg} altText = 'Photo de falaises en bord de mer agitée' />
      <Gallery data = {data} />
    </div>
  );
}

export default Home;
