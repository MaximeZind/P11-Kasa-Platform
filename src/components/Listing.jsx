import React from 'react';
import PropTypes from 'prop-types';
import classes from '../styles/Listing.module.css';
import Stars from '../components/Stars';
import Tag from '../components/Tag';

function Listing({title, location, tags, name, picture, rating}) {
    return (
            <header className={classes.accommodation_header}>
                <div className={classes.accommodation_header_left}>
                    <h1>{title}</h1>
                    <p>{location}</p>
                    <div className={classes.accommodation_header_left_tags}>
                        {tags.map((tag, index) =>
                        < Tag tag={tag} key={index} />
                        )}
                    </div>
                </div>
                <div className={classes.accommodation_header_right}>
                    <div className={classes.host_profile}>
                        <div className={classes.host_profile_name}>
                            <p>{name.split(' ')[0]}</p>
                            <p>{name.split(' ')[1]}</p>
                        </div>
                        <img src={picture} alt={name}></img>
                    </div>
                    < Stars rating={parseInt(rating)} />
                </div>
            </header>
    );
}

Listing.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
  };

export default Listing;
