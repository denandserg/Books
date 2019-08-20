import cn from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import uuid from 'uuid';

import tf from '../../../assets/styles/typefaces.module.scss';
import useGetAllBooks from '../../../hooks/useGetAllBooks';
import useGetFavouriteBooks from '../../../hooks/useGetFavouriteBooks';
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

  const { favouriteBooks, error, loading } = useGetFavouriteBooks();

  const { allBooks } = useGetAllBooks();

  function viewFavouritedBooks(): React.ReactNode {
    if (!isSigned) {
      return null;
    }

    return favouriteBooks
      ? favouriteBooks.map((book: Book) => (
          <BooksListItem
            key={uuid()}
            id={book.id}
            book={book}
            isFavouriteBook={Boolean(true)}
          />
        ))
      : [];
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
          : allBooks.map((book: Book) => (
              <BooksListItem
                key={uuid()}
                id={book.id}
                book={book}
                isFavouriteBook={
                  favouriteBooks.length > 0
                    ? favouriteBooks.some(
                        (item: { id: number }) => item && item.id === book.id
                      )
                    : false
                }
              />
            ))}
      </div>
    </div>
  );
}
