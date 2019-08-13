import { ComponentType } from 'react';
import { compose, setDisplayName, withProps } from 'recompose';

import asFormField from '../../../hocs/asFormField';
import withErrorBoundary from '../../../hocs/withErrorBoundary';
import {
  composeValidators,
  hasLengthBetween,
  hasNoDigits,
  hasNoSuccessiveSpaces,
  isNotEndWithSpace,
  isNotStartWithSpace
} from '../../../utils/validators';

const MAX_PASSWORD_LENGTH = 20;

export const validatePasswordField = composeValidators(
  isNotStartWithSpace,
  isNotEndWithSpace,
  hasNoSuccessiveSpaces,
  hasNoDigits,

  hasLengthBetween(1, MAX_PASSWORD_LENGTH)
);

const enhance = <I, O>(comp: ComponentType<I>) =>
  compose<I, O>(
    setDisplayName('Password'),
    withErrorBoundary,
    asFormField({
      validate: [validatePasswordField]
    }),
    withProps({
      maxLength: MAX_PASSWORD_LENGTH
    })
  )(comp);

export default enhance;
