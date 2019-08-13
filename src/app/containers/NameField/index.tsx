import React from 'react';
import { BaseFieldProps, WrappedFieldProps } from 'redux-form';

import { AdditionalFieldProps } from '../../../hocs/asFormField';
import Input from '../../components/Input';
import enhance from './enhance';

interface OuterProps extends Partial<BaseFieldProps>, AdditionalFieldProps {
  type: string;
}

interface InnerProps extends OuterProps, WrappedFieldProps {}

export type NameFieldProps = OuterProps;

const NameField = enhance<InnerProps, OuterProps>(_NameField);

export default NameField;

function _NameField(props: InnerProps) {
  const { input, meta, ...rest } = props;

  return <Input {...input} {...rest} autoComplete="off" />;
}
