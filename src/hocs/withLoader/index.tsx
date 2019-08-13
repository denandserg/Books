import React, { ReactElement } from 'react';
import { branch, compose, predicate, renderComponent } from 'recompose';

import Loader from '../../app/components/Loader';
import Overlay from '../../app/components/Overlay';

interface DefaultCheckerArgs {
  loading?: boolean;
}

interface WithLoaderOpts<I> {
  checker?: predicate<I & DefaultCheckerArgs>;
  isOverlay?: boolean;
  renderLoader?: (isOverlay?: boolean) => ReactElement;
}

const defaultOptions = {
  checker: ({ loading }: DefaultCheckerArgs) => Boolean(loading),
  isOverlay: false,
  renderLoader: (isOverlay = false) => <Loader noBgn={!isOverlay} />
};

export default function withLoader<I, O>(options: WithLoaderOpts<I> = {}) {
  return function createEnhancer<I, O>(WrappedComponent: React.ComponentType) {
    const {
      isOverlay = defaultOptions.isOverlay,
      renderLoader = defaultOptions.renderLoader,
      checker = defaultOptions.checker
    } = options;

    return compose<I | {}, O>(
      branch(
        checker,
        branch(
          () => isOverlay,
          renderComponent(props => (
            <Overlay
              front={renderLoader(true)}
              back={<WrappedComponent {...props} />}
            />
          )),
          renderComponent(() => renderLoader())
        )
      )
    )(WrappedComponent);
  };
}
