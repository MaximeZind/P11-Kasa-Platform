import heroImg from '../assets/mountains.svg';
import '../styles/About.css';
import { ReactComponent as Arrow } from '../assets/arrow.svg';
import Dropdown from './Dropdown';

function About() {

    const firstText = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.';
    const secondText = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
    const thirdText = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const fourthText = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
    
    return (
        <div className="about">
            <header className="about-header">
                <img src={heroImg} alt='Photo de montagnes partiellement enneigées'></img>
            </header>
            <section className='about-section'>
                <Dropdown title='Fiabilité' content={firstText}/>
                <Dropdown title='Respect' content={secondText}/>
                <Dropdown title='Service' content={thirdText}/>
                <Dropdown title='Sécurité' content={fourthText}/>
            </section>
        </div>
    );
}

export default About;