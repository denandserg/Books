import { createValidator } from '.';

const isNotStartWithSpace = createValidator(
  value => {
    if (!value) {
      return false;
    }

    return /^\s/.test(String(value));
  },
  {
    key: 'Should not start with space'
  }
);

export default isNotStartWithSpace;
