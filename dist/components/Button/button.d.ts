import React from 'react';
export interface IButtonProps {
    type: 'primary' | 'default' | 'danger' | 'link';
    size?: 'small' | 'medium' | 'large';
    className?: string;
    href?: string;
    backgroundColor?: string;
    children: React.ReactNode;
    onClick?: () => void;
}
declare const Button: React.FC<IButtonProps>;
export default Button;
