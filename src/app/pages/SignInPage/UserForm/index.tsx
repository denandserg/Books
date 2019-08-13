import cn from 'classnames';
import React, { useState } from 'react';
import { ConfigProps, InjectedFormProps } from 'redux-form';
import useRouter from 'use-react-router';

import { isRequired } from '../../../../utils/validators';
import Button from '../../../components/Button';
import EmailField from '../../../containers/EmailField';
import NameField from '../../../containers/NameField';
import RoutePaths from '../../../routes/paths';
import enhance from './enhance';
import sm from './styles.module.scss';

export interface User {
  email: string;
  password: string;
}

interface _Props extends Props, InjectedFormProps {
  onSubmitFail: Function;
}

interface Props {
  user: User;
  onEditFinish?: () => void;
}

export type UserFormProps = ConfigProps<User>;

const UserForm = enhance<_Props, UserFormProps>(_UserForm);

export default UserForm;
function _UserForm(props: _Props) {
  const [isRegistration, setIsRegistration] = useState(false);

  const { history } = useRouter();

  const { pristine, handleSubmit, invalid, reset, onSubmitFail } = props;

  const messageError = onSubmitFail();

  const handleChangeForm = () => {
    if (isRegistration) {
      history.push(RoutePaths.SignIn._());
      setIsRegistration(!isRegistration);
    } else {
      reset();
      history.push(RoutePaths.Registration._());
      setIsRegistration(!isRegistration);
    }
  };

  return (
    <div className={cn(sm.UserForm)}>
      <span className={sm.UserForm_Title}>
        {isRegistration ? 'Registration Form' : 'Login Form'}
      </span>

      <form onSubmit={handleSubmit}>
        <div className={sm.UserForm_Content}>
          <div className={sm.UserForm_Info}>
            <div className={sm.UserForm_Field}>
              <EmailField validate={isRequired} />
            </div>

            {isRegistration ? (
              <div className={sm.UserForm_Field}>
                <EmailField validate={isRequired} label="Confirm Email" />
              </div>
            ) : null}

            <div className={sm.UserForm_Field}>
              <NameField
                name="password"
                validate={isRequired}
                label="Password"
                type="password"
              />
            </div>

            {messageError && (
              <div className={sm.UserForm_ContentError}>
                {messageError.message}
              </div>
            )}

            <Button
              disabled={pristine || invalid}
              type="submit"
              variant="primary"
              className={sm.UserForm_SaveBtn}
            >
              {isRegistration ? 'Registration' : 'Sign In'}
            </Button>

            <Button
              variant="primary"
              className={sm.UserForm_SaveBtn}
              onClick={handleChangeForm}
            >
              {isRegistration ? 'Authorization' : 'Registration'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
