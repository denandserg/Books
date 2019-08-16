import camelize from 'camelize';
import cn from 'classnames';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCoverRef } from '../../../api';
import ApiSelectors from '../../../redux/selectors';
import FavoriteSign from '../../components/FavoriteSign';
import Loader from '../../components/Loader';
import RoutePaths from '../../routes/paths';
import { Book } from '../BooksLIst/constants';
import enhance from './enhance';
import sm from './styles.module.scss';

interface Props {
  book: Book;
  id: number;
  isFavouriteBook: boolean;
}

const BooksListItem = enhance<Props, Props>(_BooksListItem);

export default BooksListItem;

function _BooksListItem(props: Props) {
  const isSigned = useSelector(ApiSelectors.isSignedIn);

  const { book, id, isFavouriteBook } = props;
  const { picId, title, description, author } = camelize(book);
  const [url, setUrl] = useState(null);
  getCoverRef(picId, 'jpg')
    .getDownloadURL()
    .then(response => {
      setUrl(response);
    });

  return (
    <Link to={RoutePaths.Book._({ id })} className={cn(sm.BooksListItem)}>
      {!url ? <Loader /> : <img src={url} alt="cower" />}
      {isSigned && (
        <div className={sm.BooksListItem_ToggleFavorite}>
          <FavoriteSign isFavourite={isFavouriteBook} bookId={id} />
        </div>
      )}
      <div className={cn(sm.BooksListItem_Body)}>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>Автор: {author}</span>
      </div>
    </Link>
  );
}
