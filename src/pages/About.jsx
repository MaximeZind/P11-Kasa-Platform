import heroImg from '../assets/mountains.svg';
import React from 'react';
import classes from '../styles/About.module.css';
import Dropdown from '../components/Dropdown';
import Banner from '../components/Banner';
import aboutText from '../data/aboutText.json';

function About() {

    const pageTitle = 'A Propos';
    document.title = `Kasa - ${pageTitle}`;

    return (
        <div className={classes.about}>
            <Banner heroImg={heroImg} altText='Photo de montagnes partiellement enneigées' />
            <section className={classes.about_section}>
                {aboutText.map((text) => 
                <Dropdown title={Object.keys(text)} content={Object.values(text)} key={Object.keys(text)}/>)}
            </section>
        </div>
    );
}

export default About;