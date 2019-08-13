import { createValidator } from '.';

const isNumberLessThan = (maxVal: number) =>
  createValidator(
    value => {
      if (value === undefined || value === null) {
        return false;
      }

      return parseFloat(String(value)) > maxVal;
    },
    {
      key: 'IS_NOT_GREATER_THAN',
      options: {
        maxVal
      }
    }
  );

export default isNumberLessThan;
