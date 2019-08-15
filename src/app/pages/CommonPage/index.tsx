import React from 'react';

import BookList from '../../containers/BooksLIst';
import CommonPageLayout from '../../containers/CommonPageLayout';
import enhance from './enhance';

interface Props {}

const CommonPage = enhance<Props, Props>(_CommonPage);

export default CommonPage;

function _CommonPage(props: Props) {
  return (
    <CommonPageLayout
      customMainWrap={Boolean(true)}
      renderMainContent={() => (
        <>
          <BookList favourite={Boolean(false)} />
        </>
      )}
    />
  );
}
