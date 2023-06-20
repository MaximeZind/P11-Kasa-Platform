import React from 'react';
import PropTypes from 'prop-types';
import classes from '../styles/Banner.module.css';

function Banner({title, heroImg, altText}) {

    return (
            <div className={classes.banner}>
                <img src={heroImg} alt={altText}></img>
                {title ? <h1>{title}</h1> : null}
            </div>
    );
}

Banner.propTypes = {
    title: PropTypes.string,
    heroImg: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
  };

export default Banner;