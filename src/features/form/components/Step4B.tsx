import Input from '@/core/ui/Input';
import Select from '@/core/ui/Select';
import { useFormContext } from 'react-hook-form';

export default function Step4B() {
  const { register, formState } = useFormContext();

  return (
    <>
      <Input
        label='Company Name'
        {...register('companyName', { required: true })}
        error={formState.errors.companyName && 'Company Name is required.'}
      />
      <Select
        label='Company Size'
        {...register('companySize', { required: true })}
        error={formState.errors.companySize && 'Company Size is required.'}
        options={[
          { value: '1-10', label: '1-10' },
          { value: '11-50', label: '11-50' },
          { value: '51-200', label: '51-200' },
          { value: '201-500', label: '201-500' },
          { value: '500+', label: '500+' },
        ]}
      />
      <Input
        label='Role in Company'
        {...register('role', { required: true })}
        error={formState.errors.role && 'Role in Company is required.'}
      />
    </>
  );
}
