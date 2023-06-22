import { getLogements } from "./import";

const accommodations = getLogements();

//prend en paramètre un ID, et renvoie le logement correspondant
export function getLogement(id){
    const selectedAccommodation = accommodations.find((accommodation) => accommodation.id === id);
    return selectedAccommodation;
}