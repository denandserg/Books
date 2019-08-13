import { ComponentType } from 'react';
import { compose, setDisplayName } from 'recompose';

import asFormField from '../../../hocs/asFormField';
import withErrorBoundary from '../../../hocs/withErrorBoundary';
import { composeValidators, hasEmailFormat } from '../../../utils/validators';

export const validateEmail = composeValidators(hasEmailFormat);

const enhance = <I, O>(comp: ComponentType<I>) =>
  compose<I, O>(
    setDisplayName('EmailField'),
    withErrorBoundary,
    asFormField({
      name: 'email',
      label: 'Email',
      validate: [validateEmail]
    })
  )(comp);

export default enhance;
