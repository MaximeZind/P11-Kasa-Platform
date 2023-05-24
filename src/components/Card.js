import '../styles/Card.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {

    const id = props.id;
    const cover = props.cover;
    const title = props.title;

    return (
        <Link to={`/accommodation/${id}`}>
            <article className='home-gallery_article'>
                <img src={cover} alt={title}></img>
                <header className='home-gallery_article-header'>
                    <h2>{title}</h2>
                </header>
            </article>
        </Link>
    );
}

export default Card;