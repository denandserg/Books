/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import base from 'paths.macro';
import React from 'react';

import Icon from '../Icon';
import Input from '.';

storiesOf(base, module)
  .add('base', () => <Input placeholder="Type something" />)
  .add('pre icon', () => (
    <Input preIcon={<Icon name="pin" />} placeholder="Type something" />
  ))
  .add('post icon', () => (
    <Input postIcon={<Icon name="pin" />} placeholder="Type something" />
  ))
  .add('two icons', () => (
    <Input
      preIcon={<Icon name="house" />}
      postIcon={<Icon name="pin" />}
      placeholder="Type something"
    />
  ));
