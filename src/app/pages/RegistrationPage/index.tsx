import * as firebase from 'firebase';
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

export type RegistrationPageProps = Props;

const RegistrationPage = enhance<Props, OuterProps>(_RegistrationPage);

export default RegistrationPage;

function _RegistrationPage(props: Props) {
  const { history } = useRouter();

  const dispatch = useDispatch();

  let error: Error;

  async function setDisplayName(data: User) {
    // @ts-ignore
    await firebase.auth().currentUser.updateProfile({ displayName: data.name });
  }

  async function registration(data: User) {
    try {
      await fireBase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then(() => setDisplayName(data))
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
            onSubmit={values => registration(values)}
          />
        </>
      )}
    />
  );
}
