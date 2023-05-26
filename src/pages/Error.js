import React from 'react';
import { useEffect } from 'react';
import classes from '../styles/Error.module.css';

function Error() {

  const pageTitle = 'Erreur 404'
  useEffect(() => {
    document.title =`Kasa - ${pageTitle}`;
  }, []);

    return (
      <div className={classes.error404}>
          <h1>
            404
          </h1>
          <p>
            Oups! La page que vous demandez n'existe pas.
          </p>
        <a href="./">Retourner sur la page d'accueil</a>
      </div>
    );
  }
  
  export default Error;
  