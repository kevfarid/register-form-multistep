import { forwardRef, ForwardedRef, InputHTMLAttributes } from 'react';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
}

function Radios(
  { label, name, error, options, ...rest }: RadioProps,
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
      {options.map((item) => (
        <div key={item.value} className='flex items-center gap-2'>
          <input
            type='radio'
            ref={ref}
            name={name}
            value={item.value}
            {...rest}
          />
          <label htmlFor={item.value}>{item.label}</label>
        </div>
      ))}
      {error && <p className='text-red-500 text-xs italic'>{error}</p>}
    </div>
  );
}

export default forwardRef(Radios);
