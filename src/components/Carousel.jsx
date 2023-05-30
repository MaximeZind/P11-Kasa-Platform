import classes from '../styles/Carousel.module.css';
import React from 'react';
import { useState } from 'react';
import arrow from '../assets/arrow_white.svg';

function Carousel({pictures, title}) {

    const containerStyle = {
        width: `300%`,
        transition: 'transform 0.5s ease',
        transform: `translateX(-${100/3}%)`,
    };

    const [slideIndex, setSlideIndex] = useState(0);
    
    const handlePrevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };

    const handleNextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };
    
    return (
        <div className={classes.carousel + ' hello'}>
            <div className={classes.carousel_pictures} style={containerStyle}>
                {pictures[slideIndex-1] ? <img className={classes.carousel_pictures_pic} src={pictures[slideIndex-1]} alt={title}></img> : 
                <img className={classes.carousel_pictures_pic} src={pictures[pictures.length - 1]} alt={title}></img>}
                <img className={classes.carousel_pictures_pic} src={pictures[slideIndex]} alt={title}></img>
                {pictures[slideIndex+1] ? <img className={classes.carousel_pictures_pic} src={pictures[slideIndex+1]} alt={title}></img> : 
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

    // const [slideIndex, setSlideIndex] = useState(0);

    // const handlePrevSlide = () => {
    //     setSlideIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    // };

    // const handleNextSlide = () => {
    //     setSlideIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    // };

    // console.log(pictures);

    // const containerStyle = {
    //     width: `${pictures.length * 100}%`,
    //     transition: 'transform 0.5s ease',
    //     transform: `translateX(-${slideIndex * 100 / pictures.length}%)`,
    // };


    // return (
    // <div className={classes.carousel}>
    //     <div className={classes.carousel_pictures} style={containerStyle}>
    //         {pictures.map((picture, index) =>
    //             <div key={index} className={classes.carousel_pictures_pic}>
    //                 <img src={picture} alt={title}></img>
    //             </div>
    //         )}
    //     </div>
    //     {pictures.length === 1 ? null :
    //         <div className={classes.carousel_nav}>
    //             <img src={arrow} className={classes.carousel_arrow_left} alt='flèche gauche' onClick={handlePrevSlide}></img>
    //             <p>{slideIndex + 1}/{pictures.length}</p>
    //             <img src={arrow} className={classes.carousel_arrow_right} alt='flèche droite' onClick={handleNextSlide}></img>
    //         </div>}
    // </div>
    // );


}

export default Carousel;

