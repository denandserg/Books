import cn from 'classnames';
import React from 'react';
import { useObject } from 'react-firebase-hooks/database';
import uuid from 'uuid';

import { getBooksRef } from '../../../api';
import Loader from '../../components/Loader';
import BooksListItem from '../BookListItem';
import { Book } from './constants';
import enhance from './enhance';
import sm from './styles.module.scss';

interface Props {}

const BooksList = enhance<Props, Props>(_BooksList);

export default BooksList;

function _BooksList(props: Props) {
  const [snapshot = { val: () => {} }, loading, error] = useObject(
    getBooksRef()
  );
  const books = snapshot.val();

  return loading || error ? (
    <Loader />
  ) : (
    <div className={cn(sm.BooksList)}>
      {books.map((book: Book) => (
        <BooksListItem key={uuid()} book={book} />
      ))}
    </div>
  );
}
