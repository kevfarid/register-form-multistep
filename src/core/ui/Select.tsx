import React, { ForwardedRef, forwardRef } from 'react';

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
};

function Select(
  { label, name, error, ...rest }: SelectProps,
  ref: ForwardedRef<HTMLSelectElement>
) {
  return (
    <div className='mb-4'>
      <label
        className='block text-gray-700 text-sm font-bold mb-2'
        htmlFor={name}
      >
        {label}
      </label>
      <select
        ref={ref}
        name={name}
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        {...rest}
      >
        {rest.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className='text-red-500 text-xs italic'>{error}</p>}
    </div>
  );
}

export default forwardRef(Select);
