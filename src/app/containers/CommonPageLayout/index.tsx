import cn from 'classnames';
import React, { ReactNode } from 'react';

import Loader from '../../components/Loader';
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

  return (
    <div
      className={cn(sm.CommonPageLayout_Main, {
        [sm.CommonPageLayout_Main__Wrap]: !customMainWrap
      })}
    >
      {customMainWrap ? (
        mainContent
      ) : (
        <div className={sm.CommonPageLayout_MainInner}>{mainContent}</div>
      )}
    </div>
  );
}
