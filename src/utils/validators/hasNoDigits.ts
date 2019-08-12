import { createValidator } from './index';

const hasNoDigits = createValidator(
  value => {
    if (value === undefined || value === null) {
      return false;
    }

    const regExp = new RegExp(/^\d+$/);

    return regExp.test(String(value));
  },
  { key: 'HAS_NO_DIGITS' }
);

export default hasNoDigits;
