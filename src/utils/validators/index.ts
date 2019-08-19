export { default as hasNoSuccessiveSpaces } from './hasNoSuccessiveSpaces';
export { default as isNotEndWithSpace } from './isNotEndWithSpace';
export { default as isNotStartWithSpace } from './isNotStartWithSpace';
export { default as isNumberGreaterThan } from './isNumberGreaterThan';
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

export const isRequired = createValidator(value => !value && value !== 0, {
  key: 'Is required'
});
