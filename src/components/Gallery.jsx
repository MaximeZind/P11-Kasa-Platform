import React from 'react';
import classes from '../styles/Gallery.module.css';
import Card from '../components/Card';

function Gallery(data) {

  return (
      <section className={classes.home_gallery}>
        {data.data.map((elem) => (
          < Card id = {elem.id} cover = {elem.cover} title = {elem.title} key = {elem.id}/>
        ))}
      </section>
  );
}

export default Gallery;
