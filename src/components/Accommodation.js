import data from '../data/data.json';
import { useParams } from 'react-router-dom';
import starRed from '../assets/star_red.svg';
import starGrey from '../assets/star_grey.svg';
import arrow from '../assets/arrow_white.svg';
import { useState } from 'react';
import '../styles/Accommodation.css';
import Dropdown from './Dropdown';

function Accommodation() {
    const accommodationId = useParams();
    const selectedAccommodation = data.find((accommodation) => accommodation.id === accommodationId.id);
    const starsRange = [1, 2, 3, 4, 5];

    const [slideIndex, setSlideIndex] = useState(0);
    const handlePrevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === 0 ? selectedAccommodation.pictures.length - 1 : prevIndex - 1));
      };
    
      const handleNextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex === selectedAccommodation.pictures.length - 1 ? 0 : prevIndex + 1));
      };

      const containerStyle = {
        width: `${selectedAccommodation.pictures.length*100}%`,
        transition: 'transform 0.5s ease',
        transform: `translateX(-${slideIndex * 100/selectedAccommodation.pictures.length}%)`,
      };

    return (
        <main className="accommodation">
            <div className='carousel'>
                <div className='carousel_pictures' style={containerStyle}>
                    {selectedAccommodation.pictures.map((picture, index) =>
                        <div key={index} className='carousel_pictures-pic'>
                            <img src={picture} alt={selectedAccommodation.title}></img>
                            {selectedAccommodation.pictures.length === 1 ? null :
                                <p>{index + 1}/{selectedAccommodation.pictures.length}</p>}
                        </div>
                    )}
                </div>
                {selectedAccommodation.pictures.length === 1 ? null :
                <div className='carousel_nav'>
                <img src={arrow} className='carousel_arrow-left' alt='flèche gauche' onClick={handlePrevSlide}></img>
                <img src={arrow} className='carousel_arrow-right' alt='flèche droite' onClick={handleNextSlide}></img>
                </div>}
            </div>
            <header className='accommodation_header'>
                <div className='accommodation_header-left'>
                    <h1>{selectedAccommodation.title}</h1>
                    <p>{selectedAccommodation.location}</p>
                    <div className='accommodation_header-left_tags'>
                        {selectedAccommodation.tags.map((tag, index) =>
                            <span className='tag' key={index}>{tag}</span>
                        )}
                    </div>
                </div>
                <div className='accommodation_header-right'>
                    <div className='host_profile'>
                        <div className='host_profile-name'>
                            <p>{selectedAccommodation.host.name.split(' ')[0]}</p>
                            <p>{selectedAccommodation.host.name.split(' ')[1]}</p>
                        </div>
                        <img src={selectedAccommodation.host.picture} alt={selectedAccommodation.host.name}></img>
                    </div>
                    <div className='host_rating'>
                        {starsRange.map((rangeElem) => selectedAccommodation.rating >= rangeElem ? <img key={rangeElem.toString()} src={starRed}></img> : <img key={rangeElem.toString()} src={starGrey}></img>)}
                    </div>
                </div>
            </header>
            <section className='accommodation_details'>
                < Dropdown title = 'Description' content={selectedAccommodation.description} />
                < Dropdown title = 'Équipements' content={selectedAccommodation.equipments} />
            </section>
        </main>
    );
}

export default Accommodation;
