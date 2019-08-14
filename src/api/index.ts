import firebase from './firebase';

export const getComments = () => {};

export const getBooksRef = () => firebase.database().ref('books');
export const getCoverRef = (id: string, type: string) =>
  firebase.storage().ref(`img/${id}.${type}`);
