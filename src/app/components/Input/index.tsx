import cn from 'classnames';
import React, { InputHTMLAttributes, ReactNode } from 'react';

import useInnerVal from '../../../hooks/useInnerVal';
import sm from './styles.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  preIcon?: ReactNode;
  postIcon?: ReactNode;
  error?: boolean;
  inputRef?: (ref: HTMLInputElement) => void;
}

export type InputProps = Props;

export default function Input(props: Props) {
  const {
    className,
    preIcon = null,
    postIcon = null,
    value,
    onChange = () => null,
    error = false,
    inputRef = () => {},
    ...rest
  } = props;

  const { innerVal, handleChange } = useInnerVal({
    value,
    onChange
  });

  return (
    <div
      className={cn(sm.Input, {
        [sm.Input__Error]: error,
        [sm.Input__HasPre]: Boolean(preIcon),
        [sm.Input__HasPost]: Boolean(postIcon)
      })}
    >
      {preIcon && <div className={cn(sm.Input_PreIcon)}>{preIcon}</div>}

      <input
        ref={inputRef}
        type="text"
        className={cn(sm.Input_Native, className, {
          [sm.Input_Native__HasPre]: Boolean(preIcon),
          [sm.Input_Native__HasPost]: Boolean(postIcon)
        })}
        value={value !== undefined ? value : innerVal}
        onChange={handleChange}
        {...rest}
      />

      {postIcon && <div className={cn(sm.Input_PostIcon)}>{postIcon}</div>}
    </div>
  );
}
