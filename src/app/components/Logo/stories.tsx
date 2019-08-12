/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import base from 'paths.macro';
import React from 'react';

import Logo from '.';

storiesOf(base, module).add('base', () => <Logo />);
