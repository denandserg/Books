import camelize from 'camelize';
import cn from 'classnames';
import React, { useState } from 'react';

import { getCoverRef } from '../../../api';
import Loader from '../../components/Loader';
import { Book } from '../BooksLIst/constants';
import enhance from './enhance';
import sm from './styles.module.scss';

interface Props {
  book: Book;
}

const BooksListItem = enhance<Props, Props>(_BooksListItem);

export default BooksListItem;

function _BooksListItem(props: Props) {
  const { book } = props;
  const { picId, title, description, author } = camelize(book);
  const [url, setUrl] = useState(null);
  getCoverRef(picId, 'jpg')
    .getDownloadURL()
    .then(response => {
      setUrl(response);
    });

  return (
    <div className={cn(sm.BooksListItem)}>
      {!url ? <Loader /> : <img src={url} alt="cower" />}
      <div className={cn(sm.BooksListItem_Body)}>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>Автор: {author}</span>
      </div>
    </div>
  );
}
