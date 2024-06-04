import Input from '@/core/ui/Input';
import Select from '@/core/ui/Select';
import { useFormContext } from 'react-hook-form';

export default function Step4A() {
  const { register, formState } = useFormContext();

  return (
    <>
      <Input
        label='Date of Birth'
        type='date'
        {...register('dob', { required: true })}
        error={formState.errors.dob && 'Date of Birth is required.'}
      />
      <Select
        label='Gender'
        {...register('gender', { required: true })}
        error={formState.errors.gender && 'Gender is required.'}
        options={[
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'other', label: 'Other' },
        ]}
      />
    </>
  );
}
