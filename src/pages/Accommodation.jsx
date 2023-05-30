import data from '../data/data.json';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import classes from '../styles/Accommodation.module.css';
import Dropdown from '../components/Dropdown';
import Carousel from '../components/Carousel';
import Stars from '../components/Stars';

function Accommodation() {

    const accommodationId = useParams();
    const selectedAccommodation = data.find((accommodation) => accommodation.id === accommodationId.id);
    if (!selectedAccommodation) {
        return <Navigate to="/404" />;
    }

    document.title = `Kasa - ${selectedAccommodation.title}`;

    return (
        <main className={classes.accommodation}>
            < Carousel title={selectedAccommodation.title} pictures={selectedAccommodation.pictures} />
            <header className={classes.accommodation_header}>
                <div className={classes.accommodation_header_left}>
                    <h1>{selectedAccommodation.title}</h1>
                    <p>{selectedAccommodation.location}</p>
                    <div className={classes.accommodation_header_left_tags}>
                        {selectedAccommodation.tags.map((tag, index) =>
                            <span className='tag' key={index}>{tag}</span>
                        )}
                    </div>
                </div>
                <div className={classes.accommodation_header_right}>
                    <div className={classes.host_profile}>
                        <div className={classes.host_profile_name}>
                            <p>{selectedAccommodation.host.name.split(' ')[0]}</p>
                            <p>{selectedAccommodation.host.name.split(' ')[1]}</p>
                        </div>
                        <img src={selectedAccommodation.host.picture} alt={selectedAccommodation.host.name}></img>
                    </div>
                    < Stars rating={selectedAccommodation.rating} />
                </div>
            </header>
            <section className={classes.accommodation_details}>
                < Dropdown title='Description' content={selectedAccommodation.description} />
                < Dropdown title='Équipements' content={selectedAccommodation.equipments} />
            </section>
        </main>
    );
}

export default Accommodation;
