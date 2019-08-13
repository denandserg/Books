import { createValidator } from './index';
import toBytes, { FileSizeMeasure } from './toBytes';

const isDataUriFileSizeLessThan = (maxSize: number, measure: FileSizeMeasure) =>
  createValidator(
    value => {
      if (!value) {
        return false;
      }

      const imageSize = countImageSize(String(value).length);

      return imageSize > toBytes(maxSize, measure);

      function countImageSize(base64Length: number) {
        return (3 * base64Length) / 4 + 4;
      }
    },
    {
      key: 'IS_FILE_SIZE_LESS_THAN',
      options: {
        maxSize,
        measure: FileSizeMeasure[measure]
      }
    }
  );

export default isDataUriFileSizeLessThan;
