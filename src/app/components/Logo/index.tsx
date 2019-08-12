import React from 'react';

import logo from '../../../assets/images/svg/logotype.svg';
import sm from './styles.module.scss';

export default function Logo() {
  return <img src={logo} className={sm.Logo} alt="logo" />;
}
