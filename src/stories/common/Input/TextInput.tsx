import * as React from 'react';
import { cn } from '@/lib/utils';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string; // Error message (if any)
  type?: 'text' | 'password' | 'email' | 'number'; // Support specific input types
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  error,
  className,
  type = 'text', // Default type is 'text'
  ...props
}) => {
  return (
    <div className="flex flex-col w-full">
      {/* Label (optional) */}
      {label && <label className="text-gray-700 mb-1 text-sm lg:text-base">{label}</label>}

      {/* Input Field */}
      <input
        type={type} // Set the input type dynamically
        className={cn(
          'text-sm lg:text-base',
          'px-3 py-2 border rounded-md bg-input-background transition-colors',
          error ? 'border-red-500' : 'border-[#DDDFDF]',
          className
        )}
        {...props}
      />

      {/* Conditional Error Message */}
      {error && <p className="mt-1 text-xs lg:text-sm text-red-500">{error}</p>}
    </div>
  );
};
