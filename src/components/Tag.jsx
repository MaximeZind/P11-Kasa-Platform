import React from 'react';
import PropTypes from 'prop-types';
import classes from '../styles/Tag.module.css';


function Tag({tag}) {
    return (
        <span className={classes.tag}>{tag}</span>
    );
}

Tag.propTypes = {
    tag: PropTypes.string.isRequired,
  };

export default Tag;
