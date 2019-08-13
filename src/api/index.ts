import { database, storage } from './firebase';

export const getComments = () => {};

export const getBooks = () => database.ref('books');
export const getCovers = (link: string) => storage.ref(`img/${link}`);
