import data from '../data/data.json';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import classes from '../styles/Accommodation.module.css';
import Collapse from '../components/Collapse';
import Carousel from '../components/Carousel';
import Listing from '../components/Listing';

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
            < Listing selectedAccommodation={selectedAccommodation} />
            <section className={classes.accommodation_details}>
                < Collapse title='Description' content={selectedAccommodation.description} />
                < Collapse title='Équipements' content={selectedAccommodation.equipments} />
            </section>
        </main>
    );
}

export default Accommodation;
