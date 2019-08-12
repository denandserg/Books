import { createValidator } from '.';

const hasNoSuccessiveSpaces = createValidator(value => {
  if (!value && value !== 0) {
    return false;
  }

  return /\s\s/.test(String(value));
}, 'HAS_NO_SUCCESSIVE_SPACES');

export default hasNoSuccessiveSpaces;
