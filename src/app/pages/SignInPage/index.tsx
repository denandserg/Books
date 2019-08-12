import React, { useState } from 'react';

import Button from '../../components/Button';
import Loader from '../../components/Loader';
import Logo from '../../components/Logo';
import enhance from './enhance';
import sm from './styles.module.scss';

interface Props {}

export type SignInPageProps = Props;

const SignInPage = enhance<Props, Props>(_SignInPage);

export default SignInPage;

function _SignInPage(props: Props) {
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
