import { ComponentType } from 'react';
import { compose, setDisplayName, withProps } from 'recompose';

import asFormField from '../../../hocs/asFormField';
import withErrorBoundary from '../../../hocs/withErrorBoundary';
import {
  composeValidators,
  hasNoSuccessiveSpaces,
  isNotEndWithSpace,
  isNotStartWithSpace
} from '../../../utils/validators';

export const validateNameField = composeValidators(
  isNotStartWithSpace,
  isNotEndWithSpace,
  hasNoSuccessiveSpaces
);

const enhance = <I, O>(comp: ComponentType<I>) =>
  compose<I, O>(
    setDisplayName('Name'),
    withErrorBoundary,
    asFormField({
      validate: [validateNameField]
    }),
    withProps({})
  )(comp);

export default enhance;
