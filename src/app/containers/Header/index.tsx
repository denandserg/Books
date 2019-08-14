import cn from 'classnames';
import * as firebase from 'firebase';
import React from 'react';
import { useDispatch } from 'react-redux';
import useRouter from 'use-react-router';

import { API_ACTION_TYPES } from '../../../redux/actions';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import RoutePaths from '../../routes/paths';
import enhance from './enhance';
import sm from './styles.module.scss';

interface Props {
  isSign?: boolean;
}

const Header = enhance<Props, Props>(_Header);

export default Header;

function _Header(props: Props) {
  const { isSign } = props;

  const dispatch = useDispatch();

  const { history } = useRouter();

  async function handleClickLogout() {
    if (isSign) {
      await firebase
        .auth()
        .signOut()
        .then(() => dispatch({ type: API_ACTION_TYPES.SIGNED_OUT }))
        .then(() => history.push(RoutePaths._()));
    } else {
      history.push(RoutePaths.SignIn._());
    }
  }

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
        <Button iconPre="user" variant="borderless" onClick={handleClickLogout}>
          {isSign ? 'Log out' : 'Sign In'}
        </Button>
      </div>
    </div>
  );
}
