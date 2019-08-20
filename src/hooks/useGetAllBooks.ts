import * as firebase from 'firebase';
import { useObject } from 'react-firebase-hooks/database';

import { getBooksRef } from '../api';

export default function useGetAllBooks(): {
  allBooks: [];
  loading: boolean;
  error?: firebase.FirebaseError;
} {
  const [snapshot, loading, error] = useObject(getBooksRef());

  const allBooks = snapshot ? snapshot.val() : [];

  return {
    allBooks,
    loading,
    error
  };
}
