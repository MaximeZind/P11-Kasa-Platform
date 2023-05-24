import data from '../data/data.json';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import '../styles/Accommodation.css';
import Dropdown from '../components/Dropdown';
import Carousel from '../components/Carousel';
import Stars from '../components/Stars';

function Accommodation() {
    const accommodationId = useParams();
    const selectedAccommodation = data.find((accommodation) => accommodation.id === accommodationId.id);
    if (!selectedAccommodation) {
        return <Navigate to="/404" />;
    }
    const starsRange = [1, 2, 3, 4, 5];

    return (
        <main className="accommodation">
            < Carousel title = {selectedAccommodation.title} pictures = {selectedAccommodation.pictures} />
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
                    < Stars rating = {selectedAccommodation.rating}/>
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
