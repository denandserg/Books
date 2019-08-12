/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import base from 'paths.macro';
import React from 'react';

import Button from '.';

storiesOf(base, module)
  .add('primary', () => (
    <Button variant="primary" onClick={action('button clicked')}>
      I`m button, click me
    </Button>
  ))
  .add('standard', () => (
    <Button variant="standard" onClick={action('button clicked')}>
      I`m button, click me
    </Button>
  ))
  .add('linklike', () => (
    <Button variant="linklike" onClick={action('button clicked')}>
      I`m button, click me
    </Button>
  ))
  .add('borderless', () => (
    <Button variant="borderless" onClick={action('button clicked')}>
      I`m button, click me
    </Button>
  ))
  .add('with pre icon', () => (
    <Button
      variant="borderless"
      iconPre="plus"
      onClick={action('button clicked')}
    >
      I`m button, click me
    </Button>
  ))
  .add('with post icon', () => (
    <Button
      variant="standard"
      iconPost="arrow-right"
      onClick={action('button clicked')}
    >
      I`m button, click me
    </Button>
  ))
  .add('with two icons', () => (
    <Button
      variant="primary"
      iconPost="house"
      iconPre="pin"
      onClick={action('button clicked')}
    >
      I`m button, click me
    </Button>
  ));
