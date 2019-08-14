import cn from 'classnames';
import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';

import ApiSelectors from '../../../redux/selectors';
import Loader from '../../components/Loader';
import Footer from '../Footer';
import Header from '../Header';
import enhance from './enhance';
import sm from './styles.module.scss';

_CommonPageLayout.displayName = 'CommonPageLayout';

const CommonPageLayout = enhance<CommonPageLayoutProps, CommonPageLayoutProps>(
  _CommonPageLayout
);

export interface CommonPageLayoutProps {
  customMainWrap?: boolean;
  contentLoading?: boolean;
  renderMainContent: () => ReactNode;
}

export default CommonPageLayout;

function _CommonPageLayout(props: CommonPageLayoutProps) {
  const {
    contentLoading = false,
    renderMainContent,
    customMainWrap = false
  } = props;

  const mainContent = contentLoading ? <Loader /> : renderMainContent();

  const isSigned = useSelector(ApiSelectors.isSignedIn);

  return (
    <div
      className={cn(sm.CommonPageLayout_Main, {
        [sm.CommonPageLayout_Main__Wrap]: !customMainWrap
      })}
    >
      <Header isSign={isSigned} />
      {customMainWrap ? (
        mainContent
      ) : (
        <div className={sm.CommonPageLayout_MainInner}>{mainContent}</div>
      )}
      <Footer />
    </div>
  );
}
