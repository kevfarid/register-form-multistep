import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function Input(
  { label, name, error, ...rest }: InputProps,
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
      <input
        ref={ref}
        name={name}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        {...rest}
      />
      {error && <p className='text-red-500 text-xs italic'>{error}</p>}
    </div>
  );
}

export default forwardRef(Input);
