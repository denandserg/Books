import cn from 'classnames';
import React, { useState } from 'react';
import { ConfigProps, InjectedFormProps } from 'redux-form';

import { isRequired } from '../../../../utils/validators';
import Button from '../../../components/Button';
import EmailField from '../../../containers/EmailField';
import NameField from '../../../containers/NameField';
import enhance from './enhance';
import sm from './styles.module.scss';

export interface User {
  email: string;
  password: string;
}

interface _Props extends Props, InjectedFormProps {}

interface Props {
  user: User;
  onEditFinish?: () => void;
}

export type UserFormProps = ConfigProps<User>;

const UserForm = enhance<_Props, UserFormProps>(_UserForm);

export default UserForm;
function _UserForm(props: _Props) {
  const [isRegistration, setIsRegistration] = useState(false);

  const { pristine, handleSubmit, invalid } = props;

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
              />
            </div>

            <Button
              disabled={pristine || invalid}
              type="submit"
              variant="primary"
              className={sm.UserForm_SaveBtn}
            >
              Sign In
            </Button>

            <Button
              variant="primary"
              className={sm.UserForm_SaveBtn}
              onClick={() => setIsRegistration(!isRegistration)}
            >
              {isRegistration ? 'Authorization' : 'Registration'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
