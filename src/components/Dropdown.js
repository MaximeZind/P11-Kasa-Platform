import arrow_white from '../assets/arrow_white.svg';
import '../styles/Dropdown.css';

const handleClick = event => {
    event.currentTarget.parentNode.classList.toggle('open');
};

function Dropdown({title, content}) {

    return (
        <div className='dropdown'>
            <header className='dropdown_header' onClick={handleClick}>
                <h2>
                    {title}
                </h2>
                <img src={arrow_white}></img>
            </header>
            <div  className='dropdown_content'>
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