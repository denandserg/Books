import React from 'react';

import BookList from '../../containers/BooksLIst';
import enhance from './enhance';

interface Props {}

const CommonPage = enhance<Props, Props>(_CommonPage);

export default CommonPage;

function _CommonPage(props: Props) {
  return (
    <div>
      <BookList />
    </div>
  );
}
