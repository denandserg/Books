import * as firebase from 'firebase';
import { useObject } from 'react-firebase-hooks/database';

import { getBooksRef, getFavouritesBooksRef } from '../api';

export default function useGetFavouriteBooks(): {
  favouriteBooks: [];
  loading: boolean;
  error?: firebase.FirebaseError;
} {
  const [snapshot, loading, error] = useObject(getBooksRef());
  const [snapshotFav] = useObject(getFavouritesBooksRef());

  const books = snapshot ? snapshot.val() : [];
  const booksFav = snapshotFav ? snapshotFav.val() : [];

  if (!firebase.auth().currentUser) {
    return {
      favouriteBooks: [],
      loading,
      error
    };
  }

  // @ts-ignore
  const uidCurrentUser = firebase.auth().currentUser.uid;

  const currentUserFavouriteBooksId = booksFav[uidCurrentUser];

  const favouriteBooks = currentUserFavouriteBooksId
    ? books.filter(book =>
        currentUserFavouriteBooksId.some(fav => fav === book.id)
      )
    : [];
  return {
    favouriteBooks,
    loading,
    error
  };
}
