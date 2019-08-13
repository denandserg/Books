import { createValidator } from './index';
import toBytes, { FileSizeMeasure } from './toBytes';

export default function isBlobFileSizeLessThan(
  maxSize: number,
  measure: FileSizeMeasure
) {
  return createValidator<Blob>(
    file => !file || file.size > toBytes(maxSize, measure),
    {
      key: 'IS_FILE_SIZE_LESS_THAN',
      options: {
        maxSize,
        measure: FileSizeMeasure[measure]
      }
    }
  );
}
