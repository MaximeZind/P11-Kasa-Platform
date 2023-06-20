import classes from '../styles/Card.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Card({id, cover, title}) {

    const navigate = useNavigate();

    return (
            <article className={classes.home_gallery_article} onClick={() => navigate(`/accommodation/${id}`)}>
                <img src={cover} alt={title}></img>
                <header className={classes.home_gallery_article_header}>
                    <h2>{title}</h2>
                </header>
            </article>
    );
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };


export default Card;