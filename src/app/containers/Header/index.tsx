import cn from 'classnames';
import React from 'react';

import Button from '../../components/Button';
import Logo from '../../components/Logo';
import RoutePaths from '../../routes/paths';
import enhance from './enhance';
import sm from './styles.module.scss';

_Header.defaultProps = {};

export type HeaderProps = typeof _Header.defaultProps;

const Header = enhance(_Header);

export default Header;

function _Header(props: HeaderProps) {
  return (
    <div className={cn(sm.Header)}>
      <div className={sm.Header_LeftGroup}>
        <Button clean linkTo={RoutePaths._()}>
          <div className={sm.Header_LeftGroupLogo}>
            <Logo />
          </div>
        </Button>
      </div>

      <div className={sm.Header_RightGroup}>
        <Button iconPre="user" variant="borderless" linkTo={RoutePaths._()}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
