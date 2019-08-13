import { createValidator } from '.';

const isNotStartWithSpace = createValidator(
  value => {
    if (!value) {
      return false;
    }

    return /^\s/.test(String(value));
  },
  {
    key: 'IS_NOT_START_WITH_SPACE'
  }
);

export default isNotStartWithSpace;
