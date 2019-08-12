import { createValidator } from './index';

const isDataUriMimeType = (allowedTypes: string[]) =>
  createValidator(
    value => {
      if (!value) {
        return false;
      }

      const valueStr = String(value);

      if (valueStr.startsWith('http')) {
        return false;
      }

      const fileMimeType = valueStr.substring(0, valueStr.indexOf(';base64'));

      return allowedTypes.includes(`data:${fileMimeType}`);
    },
    {
      key: 'IS_ALLOWED_FILE_TYPE',
      options: {
        allowedTypes: allowedTypes.join(', ')
      }
    }
  );

export default isDataUriMimeType;
