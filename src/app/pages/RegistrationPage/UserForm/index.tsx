import cn from 'classnames';
import React from 'react';
import { ConfigProps, InjectedFormProps } from 'redux-form';

import { isRequired } from '../../../../utils/validators';
import Button from '../../../components/Button';
import EmailField from '../../../containers/EmailField';
import NameField from '../../../containers/NameField';
import PasswordField from '../../../containers/PasswordField';
import enhance from './enhance';
import sm from './styles.module.scss';

export interface User {
  email: string;
  password: string;
  name: string;
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
  const { pristine, handleSubmit, invalid, onSubmitFail } = props;

  const messageError = onSubmitFail();

  return (
    <div className={cn(sm.UserForm)}>
      <span className={sm.UserForm_Title}>Registration Form</span>

      <form onSubmit={handleSubmit}>
        <div className={sm.UserForm_Content}>
          <div className={sm.UserForm_Info}>
            <div className={sm.UserForm_Field}>
              <EmailField validate={isRequired} />
            </div>

            <div className={sm.UserForm_Field}>
              <NameField
                name="name"
                validate={isRequired}
                label="Name"
                type="text"
              />
            </div>

            <div className={sm.UserForm_Field}>
              <PasswordField
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
              Registration
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
