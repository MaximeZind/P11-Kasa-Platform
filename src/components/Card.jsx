import classes from '../styles/Card.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Card({id, cover, title}) {

    return (
        <Link to={`/accommodation/${id}`}>
            <article className={classes.home_gallery_article}>
                <img src={cover} alt={title}></img>
                <header className={classes.home_gallery_article_header}>
                    <h2>{title}</h2>
                </header>
            </article>
        </Link>
    );
}

export default Card;