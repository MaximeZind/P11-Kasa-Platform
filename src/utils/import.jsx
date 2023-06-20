import data from '../data/data.json';
import aboutText from '../data/aboutText.json';


// Fonction pour importer la data
export function importData() {
    return data;
}

export function importAboutText() {
    return aboutText;
}

// Fonctions pour traiter chaque élément
export function dataId(elem) {
    const id = elem.id;
    return id;
}
export function dataCover(elem) {
    const cover = elem.cover;
    return cover;
}
export function dataTitle(elem) {
    const title = elem.title;
    return title;
}