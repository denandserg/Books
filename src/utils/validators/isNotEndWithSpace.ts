import { createValidator } from './index';

const isNotEndWithSpace = createValidator(value => /\s$/.test(String(value)), {
  key: 'Should not end with space'
});

export default isNotEndWithSpace;
