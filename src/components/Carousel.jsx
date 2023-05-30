import classes from '../styles/Carousel.module.css';
import React from 'react';
import { useState } from 'react';
import arrow from '../assets/arrow_white.svg';

function Carousel({ pictures, title }) {

    const animationDuration = 300; // (unit: ms)
    const [containerStyle, setContainerStyle] = useState({
        width: `300%`,
        transform: `translateX(-${100 / 3}%)`,
    });
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);
    const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

    const handlePrevSlide = () => {
        if (isButtonDisabled){
            return
        }
        setIsButtonDisabled(true);
        setContainerStyle({
            ...containerStyle,
            transform: `translateX(0%)`,
        });

        setTimeout(() => {
            setIsTransitionEnabled(false);
            setSlideIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
            setContainerStyle({
                ...containerStyle,
                transform: `translateX(-${100 / 3}%)`,
            });
        }, animationDuration);

        setTimeout(() => {
            setIsTransitionEnabled(true);
            setIsButtonDisabled(false);
        }, animationDuration+25);
    };

    const handleNextSlide = () => {
        if (isButtonDisabled){
            return
        }
        setIsButtonDisabled(true);
        setContainerStyle({
            ...containerStyle,
            transform: `translateX(-${200 / 3}%)`,
        });

        setTimeout(() => {
            setIsTransitionEnabled(false);
            setSlideIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
            setContainerStyle({
                ...containerStyle,
                transform: `translateX(-${100 / 3}%)`,
            });
        }, animationDuration);

        setTimeout(() => {
            setIsTransitionEnabled(true);
            setIsButtonDisabled(false);
        }, animationDuration+25);
    };

    return (
        <div className={classes.carousel + ' hello'}>
            <div
                className={classes.carousel_pictures}
                style={{
                    ...containerStyle,
                    transition: isTransitionEnabled ? `transform ${animationDuration/1000}s ease` : 'none',
                }}
            >
                {pictures[slideIndex - 1] ? <img className={classes.carousel_pictures_pic} src={pictures[slideIndex - 1]} alt={title}></img> :
                    <img className={classes.carousel_pictures_pic} src={pictures[pictures.length - 1]} alt={title}></img>}
                <img className={classes.carousel_pictures_pic} src={pictures[slideIndex]} alt={title}></img>
                {pictures[slideIndex + 1] ? <img className={classes.carousel_pictures_pic} src={pictures[slideIndex + 1]} alt={title}></img> :
                    <img className={classes.carousel_pictures_pic} src={pictures[0]} alt={title}></img>}
            </div>
            {pictures.length === 1 ? null :
                <div className={classes.carousel_nav}>
                    <img src={arrow} className={classes.carousel_arrow_left} alt='flèche gauche' onClick={handlePrevSlide}></img>
                    <p>{slideIndex + 1}/{pictures.length}</p>
                    <img src={arrow} className={classes.carousel_arrow_right} alt='flèche droite' onClick={handleNextSlide}></img>
                </div>}
        </div>
    )

}

export default Carousel;