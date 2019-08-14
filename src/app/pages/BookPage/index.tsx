import { Icon } from 'antd';
import cn from 'classnames';
import React from 'react';

import Button from '../../components/Button';
import CommonPageLayout from '../../containers/CommonPageLayout';
import RoutePaths from '../../routes/paths';
import enhance from './enhance';
import sm from './styles.module.scss';

// interface MatchParams {
//   id: number;
// }

// interface Props extends RouteComponentProps<MatchParams> {
//
// }

interface Props {}

const BookPage = enhance<Props, Props>(_BookPage);

export default BookPage;

function _BookPage(props: Props) {
  // const {
  //   match: { params }
  // } = props;
  //
  // console.log('Page', params.id);

  return (
    <CommonPageLayout
      customMainWrap={Boolean(true)}
      renderMainContent={() => (
        <div className={cn(sm.BookPage)}>
          <div className={cn(sm.BookPage_Nav)}>
            <Button variant="linklike" linkTo={RoutePaths._()}>
              <Icon type="left" />
            </Button>
          </div>
          <div className={cn(sm.BookPage_Body)} />
        </div>
      )}
    />
  );
}
