import heroImg from '../assets/mountains.svg';
import React from 'react';
import classes from '../styles/About.module.css';
import Collapse from '../components/Collapse';
import Banner from '../components/Banner';
import {importAboutText} from '../utils/getAboutText';

function About() {

    const pageTitle = 'A Propos';
    document.title = `Kasa - ${pageTitle}`;
    const aboutText = importAboutText();

    return (
        <div className={classes.about}>
            <Banner heroImg={heroImg} altText='Photo de montagnes partiellement enneigées' />
            <section className={classes.about_section}>
                {aboutText.map((text) => 
                <Collapse title={Object.keys(text)[0]} content={Object.values(text)} key={Object.keys(text)[0]}/>)}
            </section>
        </div>
    );
}

export const loaderAbout = async () => {
    const res = await fetch(importAboutText());
    return res.json();
}
export default About;