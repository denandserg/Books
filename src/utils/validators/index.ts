export { default as isNumber } from './isNumber';
export { default as isNumberLessThan } from './isNumberLessThan';
export {
  default as isDataUriFileSizeLessThan
} from './isDataUriFileSizeLessThan';
export { default as isDataUriMimeType } from './isDataUriMimeType';
export { default as hasNoSuccessiveSpaces } from './hasNoSuccessiveSpaces';
export { default as isNotEndWithSpace } from './isNotEndWithSpace';
export { default as isNotStartWithSpace } from './isNotStartWithSpace';
export { default as isNumberGreaterThan } from './isNumberGreaterThan';
export { default as isNumberBetween } from './isNumberBetween';
export { default as hasEmailFormat } from './hasEmailFormat';
export { default as hasNoDigits } from './hasNoDigits';

type DefaultValueType = number | string;

export type ValidityChecker<
  V = DefaultValueType,
  AV = { [key: string]: DefaultValueType }
> = (value: V, allValues?: AV) => boolean;

export type Validator<
  V = DefaultValueType,
  AV = { [key: string]: DefaultValueType }
> = (value: V, allValues?: AV) => ValidationErrorMessage;

export type ValidationErrorMessage =
  | string
  | undefined
  | {
      key: string;
      options?: {
        [key: string]: unknown;
      };
    };

export function createValidator<
  V = DefaultValueType,
  AV = { [key: string]: DefaultValueType }
>(
  validator: ValidityChecker<V, AV> | Validator<V, AV>,
  message: ValidationErrorMessage = 'Validation error'
): Validator<V, AV> {
  return (value: V, allValues?: AV) => {
    const invalid = validator(value, allValues);

    return invalid ? message : undefined;
  };
}

export function composeValidators<
  V = DefaultValueType,
  AV = { [key: string]: DefaultValueType }
>(...validators: Validator<V, AV>[]): Validator<V, AV> {
  return (value: V, allValues?: AV) => {
    for (const validator of validators) {
      const error = validator(value, allValues);

      if (error !== undefined) {
        return error;
      }
    }

    return undefined;
  };
}

export function combineValidators<VM = { [key: string]: Validator }>(
  validatorsMap: VM
) {
  return (values: { [key: string]: unknown }) =>
    Object.entries(validatorsMap).reduce<{
      [key: string]: ValidationErrorMessage;
    }>((errors, [valueKey, validator]) => {
      const error = validator(values[valueKey]);

      return {
        ...(errors || {}),
        [valueKey]: error
      };
    }, {});
}

export const isRequired = createValidator(value => !value && value !== 0, {
  key: 'Is required'
});

export const isNumeric = createValidator(
  value => {
    if (!value) {
      return false;
    }

    return !/^\d*$/.test(String(value));
  },
  {
    key: 'IS_NUMERIC'
  }
);

export const hasLengthLessThan = (max: number) =>
  createValidator(
    value => {
      const valueStr = String(value);

      return valueStr.length > max;
    },
    {
      key: 'HAS_LENGTH_LESS_THAN',
      options: {
        max
      }
    }
  );

export const hasLengthGreaterThan = (min: number) =>
  createValidator(
    value => {
      const valueStr = String(value);

      return valueStr.length < min;
    },
    {
      key: 'HAS_LENGTH_GREATER_THAN',
      options: {
        min
      }
    }
  );

export const hasLengthBetween = (min: number, max: number) =>
  createValidator(
    composeValidators(hasLengthLessThan(max), hasLengthGreaterThan(min)),
    {
      key: 'HAS_LENGTH_BETWEEN',
      options: {
        min,
        max
      }
    }
  );
