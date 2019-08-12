/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import base from 'paths.macro';
import React from 'react';
import withErrorBoundary from '.';

// @ts-ignore
const WrappedThrowingComponent = withErrorBoundary(SomeThrowingComponent);

storiesOf(base, module).add('base', () => {
  return <WrappedThrowingComponent />;
});

function SomeThrowingComponent(props: {}) {
  throw new Error('some test error');
}
