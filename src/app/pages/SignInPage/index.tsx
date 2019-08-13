import React from 'react';

import CommonPageLayout from '../../containers/CommonPageLayout';
import Footer from '../../containers/Footer';
import Header from '../../containers/Header';
import enhance from './enhance';
import UserForm from './UserForm';

interface Props {}

export type SignInPageProps = Props;

const SignInPage = enhance<Props, Props>(_SignInPage);

export default SignInPage;

function _SignInPage(props: Props) {
  return (
    <CommonPageLayout
      customMainWrap={Boolean(true)}
      renderMainContent={() => (
        <>
          <Header />
          <UserForm form="USER_FORM" onSubmit={values => console.log(values)} />
          <Footer />
        </>
      )}
    />
  );
}
