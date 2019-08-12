import cn from 'classnames';
import React from 'react';
import { ConfigProps, InjectedFormProps } from 'redux-form';

import { isRequired } from '../../../../utils/validators';
import Button from '../../../components/Button';
import EmailField from '../../../containers/EmailField';
import NameField from '../../../containers/NameField';
import enhance from './enhance';
import sm from './styles.module.scss';

export interface User {
  id: number;
  email?: string;
  firstName?: string;
  lastName?: string;
}

interface _Props extends Props, InjectedFormProps {}

interface Props {
  user?: User;
  onEditFinish?: () => void;
}


export type UserFormFields = Omit<User, 'avatar'> & {
  avatar?: string;
};

export type UserFormProps = ConfigProps<UserFormFields, Props> & Props;

const UserForm = enhance<_Props, UserFormProps>(_UserForm);

export default UserForm;
function _UserForm(props: _Props) {
  const { pristine, handleSubmit, invalid } = props;

  return (
    <div className={cn(sm.UserForm)}>
      <span className={sm.UserForm_Title}>User Profile</span>

      <form onSubmit={handleSubmit}>
        <div className={sm.UserForm_Content}>
          <div className={sm.UserForm_Info}>



            <div className={sm.UserForm_Field}>
              <NameField
                name="firstName"
                validate={isRequired}
                label="First Name"
              />
            </div>

            <div className={sm.UserForm_Field}>
              <NameField
                name="lastName"
                validate={isRequired}
                label="Last Name"
              />
            </div>

            <div className={sm.UserForm_Field}>
              <EmailField validate={isRequired} />
            </div>

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
