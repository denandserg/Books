import cn from 'classnames';
import React, { ReactElement } from 'react';

import sm from './styles.module.scss';

interface RequiredProps {
  back?: ReactElement;
  front: ReactElement;
}

export type OverlayProps = RequiredProps;

export default function Overlay(props: OverlayProps) {
  const { back = null, front } = props;
  return (
    <div className={cn(sm.Overlay)}>
      {back}
      <div className={cn(sm.Overlay__AbsWrap)}>{front}</div>
    </div>
  );
}
