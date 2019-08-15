import { Icon } from 'antd';
import cn from 'classnames';
import React from 'react';
import { useObject } from 'react-firebase-hooks/database';
import { RouteComponentProps } from 'react-router';
import uuid from 'uuid';

import { getBooksRef } from '../../../api';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import BooksListItem from '../../containers/BookListItem';
import CommonPageLayout from '../../containers/CommonPageLayout';
import RoutePaths from '../../routes/paths';
import enhance from './enhance';
import sm from './styles.module.scss';

interface _Props extends RouteComponentProps<{ booksId: string }> {}

interface Props {}

const BookPage = enhance<_Props, Props>(_BookPage);

export default BookPage;

function _BookPage(props: _Props) {
  const [snapshot, loading, error] = useObject(getBooksRef());
  const allBooks = snapshot ? snapshot.val() : [];
  const bookId = parseInt(window.location.pathname.slice(-1), 10);

  const currentBook = allBooks[bookId];

  return loading || error ? (
    <Loader />
  ) : (
    <CommonPageLayout
      customMainWrap={Boolean(true)}
      renderMainContent={() => (
        <div className={cn(sm.BookPage)}>
          <div className={cn(sm.BookPage_Nav)}>
            <Button variant="primary" linkTo={RoutePaths._()}>
              <Icon type="left" /> Back
            </Button>
          </div>
          <div className={cn(sm.BookPage_Body)}>
            <BooksListItem key={uuid()} id={bookId} book={currentBook} />
          </div>
        </div>
      )}
    />
  );
}
