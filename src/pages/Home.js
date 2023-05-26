import React from 'react';
import heroImg from '../assets/seaside_cliffs.svg';
import classes from '../styles/Home.module.css';
import data from '../data/data.json';
import Card from '../components/Card';

function Home() {
  return (
    <div className="home">
      <header className={classes.home_header}>
        <img src={heroImg} alt='Photo de falaises en bord de mer agitée'></img>
        <h1>Chez vous, partout et ailleurs</h1>
      </header>
      <section className={classes.home_gallery}>
        {data.map((elem) => (
          < Card id = {elem.id} cover = {elem.cover} title = {elem.title} key = {elem.id}/>
        ))}
      </section>
    </div>
  );
}

export default Home;
