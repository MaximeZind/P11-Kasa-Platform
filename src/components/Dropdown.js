import arrow_white from '../assets/arrow_white.svg';
import React from 'react';
import { useState, useRef, useEffect } from 'react';
import classes from '../styles/Dropdown.module.css';

function Dropdown({title, content}) {

    const contentRef = useRef(0);
    const headerRef = useRef(0);
    const [headerHeight, setHeaderHeight] = useState(30);
    const scrollHeight = contentRef.current.clientHeight;
    const dropdownHeight = headerHeight + scrollHeight;
    const [isOpen, setOpenClose] = useState(false);


    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 1024) {
            setHeaderHeight(52);
          } else if (window.innerWidth < 1024 && window.innerWidth >= 768) {
            setHeaderHeight(37);
          } else if (window.innerWidth < 768) {
            setHeaderHeight(30);
          }

        };  
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    return (
        <div className={classes.dropdown} style={{maxHeight: isOpen ? `${dropdownHeight}px` : `${headerHeight}px` }}>
            <header className={classes.dropdown_header} ref={headerRef} onClick={() => isOpen ? setOpenClose(false) : setOpenClose(true)}>
                <h2>
                    {title}
                </h2>
                <img src={arrow_white} style={{transform: isOpen && 'rotate(0deg)'}}></img>
            </header>
            <div  className={classes.dropdown_content} ref={contentRef}>
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