import data from '../data/data.json';

export function importData() {
    return data;
}

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