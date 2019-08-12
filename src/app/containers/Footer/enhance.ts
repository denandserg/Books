import { ComponentType } from 'react';
import { compose } from 'recompose';

import withErrorBoundary from '../../../hocs/withErrorBoundary';

const enhance = <I, O>(comp: ComponentType<I>) =>
  compose<I, O>(withErrorBoundary)(comp);

export default enhance;
