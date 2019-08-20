import cn from 'classnames';
import React from 'react';

import sm from './styles.module.scss';

export interface LoaderProps {
  noBgn?: boolean;
}

export default function Loader(props: LoaderProps) {
  const { noBgn = false } = props;
  return (
    <div className={cn(sm.Loader, { [sm.Loader__WithBgn]: !noBgn })}>
      <div className={sm.Loader_Content}>
        <span className={sm.Loader_Ring1} />
        <span className={sm.Loader_Ring2} />
        <span className={sm.Loader_Ring3} />
        <span className={sm.Loader_Ring4} />
      </div>
    </div>
  );
}
