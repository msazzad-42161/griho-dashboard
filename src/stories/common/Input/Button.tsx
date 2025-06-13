import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js'; // Iconify for dynamic icons
import { cn } from '@/lib/utils';

export interface ButtonProps {
  primary?: boolean; // Primary or secondary button
  backgroundColor?: string; // Optional background color
  size?: 'small' | 'medium' | 'large'; // Button size
  label?: string; // Button label
  icon?: string; // Icon name for iconify
  disabled?: boolean; // Disabled state
  onClick?: () => void; // Click handler
  className?: string; // Additional CSS classes
  iconClassName?: string; // Additional CSS classes for the icon
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  icon,
  disabled = false,
  className,
  iconClassName,
  ...props
}) => {
  const sizeClass = size === 'small' 
    ? 'text-sm py-2 px-3' 
    : size === 'large' 
      ? 'text-lg py-3 px-5' 
      : 'text-base py-2 px-4'; // Medium is default

  // Ensure square shape when only the icon is provided (no label)
  const iconOnlyPadding = size === 'small' 
    ? 'p-2' 
    : size === 'large' 
      ? 'p-4' 
      : 'p-3'; // Adjust padding for different sizes

  const modeClass = primary
    ? 'bg-primary text-white hover:opacity-80'
    : 'bg-secondary text-white hover:opacity-80';

  const disabledClass = disabled
    ? 'cursor-not-allowed bg-gray-400 text-gray-600 opacity-50'
    : '';

  const buttonClasses = cn(
    'inline-flex items-center justify-center rounded-md gap-2',
    'transition-colors transition-opacity duration-300',
    icon && !label ? iconOnlyPadding : sizeClass,
    modeClass,
    disabledClass,
    className
  );

  return (
    <button
      type="button"
      className={buttonClasses}
      style={{ backgroundColor: backgroundColor }}
      disabled={disabled}
      {...props}
    >
      {icon && <Icon icon={icon} fontSize={16} className={iconClassName} />}
      {label && <span>{label}</span>}
    </button>
  );
};
