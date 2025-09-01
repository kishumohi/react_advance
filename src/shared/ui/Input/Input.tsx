import { cn } from '@/shared/lib';
import { useState, type ChangeEvent, type InputHTMLAttributes, type ReactNode } from 'react';
import styles from './Input.module.scss';
import { Button } from '../Button/Button';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
    className?: string;
    value?: string;
    disabled?: boolean;
    rounded?: boolean;
    Icon?: ReactNode;
    onChange?: (value: string) => void;
}

const Input = (props: InputProps) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [focus, setFocus] = useState<boolean>(false);
    const { className, value, Icon, onChange, rounded = false, disabled = false, type = 'text', ...rest } = props;
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };
    const handleFocus = () => {
        setFocus(true);
    };
    const handleBlur = () => {
        setFocus(false);
    };
    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };
    return (
        <div
            className={cn(styles.inputContainer, className, {
                [styles.rounded]: rounded,
                [styles.disabled]: disabled,
                [styles.focus]: focus,
            })}
        >
            {Icon}
            <input
                {...rest}
                value={value}
                disabled={disabled}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                type={showPassword && type === 'password' ? 'text' : type}
                className={cn(styles.input, {
                    [styles.disabled]: disabled,
                })}
            />
            {type === 'password' && (
                <Button theme='ghost' type='button' className={styles.toggleVisibility} onClick={toggleShowPassword}>
                    {showPassword ? 'Hide' : 'Show'}
                </Button>
            )}
        </div>
    );
};

export default Input;
