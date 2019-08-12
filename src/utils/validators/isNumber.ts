import { createValidator } from './index';

const isNumber = createValidator(
  value => {
    if (value === undefined || value === null) {
      return false;
    }

    const intVal = parseFloat(String(value));

    return Number.isNaN(intVal);
  },
  { key: 'IS_NUMBER' }
);

export default isNumber;
