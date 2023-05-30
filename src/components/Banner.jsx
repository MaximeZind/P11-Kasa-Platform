import React from 'react';
import classes from '../styles/Banner.module.css';

function Banner({title, heroImg, altText}) {

    const pageTitle = 'A Propos';
    document.title = `Kasa - ${pageTitle}`;

    return (
            <div className={classes.banner}>
                <img src={heroImg} alt={altText}></img>
                {title ? <h1>{title}</h1> : null}
            </div>
    );
}

export default Banner;