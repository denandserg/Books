import React from 'react';

import sm from './styles.module.scss';

export default function Loader() {
  return (
    <div className={sm.loader}>
      <span className={sm.span1} />
      <span className={sm.span2} />
      <span className={sm.span3} />
      <span className={sm.span4} />
    </div>
  );
}
