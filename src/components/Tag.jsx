import React from 'react';
import classes from '../styles/Tag.module.css';


function Tag({tag}) {
    return (
        <span className={classes.tag}>{tag}</span>
    );
}

export default Tag;
