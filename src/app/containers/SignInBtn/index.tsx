import React, { useCallback, useState } from 'react';

import Button from '../../components/Button';

interface Props {}

export type SignInBtnProps = Props;

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
  return { renderButton };
}
