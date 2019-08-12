import { withInfo } from '@storybook/addon-info';
import { configure, addDecorator } from '@storybook/react';
import React from 'react';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /([.\/])stories\.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

addDecorator(
  withInfo({
    TableComponent: ({ propDefinitions }) => (
      <table>
        <thead>
        <tr>
          <th align="left">Property</th>
          <th align="left">Type</th>
        </tr>
        </thead>
        <tbody>
        {propDefinitions.map(
          ({
            property,
            propType
          }) => (
            <tr key={property}>
              <td>{property}</td>
              <td>
                {typeof propType !== 'string' && propType.name
                  ? propType.name
                  : propType}
              </td>
            </tr>
          )
        )}
        </tbody>
      </table>
    )
  })
);
