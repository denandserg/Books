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

const MAX_LAST_NAME_LENGTH = 20;

export const validateLastNameField = composeValidators(
  isNotStartWithSpace,
  isNotEndWithSpace,
  hasNoSuccessiveSpaces,
  hasNoDigits,

  hasLengthBetween(1, MAX_LAST_NAME_LENGTH)
);

const enhance = <I, O>(comp: ComponentType<I>) =>
  compose<I, O>(
    setDisplayName('NameField'),
    withErrorBoundary,
    asFormField({
      validate: [validateLastNameField]
    }),
    withProps({
      maxLength: MAX_LAST_NAME_LENGTH
    })
  )(comp);

export default enhance;
