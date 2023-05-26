import arrow_white from '../assets/arrow_white.svg';
import React from 'react';
import classes from '../styles/Dropdown.module.css';

const handleClick = event => {
    event.currentTarget.parentNode.classList.toggle('open');
};

function Dropdown({title, content}) {

    return (
        <div className={classes.dropdown}>
            <header className={classes.dropdown_header} onClick={handleClick}>
                <h2>
                    {title}
                </h2>
                <img src={arrow_white}></img>
            </header>
            <div  className={classes.dropdown_content}>
            {typeof content === 'string' ? (
            <p>
                {content}
            </p>) : (<ul>
                {content.map((equipment, index) =>
                    <li key={index}>{equipment}</li>
                )}
            </ul>)}
            </div>
        </div>
    );
}

export default Dropdown;