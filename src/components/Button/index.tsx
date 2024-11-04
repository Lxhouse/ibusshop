import React from 'react';
import classNames from 'classnames';

export interface IButtonProps {
  type: 'primary' | 'default' | 'danger' | 'link';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  href?: string;
  backgroundColor?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
const Button: React.FC<IButtonProps> = (props) => {
  const {
    type = 'default',
    size = 'medium',
    className,
    children,
    href,
    backgroundColor,
    ...restProps
  } = props;
  const classes = classNames('btn', className, {
    [`btn-${type}`]: type,
    [`btn-${size}`]: size,
  });
  return type === 'link' ? (
    <a href={href} className={classes} {...restProps}>
      {children}
    </a>
  ) : (
    <button className={classes} style={{ backgroundColor }} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
