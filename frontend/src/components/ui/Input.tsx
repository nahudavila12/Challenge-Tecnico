import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  error?: string;
}

export const Input = ({ label, required = false, error, ...props }: InputProps) => {
  return (
    <div className="mb-6">
      <label htmlFor={props.id} className="block text-gray-700 text-sm font-medium mb-2">
        {label} {required && <span className="text-black">*</span>}
      </label>
      <input
        {...props}
        className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 placeholder:text-gray-400 ${
          error ? 'border-red-500' : ''
        }`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

