import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import { Spinner } from '../Spinner';
import { Icon, IconName } from '../Icon';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * The size of the button
   * @default 'medium'
   */
  size?: ButtonSize;

  /**
   * Whether the button should take up the full width of its container
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Whether the button is in a loading state
   * @default false
   */
  isLoading?: boolean;

  /**
   * Icon to display before the button text
   */
  iconLeft?: IconName;

  /**
   * Icon to display after the button text
   */
  iconRight?: IconName;

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * The content of the button
   */
  children: React.ReactNode;
}

/**
 * Button component for user interactions.
 *
 * Implements the responsive component requirements from DES-150.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      fullWidth = false,
      isLoading = false,
      iconLeft,
      iconRight,
      disabled = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const buttonClasses = classNames(
      styles.button,
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      {
        [styles.fullWidth]: fullWidth,
        [styles.loading]: isLoading,
        [styles.disabled]: disabled,
        [styles.withIconLeft]: iconLeft,
        [styles.withIconRight]: iconRight,
      },
      className
    );

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading && (
          <span className={styles.spinnerContainer}>
            <Spinner size={size === 'small' ? 'small' : 'medium'} />
          </span>
        )}

        {iconLeft && !isLoading && (
          <span className={styles.iconLeft}>
            <Icon name={iconLeft} size={size === 'large' ? 'medium' : 'small'} />
          </span>
        )}

        <span className={styles.content}>{children}</span>

        {iconRight && !isLoading && (
          <span className={styles.iconRight}>
            <Icon name={iconRight} size={size === 'large' ? 'medium' : 'small'} />
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
