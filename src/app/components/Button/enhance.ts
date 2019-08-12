import { ComponentType } from 'react';
import { compose, setDisplayName } from 'recompose';
// import withErrorBoundary from '../../hocs/withErrorBoundary';

const enhance = <I, O>(comp: ComponentType<I>) =>
  compose<I, O>(
    setDisplayName('Button')
    // withErrorBoundary
  )(comp);

export default enhance;
