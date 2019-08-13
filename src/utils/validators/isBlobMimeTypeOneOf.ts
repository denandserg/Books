import { createValidator } from './index';

export default function isBlobMimeTypeOneOf(allowedTypes: string[]) {
  return createValidator<Blob>(
    file => !file || !allowedTypes.includes(file.type),
    {
      key: 'IS_FILE_TYPE_ONE_OF',
      options: {
        allowedTypes: allowedTypes.join(', ')
      }
    }
  );
}
