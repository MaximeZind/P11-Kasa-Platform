import React from 'react';
import PropTypes from 'prop-types';
import classes from '../styles/Gallery.module.css';
import Card from '../components/Card';
import {dataId, dataTitle, dataCover} from '../utils/import.jsx'

function Gallery(data) {

  return (
      <section className={classes.home_gallery}>
        {data.data.map((elem) => (
          < Card id = {dataId(elem)} cover = {dataCover(elem)} title = {dataTitle(elem)} key = {dataId(elem)}/>
        ))}
      </section>
  );
}

Gallery.propTypes = {
  data: PropTypes.array,
};

export default Gallery;
