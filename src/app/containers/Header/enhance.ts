import { ComponentType, memo } from 'react';
import { compose, setDisplayName } from 'recompose';

import withErrorBoundary from '../../../hocs/withErrorBoundary';

const enhance = <I, O>(comp: ComponentType<I>) =>
  compose<I, O>(
    setDisplayName('Header'),
    withErrorBoundary,
    memo
  )(comp);

export default enhance;
