import React, { useState } from 'react';

import Button from '../../components/Button';
import Loader from '../../components/Loader';
import Logo from '../../components/Logo';
import sm from '../../pages/SignInPage/styles.module.scss';
import enhance from './enhance';

interface Props {}

const BoksList = enhance<Props, Props>(_BoksList);

export default BoksList;

function _BoksList(props: Props) {
  const [isLoading, setIsLoading] = useState(false);

  return isLoading ? (
    <Loader />
  ) : (
    <div className={sm.SignInPage}>
      <div className={sm.SignInPage_Logo}>
        <Logo />
      </div>
      <div className={sm.SignInPage_Trigger}>
        <Button variant="primary" onClick={() => setIsLoading(!isLoading)}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
