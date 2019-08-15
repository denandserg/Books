import React from 'react';
import { BaseFieldProps, WrappedFieldProps } from 'redux-form';

import { AdditionalFieldProps } from '../../../hocs/asFormField';
import Input from '../../components/Input';
import enhance from './enhance';

interface OuterProps extends Partial<BaseFieldProps>, AdditionalFieldProps {
  type: string;
}

interface InnerProps extends OuterProps, WrappedFieldProps {}

export type PasswordFieldProps = OuterProps;

const PasswordField = enhance<InnerProps, OuterProps>(_PasswordField);

export default PasswordField;

function _PasswordField(props: InnerProps) {
  const { input, meta, ...rest } = props;

  return <Input {...input} {...rest} autoComplete="off" />;
}
