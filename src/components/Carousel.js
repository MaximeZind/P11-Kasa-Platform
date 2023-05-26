import classes from '../styles/Carousel.module.css';
import React from 'react';
import { useState } from 'react';
import arrow from '../assets/arrow_white.svg';

function Carousel(props) {

    const pictures = props.pictures;
    const title = props.title;

    const [slideIndex, setSlideIndex] = useState(0);

    const handlePrevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    const handleNextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };

    const containerStyle = {
        width: `${pictures.length * 100}%`,
        transition: 'transform 0.5s ease',
        transform: `translateX(-${slideIndex * 100 / pictures.length}%)`,
    };
    return (
            <div className={classes.carousel}>
                <div className={classes.carousel_pictures} style={containerStyle}>
                    {pictures.map((picture, index) =>
                        <div key={index} className={classes.caroulsel_pictures_pic}>
                            <img src={picture} alt={title}></img>
                            {pictures.length === 1 ? null :
                                <p>{index + 1}/{pictures.length}</p>}
                        </div>
                    )}
                </div>
                {pictures.length === 1 ? null :
                    <div className={classes.carousel.nav}>
                        <img src={arrow} className={classes.carousel_arrow_left} alt='flèche gauche' onClick={handlePrevSlide}></img>
                        <img src={arrow} className={classes.carousel_arrow_right} alt='flèche droite' onClick={handleNextSlide}></img>
                    </div>}
            </div>
    );
}

export default Carousel;

