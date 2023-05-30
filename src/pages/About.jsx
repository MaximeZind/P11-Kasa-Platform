import heroImg from '../assets/mountains.svg';
import React from 'react';
import classes from '../styles/About.module.css';
import Dropdown from '../components/Dropdown';
import Banner from '../components/Banner';

function About() {

    const pageTitle = 'A Propos';
    const firstText = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.';
    const secondText = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
    const thirdText = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const fourthText = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

    document.title = `Kasa - ${pageTitle}`;

    return (
        <div className={classes.about}>
            <Banner heroImg={heroImg} altText='Photo de montagnes partiellement enneigées' />
            <section className={classes.about_section}>
                <Dropdown title='Fiabilité' content={firstText} />
                <Dropdown title='Respect' content={secondText} />
                <Dropdown title='Service' content={thirdText} />
                <Dropdown title='Sécurité' content={fourthText} />
            </section>
        </div>
    );
}

export default About;