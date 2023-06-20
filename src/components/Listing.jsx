import React from 'react';
import PropTypes from 'prop-types';
import classes from '../styles/Listing.module.css';
import Stars from '../components/Stars';
import Tag from '../components/Tag';

function Listing({selectedAccommodation}) {
    return (
            <header className={classes.accommodation_header}>
                <div className={classes.accommodation_header_left}>
                    <h1>{selectedAccommodation.title}</h1>
                    <p>{selectedAccommodation.location}</p>
                    <div className={classes.accommodation_header_left_tags}>
                        {selectedAccommodation.tags.map((tag, index) =>
                        < Tag tag={tag} key={index} />
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
    );
}

Listing.propTypes = {
    selectedAccommodation: PropTypes.object.isRequired,
  };

export default Listing;
