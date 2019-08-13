import { database, storage } from './firebase';

export const getComments = () => {};

export const getBooksRef = () => database.ref('books');
export const getCoverRef = (id: string, type: string) =>
  storage.ref(`img/${id}.${type}`);
