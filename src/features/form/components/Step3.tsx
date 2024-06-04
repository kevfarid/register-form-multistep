import Input from '@/core/ui/Input';
import Radios from '@/core/ui/Radios';
import { UserProfiles } from '@/features/form/constants';
import { useFormContext } from 'react-hook-form';

export default function Step3() {
  const { register, formState, getValues } = useFormContext();

  return (
    <>
      <Input
        label='Username'
        {...register('username', { required: true, minLength: 3 })}
        error={
          formState.errors.username &&
          'Username is required and must be at least 3 characters long.'
        }
      />
      <Input
        label='Password'
        type='password'
        {...register('password', {
          required: true,
          minLength: 8,
          pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        })}
        error={
          formState.errors.password &&
          'Password is required and must contain at least 1 letter and 1 number. Minimum 8 characters long.'
        }
      />
      <Input
        label='Confirm Password'
        type='password'
        {...register('confirmPassword', {
          required: true,
          validate: (value) => value === getValues('password'),
        })}
        error={formState.errors.confirmPassword && 'Passwords do not match.'}
      />

      <Radios
        label='User Profile'
        {...register('userProfile', { required: true })}
        error={
          formState.errors.userProfile && 'Please select a user profile option.'
        }
        options={[
          { value: UserProfiles.PERSONAL, label: 'Personal' },
          { value: UserProfiles.BUSINESS, label: 'Business' },
        ]}
      />
    </>
  );
}
