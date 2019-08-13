import { createValidator } from '.';

const isNumberGreaterThan = (minVal: number) =>
  createValidator(
    value => {
      if (value === undefined || value === null) {
        return false;
      }

      return (value as string).length < minVal;
    },
    {
      key: 'Should not be less than 6 symbols'
    }
  );

export default isNumberGreaterThan;
