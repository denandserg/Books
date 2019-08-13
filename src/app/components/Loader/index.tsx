import cn from 'classnames';
import React from 'react';

import sm from './styles.module.scss';

export interface LoaderProps {
  noBgn?: boolean;
}

export default function Loader(props: LoaderProps) {
  const { noBgn = false } = props;
  return (
    <div className={cn(sm.loader, { [sm.loader__WithBgn]: !noBgn })}>
      <div className={sm.loader_Content}>
        <span className={sm.span1} />
        <span className={sm.span2} />
        <span className={sm.span3} />
        <span className={sm.span4} />
      </div>
    </div>
  );
}
