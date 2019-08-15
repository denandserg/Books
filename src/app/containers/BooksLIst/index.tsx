import cn from 'classnames';
import React from 'react';
import { useObject } from 'react-firebase-hooks/database';
import uuid from 'uuid';

import { getBooksRef } from '../../../api';
import tf from '../../../assets/styles/typefaces.module.scss';
import Loader from '../../components/Loader';
import BooksListItem from '../BookListItem';
import { Book } from './constants';
import enhance from './enhance';
import sm from './styles.module.scss';

interface Props {}

const BooksList = enhance<Props, Props>(_BooksList);

export default BooksList;

function _BooksList(props: Props) {
  const [snapshot, loading, error] = useObject(getBooksRef());
  const books = snapshot ? snapshot.val() : [];

  return loading || error ? (
    <Loader />
  ) : (
    <div className={sm.BooksList}>
      <div className={cn(tf.pageHeader)}>Golden Books Catalogue</div>
      <div className={cn(sm.BooksList_Content)}>
        {books.map((book: Book) => (
          <BooksListItem key={uuid()} book={book} />
        ))}
      </div>
    </div>
  );
}
