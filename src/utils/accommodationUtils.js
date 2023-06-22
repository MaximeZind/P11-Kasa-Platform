import { getLogements } from "./import";

const accommodations = getLogements();

export function getLogement(id){
    const selectedAccommodation = accommodations.find((accommodation) => accommodation.id === id);
    return selectedAccommodation;
}