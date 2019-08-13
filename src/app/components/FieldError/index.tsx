import React from 'react';
import { WrappedFieldMetaProps } from 'redux-form';

import sm from './styles.module.scss';

interface _Props {
  fieldMeta: WrappedFieldMetaProps;
}

export type FieldErrorProps = _Props;

export default function FieldError(props: _Props) {
  const { fieldMeta } = props;

  const errMsg = useTranslatedErrMsg(fieldMeta.error);

  return <div className={sm.FieldError}>{errMsg}</div>;
}

function useTranslatedErrMsg(
  formError: string | { key: string; options: { [key: string]: unknown } }
) {
  if (!formError) {
    return '';
  }

  if (typeof formError !== 'object') {
    const keyCandidate = addLocalePrefix(formError);

    return keyCandidate ? [keyCandidate] : formError;
  }

  return addLocalePrefix(formError.key);

  function addLocalePrefix(key: string) {
    return key;
  }
}
