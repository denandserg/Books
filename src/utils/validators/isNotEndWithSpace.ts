import { createValidator } from './index';

const isNotEndWithSpace = createValidator(value => /\s$/.test(String(value)), {
  key: 'IS_NOT_END_WITH_SPACE'
});

export default isNotEndWithSpace;
