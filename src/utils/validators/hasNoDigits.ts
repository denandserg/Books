import { createValidator } from './index';

const hasNoDigits = createValidator(
  value => {
    if (value === undefined || value === null) {
      return false;
    }

    const regExp = new RegExp(/^\d+$/);

    return regExp.test(String(value));
  },
  { key: 'Should not contain digits' }
);

export default hasNoDigits;
