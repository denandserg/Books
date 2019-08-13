import { ComponentType } from 'react';
import { compose, setDisplayName, withProps } from 'recompose';

import asFormField from '../../../hocs/asFormField';
import withErrorBoundary from '../../../hocs/withErrorBoundary';
import {
  composeValidators,
  hasNoDigits,
  hasNoSuccessiveSpaces,
  isNotEndWithSpace,
  isNotStartWithSpace,
  isNumberGreaterThan
} from '../../../utils/validators';

const MIN_PASSWORD_LENGTH = 6;

export const validatePasswordField = composeValidators(
  isNotStartWithSpace,
  isNotEndWithSpace,
  hasNoSuccessiveSpaces,
  hasNoDigits,

  isNumberGreaterThan(MIN_PASSWORD_LENGTH)
);

const enhance = <I, O>(comp: ComponentType<I>) =>
  compose<I, O>(
    setDisplayName('Password'),
    withErrorBoundary,
    asFormField({
      validate: [validatePasswordField]
    }),
    withProps({
      minLength: MIN_PASSWORD_LENGTH
    })
  )(comp);

export default enhance;
