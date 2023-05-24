import starRed from '../assets/star_red.svg';
import starGrey from '../assets/star_grey.svg';
import React from 'react';
import '../styles/Stars.css';

function Stars(props) {

    const starsRange = [1, 2, 3, 4, 5];
    const rating = props.rating;
    return (
        <div className='host_rating'>
            {starsRange.map((rangeElem) => rating >= rangeElem ? <img key={rangeElem.toString()} src={starRed}></img> : <img key={rangeElem.toString()} src={starGrey}></img>)}
        </div>
        );
}

export default Stars;