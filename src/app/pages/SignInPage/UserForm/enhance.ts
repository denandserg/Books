import { ComponentType } from 'react';
import { compose, setDisplayName } from 'recompose';
import { InjectedFormProps, reduxForm } from 'redux-form';

import withErrorBoundary from '../../../../hocs/withErrorBoundary/index';
import withLoader from '../../../../hocs/withLoader/index';

const enhance = <I, O>(comp: ComponentType<I>) =>
  compose<I, O>(
    setDisplayName('UserForm'),
    withErrorBoundary,
    reduxForm({
      enableReinitialize: true
    }),
    withLoader<InjectedFormProps<{}>, {}>({
      checker: ({ submitting }) => submitting,
      isOverlay: false
    })
  )(comp);

export default enhance;
