import cn from 'classnames';
import React from 'react';

import BookList from '../../containers/BooksLIst';
import enhance from './enhance';
import sm from './styles.module.scss';

interface Props {}

const CommonPage = enhance<Props, Props>(_CommonPage);

export default CommonPage;

function _CommonPage(props: Props) {
  return (
    <div className={cn(sm.CommonPage)}>
      <BookList />
    </div>
  );
}
