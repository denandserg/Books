import cn from 'classnames';
import React, { ComponentType, ReactNode } from 'react';
import { compose, mapProps } from 'recompose';
import { BaseFieldProps, Field, WrappedFieldProps } from 'redux-form';

import FieldError from '../../app/components/FieldError';
import tf from '../../assets/styles/typefaces.module.scss';
import sm from './styles.module.scss';

export interface AdditionalFieldProps {
  label?: ReactNode;
  placeholder?: string;
}

interface AdditionalControlProps {
  error?: boolean;
}

export type ExtendedFieldProps<P = {}> = BaseFieldProps<P> &
  AdditionalFieldProps;

export default function asFormField<I, O>({
  validate: baseValidate = [],
  ...restBaseProps
}: AdditionalFieldProps & Partial<BaseFieldProps> & Partial<I>) {
  return function formFieldEnhancer(
    Control: ComponentType<WrappedFieldProps & AdditionalControlProps>
  ) {
    return compose<I & ExtendedFieldProps, O>(
      mapProps(
        ({
          validate: customValidate = [],
          ...restCustomProps
        }: ExtendedFieldProps) => ({
          ...restBaseProps,
          ...restCustomProps,
          component: WrappedControl,
          validate: [
            ...(Array.isArray(customValidate)
              ? customValidate
              : [customValidate]),
            ...(Array.isArray(baseValidate) ? baseValidate : [baseValidate])
          ]
        })
      )
    )(Field);

    function WrappedControl(props: WrappedFieldProps & AdditionalFieldProps) {
      const { meta, label, placeholder } = props;

      const isError = meta.touched && meta.error;

      return (
        <div
          className={cn(sm.WrappedControl, {
            [sm.WrappedControl__Error]: isError
          })}
        >
          <div className={cn(tf.fieldLabel, sm.WrappedControl_Label)}>
            {label}
          </div>
          <Control
            {...props}
            error={isError}
            {...(placeholder ? { placeholder } : {})}
          />
          {isError && (
            <div className={sm.WrappedControl_ErrorMsg}>
              <FieldError fieldMeta={meta} />
            </div>
          )}
        </div>
      );
    }
  };
}
