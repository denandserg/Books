import { composeValidators } from '.';
import isNumberGreaterThan from './isNumberGreaterThan';
import isNumberLessThan from './isNumberLessThan';

export default function isNumberBetween(min: number, max: number) {
  return composeValidators(isNumberGreaterThan(min), isNumberLessThan(max));
}
