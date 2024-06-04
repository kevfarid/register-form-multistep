import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
}

function Checkboxes(
  { label, name, error, options, ...rest }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className='mb-4'>
      <label
        className='block text-gray-700 text-sm font-bold mb-2'
        htmlFor={name}
      >
        {label}
      </label>
      {options.map((option) => (
        <div key={option.value} className='flex items-center'>
          <input
            ref={ref}
            name={name}
            type='checkbox'
            className='mr-2'
            {...rest}
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
      {error && <p className='text-red-500 text-xs italic'>{error}</p>}
    </div>
  );
}

export default forwardRef(Checkboxes);
