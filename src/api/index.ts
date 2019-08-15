import firebase from './firebase';

export const getComments = () => {};

export const getBooksRef = () => firebase.database().ref('books');
export const getFavouritesBooksRef = () => firebase.database().ref(`users`);
export const setFavouritesBooksRef = (uid: string, data: {}) =>
  firebase
    .database()
    .ref(`users/${uid}`)
    .set(data);
export const getCoverRef = (id: string, type: string) =>
  firebase.storage().ref(`img/${id}.${type}`);

export const getCurrentUserUid = () =>
  // @ts-ignore
  firebase.auth().currentUser.uid;
