import countries from '@/core/constants/countries';
import Input from '@/core/ui/Input';
import Select from '@/core/ui/Select';
import { useFormContext } from 'react-hook-form';

export default function Step2() {
  const { register, formState } = useFormContext();

  return (
    <>
      <Input
        label='Street Address'
        {...register('streetAddress', { required: true })}
        error={formState.errors.streetAddress && 'Street address is required.'}
      />
      <Input
        label='City'
        {...register('city', { required: true })}
        error={formState.errors.city && 'City is required.'}
      />
      <Input
        label='Postal Code'
        {...register('postalCode', { required: true, pattern: /^\d{5}$/ })}
        error={formState.errors.postalCode && 'Postal code is required.'}
      />
      <Select
        label='Country'
        {...register('country', { required: true })}
        options={countries.map((country) => ({
          value: country.code,
          label: country.name,
        }))}
        error={formState.errors.country && 'Country is required.'}
      />
    </>
  );
}
