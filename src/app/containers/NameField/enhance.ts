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

const MAX_LOGIN_LENGTH = 20;

export const validateLoginField = composeValidators(
  isNotStartWithSpace,
  isNotEndWithSpace,
  hasNoSuccessiveSpaces,
  hasNoDigits,

  hasLengthBetween(1, MAX_LOGIN_LENGTH)
);

const enhance = <I, O>(comp: ComponentType<I>) =>
  compose<I, O>(
    setDisplayName('Login'),
    withErrorBoundary,
    asFormField({
      validate: [validateLoginField]
    }),
    withProps({
      maxLength: MAX_LOGIN_LENGTH
    })
  )(comp);

export default enhance;
