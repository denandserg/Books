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

  const [image] = useObject(getBooksRef());

  const [snapshot, loading, error] = useObject(
    favourite ? getFavouritesBooksRef() : getBooksRef()
  );
  const books = snapshot ? snapshot.val() : [];

  function viewFavouritedBooks(): React.ReactNode {
    if (!isSigned) {
      return null;
    }
    // @ts-ignore
    const uidCurrentUser = firebase.auth().currentUser.uid;

    const currentUserFavouriteBooksId = books[uidCurrentUser];

    const allBooks = image ? image.val() : [];

    const favouriteBooks = currentUserFavouriteBooksId
      ? allBooks.filter(book =>
          currentUserFavouriteBooksId.some(fav => fav === book.id)
        )
      : null;
    return favouriteBooks
      ? favouriteBooks.map((book: Book) => (
          <BooksListItem key={uuid()} id={book.id} book={book} isFavouriteBook={Boolean(true)}/>
        ))
      : null;
  }

  return loading || error ? (
    <Loader />
  ) : (
    <div className={sm.BooksList}>
      <div className={cn(tf.pageHeader)}>Golden Books Catalogue</div>
      <div className={cn(sm.BooksList_Content)}>
        {favourite
          ? viewFavouritedBooks()
          : books.map((book: Book) => (
              <BooksListItem
                key={uuid()}
                id={book.id}
                book={book}
                isFavouriteBook={false}
              />
            ))}
      </div>
    </div>
  );
}
