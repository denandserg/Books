/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import base from 'paths.macro';
import React, { ComponentType, ReactNode, useState } from 'react';

import withLoader from '.';

const BaseComponent = () => (
  <div style={{ outline: '1px red solid' }}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
);

const CompWithCommonLoader: ComponentType<{ loading: boolean }> = withLoader()(
  BaseComponent
);

// const CompWithCommonLoader = BaseComponent;

const CompWithOverlayLoader: ComponentType<{ loading: boolean }> = withLoader({
  isOverlay: true
})(BaseComponent);

const ContainerWithToggle = ({
  children
}: {
  children: (loading: boolean) => ReactNode;
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setLoading(!loading)}>
        Toggle loading
      </button>
      {children(loading)}
    </div>
  );
};

storiesOf(base, module)
  .add('base', () => (
    <ContainerWithToggle>
      {loading => <CompWithCommonLoader loading={loading} />}
    </ContainerWithToggle>
  ))
  .add('overlayed', () => (
    <ContainerWithToggle>
      {loading => <CompWithOverlayLoader loading={loading} />}
    </ContainerWithToggle>
  ));
