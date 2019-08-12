import cn from 'classnames';
import React, { ButtonHTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import Icon, { IconName } from '../Icon';
import enhance from './enhance';
import sm from './styles.module.scss';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<Exclude<LinkProps, 'to'>> & {
    iconPre?: IconName;
    iconPost?: IconName;
    variant?:
      | 'primary'
      | 'special'
      | 'simple'
      | 'standard'
      | 'linklike'
      | 'borderless'
      | 'destructive';
    shape?: 'rounded' | 'square';
    clean?: boolean;
    fluid?: boolean;
    linkTo?: LinkProps['to'];
    className?: string;
  };

const Button = enhance<ButtonProps, ButtonProps>(_Button);

export default Button;

function _Button(props: ButtonProps) {
  const {
    iconPre,
    iconPost,
    fluid,
    children,
    shape = 'rounded',
    variant = 'standard',
    className,
    onClick = () => null,
    clean = false,
    linkTo,
    ...restProps
  } = props;

  const baseClasses = cn(sm.Button__Clean, className, {
    [sm.Button__Fluid]: fluid,
    [sm.Button__IconPre]: iconPre,
    [sm.Button__IconPost]: iconPost
  });

  const btnContent = (
    <>
      {iconPre && (
        <div className={cn(sm.Button_Icon, sm.Button_Icon__Pre)}>
          <Icon name={iconPre} />
        </div>
      )}
      {children}
      {iconPost && (
        <div className={cn(sm.Button_Icon, sm.Button_Icon__Post)}>
          <Icon name={iconPost} />
        </div>
      )}
    </>
  );

  const renderComp = linkTo ? renderLink : renderBtn;

  if (clean) {
    return renderComp({
      className: baseClasses
    });
  }

  const btnClasses = cn(
    sm.Button,
    {
      [sm.Button__VariantPrimary]: variant === 'primary',
      [sm.Button__VariantStandard]: ['standard', 'destructive'].includes(
        variant
      ),
      [sm.Button__VariantBorderless]: variant === 'borderless',
      [sm.Button__VariantLinklike]: variant === 'linklike',
      [sm.Button__VariantDestructive]: variant === 'destructive',
      [sm.Button__VariantSimple]: variant === 'simple',
      [sm.Button__VariantSpecial]: variant === 'special',

      [sm.Button__ShapeRounded]: shape === 'rounded',
      [sm.Button__ShapeSquare]: shape === 'square'
    },
    baseClasses
  );

  return renderComp({
    className: btnClasses
  });

  function renderBtn({
    className: custClasses,
    ...btnProps
  }: {
    className: string;
  }) {
    return (
      <button
        type="button"
        onClick={onClick}
        {...btnProps}
        {...restProps}
        className={custClasses}
      >
        {btnContent}
      </button>
    );
  }

  function renderLink({
    className: custClasses,
    ...btnProps
  }: {
    className: string;
  }) {
    if (!linkTo) {
      throw new Error("Link's to prop is required");
    }

    return (
      <Link to={linkTo} {...btnProps} {...restProps} className={custClasses}>
        {btnContent}
      </Link>
    );
  }
}
