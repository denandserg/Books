import cn from 'classnames';
import React, { HTMLAttributes, MouseEvent } from 'react';

import Button from '../Button';
import Icon from '../Icon';
import sm from './styles.module.scss';

interface _Props extends HTMLAttributes<HTMLDivElement> {}

export type FavoriteSignProps = _Props;

export default function FavoriteSign(props: _Props) {
  async function createHandlerFavourites(
    event: MouseEvent<HTMLButtonElement & HTMLAnchorElement>
  ) {
    event.preventDefault();
  }

  return (
    <Button
      clean
      onClick={createHandlerFavourites}
      className={cn(sm.FavoriteSign)}
    >
      <Icon name="heart" />
    </Button>
  );
}
