import React, {
  FC,
  ChangeEvent,
  KeyboardEvent,
  useState,
  useEffect,
} from 'react';
import './index.scss';

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
  allowClear?: boolean | { clearIcon: React.ReactNode };
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

const Input: FC<InputProps> = ({
  addonAfter,
  addonBefore,
  allowClear,
  classNames,
  count,
  defaultValue,
  disabled = false,
  id,
  maxLength,
  prefix,
  showCount,
  status,
  styles,
  size = 'middle',
  suffix,
  type = 'text',
  value: propValue,
  variant = 'outlined',
  onChange,
  onPressEnter,
  onClear,
}) => {
  const [value, setValue] = useState<string>(defaultValue || '');

  useEffect(() => {
    if (propValue !== undefined) {
      setValue(propValue);
    }
  }, [propValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange?.(e);
  };

  const handleClear = () => {
    setValue('');
    onClear?.();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onPressEnter?.(e);
    }
  };

  const renderCount = () => {
    if (!showCount) return null;
    const countInfo = { value, count: value.length, maxLength };
    return typeof showCount === 'boolean'
      ? `${value.length}${maxLength ? ` / ${maxLength}` : ''}`
      : showCount.formatter?.(countInfo);
  };

  return (
    <div
      className={`input-container ${size} ${variant} ${status || ''} ${
        disabled ? 'disabled' : ''
      } ${classNames?.container || ''}`}
      style={styles?.container}
    >
      {addonBefore && <span className="input-addon before">{addonBefore}</span>}
      <div className="input-wrapper" style={styles?.inputWrapper}>
        {prefix && <span className="input-prefix">{prefix}</span>}
        <input
          id={id}
          type={type}
          value={value}
          disabled={disabled}
          maxLength={maxLength}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={`input-field ${classNames?.inputField || ''}`}
          style={styles?.inputField}
        />
        {allowClear && value && (
          <span className="input-clear" onClick={handleClear}>
            {typeof allowClear === 'object' ? allowClear.clearIcon : '✖'}
          </span>
        )}
        {suffix && <span className="input-suffix">{suffix}</span>}
      </div>
      {addonAfter && <span className="input-addon after">{addonAfter}</span>}
      {renderCount() && <span className="input-count">{renderCount()}</span>}
    </div>
  );
};

export default Input;
