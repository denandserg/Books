import React from 'react';
import { useDispatch } from 'react-redux';
import { RouteChildrenProps } from 'react-router';
import useRouter from 'use-react-router';

import fireBase from '../../../api/firebase';
import { API_ACTION_TYPES } from '../../../redux/actions';
import CommonPageLayout from '../../containers/CommonPageLayout';
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

  const dispatch = useDispatch();

  let error: Error;

  async function login(data: User) {
    await fireBase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => dispatch({ type: API_ACTION_TYPES.SIGNED_IN }))
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
        .then(() => dispatch({ type: API_ACTION_TYPES.SIGNED_IN }))
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
          <UserForm
            form="USER_FORM"
            onSubmitFail={() => error}
            onSubmit={values =>
              history.location.pathname === RoutePaths.SignIn._()
                ? login(values)
                : registration(values)
            }
          />
        </>
      )}
    />
  );
}
