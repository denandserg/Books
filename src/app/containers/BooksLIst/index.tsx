import cn from 'classnames';
import * as firebase from 'firebase';
import React from 'react';
import { useObject } from 'react-firebase-hooks/database';
import { useSelector } from 'react-redux';
import uuid from 'uuid';

import { getBooksRef, getFavouritesBooksRef } from '../../../api';
import tf from '../../../assets/styles/typefaces.module.scss';
import ApiSelectors from '../../../redux/selectors';
import Loader from '../../components/Loader';
import BooksListItem from '../BookListItem';
import { Book } from './constants';
import enhance from './enhance';
import sm from './styles.module.scss';

interface Props {
  favourite: boolean;
}

const BooksList = enhance<Props, Props>(_BooksList);

export default BooksList;

function _BooksList(props: Props) {
  const isSigned = useSelector(ApiSelectors.isSignedIn);

  const { favourite } = props;

  const [snapshot, loading, error] = useObject(getBooksRef());
  const [snapshotFav] = useObject(getFavouritesBooksRef());

  const books = snapshot ? snapshot.val() : [];
  const booksFav = snapshotFav ? snapshotFav.val() : [];

  const getFavouriteBooks = () => {
    if (!firebase.auth().currentUser) {
      return [];
    }
    // @ts-ignore
    const uidCurrentUser = firebase.auth().currentUser.uid;

    const currentUserFavouriteBooksId = booksFav[uidCurrentUser];

    const favouriteBooks = currentUserFavouriteBooksId
      ? books.filter(book =>
          currentUserFavouriteBooksId.some(fav => fav === book.id)
        )
      : [];
    return favouriteBooks;
  };

  function viewFavouritedBooks(): React.ReactNode {
    if (!isSigned) {
      return null;
    }

    return getFavouriteBooks()
      ? getFavouriteBooks().map((book: Book) => (
          <BooksListItem
            key={uuid()}
            id={book.id}
            book={book}
            isFavouriteBook={Boolean(true)}
          />
        ))
      : null;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return loading ? (
    <Loader />
  ) : (
    <div className={sm.BooksList}>
      <div className={cn(tf.pageHeader)}>
        {favourite ? 'Favourite Books' : 'Golden Books Catalogue'}
      </div>
      <div className={cn(sm.BooksList_Content)}>
        {favourite
          ? viewFavouritedBooks()
          : books.map((book: Book) => (
              <BooksListItem
                key={uuid()}
                id={book.id}
                book={book}
                isFavouriteBook={
                  getFavouriteBooks().length > 0
                    ? getFavouriteBooks().some(item => item.id === book.id)
                    : false
                }
              />
            ))}
      </div>
    </div>
  );
}
