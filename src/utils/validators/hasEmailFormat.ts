import { createValidator } from '.';

// eslint-disable-next-line no-useless-escape
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const hasEmailFormat = createValidator(
  value => {
    if (!value) {
      return false;
    }

    return !EMAIL_REGEX.test(value.toString());
  },
  {
    key: 'HAS_EMAIL_FORMAT'
  }
);

export default hasEmailFormat;
