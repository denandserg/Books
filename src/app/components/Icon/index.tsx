import './data/style.scss';

import cn from 'classnames';
import React, { HTMLAttributes } from 'react';

import sm from './styles.module.scss';

export type IconName =
  | 'apartment'
  | 'arrow-right'
  | 'arrow-simple-left'
  | 'arrow-simple-right'
  | 'arrow-top-square'
  | 'bath'
  | 'bed'
  | 'bell'
  | 'calendar'
  | 'camera'
  | 'check'
  | 'checkbox-checked'
  | 'checkbox-unchecked'
  | 'checked-circle'
  | 'circle-cross'
  | 'clock'
  | 'commercial'
  | 'cross'
  | 'cross-circle'
  | 'dollar-circle'
  | 'edit'
  | 'elevator'
  | 'exclaim-triangle'
  | 'eye'
  | 'furniture'
  | 'garden'
  | 'gps'
  | 'grear'
  | 'grill'
  | 'gym'
  | 'heart'
  | 'heart-filled'
  | 'hottub'
  | 'house'
  | 'land'
  | 'location'
  | 'map'
  | 'minus'
  | 'office'
  | 'parking'
  | 'paw'
  | 'pencil'
  | 'phone'
  | 'pin'
  | 'plus'
  | 'pool'
  | 'radio-checked'
  | 'radio-unchecked'
  | 'radius'
  | 'search'
  | 'select-closed'
  | 'select-open'
  | 'share'
  | 'square'
  | 'terrace'
  | 'upload'
  | 'user'
  | 'userpick';

interface Props extends HTMLAttributes<HTMLDivElement> {
  name: IconName;
}

export type IconProps = Props;

export default function Icon(props: Props) {
  const { name, className, ...rest } = props;

  return (
    <div className={cn(sm.Icon, 'icon', `icon-${name}`, className)} {...rest} />
  );
}
