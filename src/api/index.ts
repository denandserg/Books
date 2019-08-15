import firebase from './firebase';

export const getComments = () => {};

export const getBooksRef = () => firebase.database().ref('books');
export const getFavouritesBooksRef = () => firebase.database().ref('users');
export const getCoverRef = (id: string, type: string) =>
  firebase.storage().ref(`img/${id}.${type}`);
