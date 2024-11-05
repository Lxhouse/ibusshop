import React, { FC, ChangeEvent, KeyboardEvent } from 'react';
interface CountConfig {
    maxLength?: number;
    formatter?: (info: {
        value: string;
        count: number;
        maxLength?: number;
    }) => React.ReactNode;
}
interface InputProps {
    addonAfter?: React.ReactNode;
    addonBefore?: React.ReactNode;
    allowClear?: boolean | {
        clearIcon: React.ReactNode;
    };
    classNames?: Record<string, string>;
    count?: CountConfig;
    defaultValue?: string;
    disabled?: boolean;
    id?: string;
    maxLength?: number;
    prefix?: React.ReactNode;
    showCount?: boolean | CountConfig;
    status?: 'error' | 'warning';
    styles?: Record<string, React.CSSProperties>;
    size?: 'large' | 'middle' | 'small';
    suffix?: React.ReactNode;
    type?: string;
    value?: string;
    variant?: 'outlined' | 'borderless' | 'filled';
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onPressEnter?: (e: KeyboardEvent<HTMLInputElement>) => void;
    onClear?: () => void;
}
declare const Input: FC<InputProps>;
export default Input;
