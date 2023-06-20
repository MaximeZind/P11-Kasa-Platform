import starRed from '../assets/star_red.svg';
import starGrey from '../assets/star_grey.svg';
import React from 'react';
import PropTypes from 'prop-types';
import classes from'../styles/Stars.module.css';

function Stars({rating}) {

    const starsRange = [1, 2, 3, 4, 5];
    return (
        <div className={classes.host_rating}>
            {starsRange.map((rangeElem) => rating >= rangeElem ? <img key={rangeElem.toString()} src={starRed}></img> : <img key={rangeElem.toString()} src={starGrey}></img>)}
        </div>
        );
}

Stars.propTypes = {
    rating: PropTypes.number.isRequired,
  };

export default Stars;