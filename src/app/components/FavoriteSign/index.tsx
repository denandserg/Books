import cn from 'classnames';
import * as firebase from 'firebase';
import React, { HTMLAttributes, MouseEvent } from 'react';
import { useObject } from 'react-firebase-hooks/database';

import { getFavouritesBooksRef, setFavouritesBooksRef } from '../../../api';
import Button from '../Button';
import Icon from '../Icon';
import sm from './styles.module.scss';

interface _Props extends HTMLAttributes<HTMLDivElement> {
  bookId: number;
  isFavourite: boolean;
}

export type FavoriteSignProps = _Props;

export default function FavoriteSign(props: _Props) {
  const { bookId } = props;

  const [snapshot] = useObject(getFavouritesBooksRef());

  const { isFavourite } = props;

  async function createHandlerFavourites(
    event: MouseEvent<HTMLButtonElement & HTMLAnchorElement>
  ) {
    event.preventDefault();
    // @ts-ignore
    const curUserUid = firebase.auth().currentUser.uid;
    const prevFavouritesBooks =
      snapshot && snapshot.val()[curUserUid] ? snapshot.val()[curUserUid] : [];

    if (prevFavouritesBooks && prevFavouritesBooks.includes(bookId)) {
      const index = prevFavouritesBooks.indexOf(bookId);
      if (index > -1) {
        prevFavouritesBooks.splice(index, 1);
      }
      prevFavouritesBooks.filter(item => item !== bookId);
      setFavouritesBooksRef(curUserUid, prevFavouritesBooks);
    } else {
      prevFavouritesBooks.push(bookId);
      setFavouritesBooksRef(curUserUid, prevFavouritesBooks);
    }
  }

  return (
    <Button
      clean
      onClick={createHandlerFavourites}
      className={isFavourite?cn(sm.FavoriteSign, sm.FavoriteSign__Added) : cn(sm.FavoriteSign)}
    >
      <Icon name={isFavourite ? 'heart-filled' : 'heart'} />
    </Button>
  );
}
