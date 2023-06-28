import data from '../data/data.json';

// Fonction pour importer la data
export function getLogements() {
    return data;
}

//prend en paramètre un ID, et renvoie le logement correspondant
export function getLogement(id){
    const selectedAccommodation = data.find((accommodation) => accommodation.id === id);
    return selectedAccommodation;
}