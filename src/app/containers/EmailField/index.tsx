import React from 'react';
import { BaseFieldProps, WrappedFieldProps } from 'redux-form';

import { AdditionalFieldProps } from '../../../hocs/asFormField';
import Input from '../../components/Input';
import enhance from './enhance';

interface OuterProps extends Partial<BaseFieldProps>, AdditionalFieldProps {}

interface InnerProps extends OuterProps, WrappedFieldProps {}

export type EmailFieldProps = OuterProps;

const EmailField = enhance<InnerProps, OuterProps>(_EmailField);

export default EmailField;

function _EmailField(props: InnerProps) {
  const { input, meta, ...rest } = props;

  return <Input {...input} {...rest} autoComplete="off" type="email" />;
}
