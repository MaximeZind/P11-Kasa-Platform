import data from '../data/data.json';
import { useParams } from 'react-router-dom';
import star from '../assets/star.svg';
import arrow from '../assets/arrow.svg'

function Accommodation() {
    const accommodationId = useParams();
    const selectedAccommodation = data.find((accommodation) => accommodation.id === accommodationId.id);
    console.log(selectedAccommodation);
    const starsRange = [1, 2, 3, 4, 5];

    return (
        <main className="accommodation">
            <div className='carousel'>
                <div className='carousel_pictures'>
                    {selectedAccommodation.pictures.map((picture, index) =>
                        <div key={index} className='carousel_pictures-pic'>
                            <img src={picture}></img>
                            <p>{index + 1}/{selectedAccommodation.pictures.length}</p>
                        </div>
                    )}
                </div>
                <img src={arrow} className='carousel_arrow-left' alt='flèche gauche'></img>
                <img src={arrow} className='carousel_arrow-right' alt='flèche droite'></img>
            </div>
            <header className='accommodation_header'>
                <div className='accommodation_header-left'>
                    <h1>{selectedAccommodation.title}</h1>
                    <p>{selectedAccommodation.location}</p>
                    {selectedAccommodation.tags.map((tag, index) =>
                        <span className='tag' key={index}>{tag}</span>
                    )}
                </div>
                <div className='accommodation_header-right'>
                    <div className='host_profile'>
                        <p className='host_profile-name'>{selectedAccommodation.host.name}</p>
                        <img src={selectedAccommodation.host.picture} alt={selectedAccommodation.host.name}></img>
                    </div>
                    <div className='host_rating'>
                        {starsRange.map((rangeElem) => selectedAccommodation.rating >= rangeElem ? <span key={rangeElem.toString()}><img src={star} className='red'></img></span> : <span key={rangeElem.toString()}><img src={star} className='grey'></img></span>)}
                    </div>
                </div>
            </header>
            <section className='accommodation_details'>
                <div className='accommodation_details-description'>
                    <header className='accommodation_details-description_header'>
                        <p>Description</p>
                        <img src={arrow}></img>
                    </header>
                    <p>{selectedAccommodation.description}</p>
                </div>
                <div className='accommodation_details-equipments'>
                    <header className='accommodation_details-description_header'>
                        <p>Équipements</p>
                        <img src={arrow}></img>
                    </header>
                    <ul>
                        {selectedAccommodation.equipments.map((equipment, index) =>
                            <li key={index}>{equipment}</li>
                        )}
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default Accommodation;
