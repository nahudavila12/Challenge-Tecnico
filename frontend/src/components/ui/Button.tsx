import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  isLoading?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  isLoading = false,
  disabled,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = 'w-fit font-medium py-3.5 px-6 rounded-full transition-colors duration-200 text-base mt-3';
  
  const variants = {
    primary: 'bg-[#68A57C] hover:bg-[#4a8a6c] text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
  };

  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variants[variant]} ${className} ${
        disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {isLoading ? 'Cargando...' : children}
    </button>
  );
};

