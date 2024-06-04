import Input from '@/core/ui/Input';
import { useForm, useFormContext } from 'react-hook-form';

export default function Step1() {
  const { register, formState } = useFormContext();

  return (
    <>
      <Input
        label='Full Name'
        {...register('fullName', {
          required: true,
          pattern: /^\s*\w+(\s+\w+)+\s*$/,
        })}
        error={formState.errors.fullName && 'Minimum 2 words required.'}
      />
      <Input
        label='Email'
        type='email'
        {...register('email', {
          required: true,
          pattern: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
        })}
        error={formState.errors.email && 'Email is required.'}
      />
      <Input
        label='Phone'
        type='tel'
        error={formState.errors.phone && 'Invalid phone number.'}
        {...register('phone', {
          required: true,
          pattern:
            /^\+?\d{1,3}[\s\-\.]?\(?\d{1,4}\)?[\s\-\.]?\d{1,4}[\s\-\.]?\d{1,4}[\s\-\.]?\d{1,9}$/,
        })}
      />
    </>
  );
}
