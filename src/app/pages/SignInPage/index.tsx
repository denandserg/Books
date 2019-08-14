import React from 'react';
import { RouteChildrenProps } from 'react-router';
import useRouter from 'use-react-router';

import fireBase from '../../../api/firebase';
import CommonPageLayout from '../../containers/CommonPageLayout';
import Footer from '../../containers/Footer';
import Header from '../../containers/Header';
import RoutePaths from '../../routes/paths';
import enhance from './enhance';
import UserForm, { User } from './UserForm';

interface OuterProps {}

type Props = RouteChildrenProps;

export type SignInPageProps = Props;

const SignInPage = enhance<Props, OuterProps>(_SignInPage);

export default SignInPage;

function _SignInPage(props: Props) {
  const { history } = useRouter();

  let error: Error;

  async function login(data: User) {
    await fireBase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(OK => (OK ? history.push(RoutePaths._()) : null))
      .catch(e => {
        error = e;
      });
  }

  async function registration(data: User) {
    try {
      await fireBase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(OK => (OK ? history.push(RoutePaths._()) : null));
    } catch (e) {
      error = e;
    }
  }

  return (
    <CommonPageLayout
      customMainWrap={Boolean(true)}
      renderMainContent={() => (
        <>
          <Header />
          <UserForm
            form="USER_FORM"
            onSubmitFail={() => error}
            onSubmit={values =>
              history.location.pathname === RoutePaths.SignIn._()
                ? login(values)
                : registration(values)
            }
          />
          <Footer />
        </>
      )}
    />
  );
}
