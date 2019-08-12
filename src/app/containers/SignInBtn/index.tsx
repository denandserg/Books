import React, { useCallback, useState } from 'react';

// import Session from '../../../api/ednpoints/Session';
// import Loader from '../../components/Loader';
// import { runSaga } from '../../../redux/configureStore';
import Button from '../../components/Button';
// import enhance from './enhance';

interface Props {}

export type SignInBtnProps = Props;

// const SignInBtn = enhance<Props, Props>(_SignInBtn);

// const {
//   REACT_APP_ACC_KIT_APP_ID = '',
//   REACT_APP_ACC_KIT_CSRF = '',
//   REACT_APP_ACC_KIT_VERSION = ''
// } = process.env;

// const isSafari = (ua => ua.includes('safari') && !ua.includes('chrome'))(
//   navigator.userAgent.toLowerCase()
// );

export default SignInBtn;

function SignInBtn(props: Props) {
  const [pending, setPending] = useState(false);

  const handleResponse = useCallback(() => {
    setPending(true);
  }, []);

  const renderButton = useCallback(
    () => (
      <Button variant="primary" onClick={handleResponse} disabled={pending}>
        {pending
          ? 'APP.CONTAINERS.SIGN_IN_BTN.PENDING_TEXT'
          : 'APP.CONTAINERS.SIGN_IN_BTN.TEXT'}
      </Button>
    ),
    [handleResponse, pending]
  );

  // const handleResponse = useCallback<AccountKitProps['onResponse']>(
  //   async ({ code, status }) => {
  //     if (status !== 'PARTIALLY_AUTHENTICATED' || !code) {
  //       return;
  //     }
  //
  //     setPending(true);
  //     try {
  //       await runSaga(Session.fbAccKitLogin, code).toPromise();
  //     } catch (e) {
  //       setPending(false);
  //     }
  //   },
  //   []
  // );
  //
  // if (!ready) {
  //   return <Loader />;
  // }

  return { renderButton };
}
