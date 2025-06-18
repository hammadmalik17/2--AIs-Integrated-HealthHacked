import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="form-group">
        {label && <label>{label}</label>}
        <input ref={ref} className={className} {...props} />
        {error && <div className="error">{error}</div>}
      </div>
    );
  }
);

Input.displayName = 'Input';