/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import base from 'paths.macro';
import React from 'react';

import copyStringToClipboard from '../../../utils/copyStringToClipboard';
import Icon, { IconName } from '.';
import iconsConfig from './data/selection.json';

const iconsNames: IconName[] = iconsConfig.icons.map(
  ({ properties: { name } }) => name
) as IconName[];

storiesOf(base, module)
  .add('base', () => <Icon name="circle-cross" />)
  .add('All icons', () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor: 'gray' }}>
      {iconsNames.map(name => (
        <div
          key={name}
          style={{
            backgroundColor: 'white',
            flexBasis: '5em',
            flexShrink: 0,
            margin: '0.5em',
            padding: '0.5em',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px grey solid'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div
              style={{
                textAlign: 'center'
              }}
            >
              <b>{name}</b>
            </div>
            <br />
            <button onClick={() => copyStringToClipboard(name)} type="button">
              copy
            </button>
          </div>
          <br />
          <Icon
            name={name}
            style={{
              fontSize: '2em'
            }}
          />
        </div>
      ))}
    </div>
  ));
