import { createValidator } from '.';

const isNumberGreaterThan = (minVal: number) =>
  createValidator(
    value => {
      if (value === undefined || value === null) {
        return false;
      }

      return parseFloat(String(value)) < minVal;
    },
    {
      key: 'IS_NOT_LESS_THAN',
      options: {
        minVal
      }
    }
  );

export default isNumberGreaterThan;
