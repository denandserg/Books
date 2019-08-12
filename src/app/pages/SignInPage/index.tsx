import React from 'react';

import enhance from './enhance';
import UserForm from './UserForm';

interface Props {}

export type SignInPageProps = Props;

const SignInPage = enhance<Props, Props>(_SignInPage);

export default SignInPage;

function _SignInPage(props: Props) {

  return (
    <UserForm form='REGISTRATION_FORM' onSubmit={(values)=>console.log(values)}/>
  );
}
