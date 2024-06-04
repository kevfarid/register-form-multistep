import Checkboxes from '@/core/ui/Checkboxes';
import Select from '@/core/ui/Select';
import { useFormContext } from 'react-hook-form';

export default function Step5() {
  const { register, formState } = useFormContext();

  return (
    <>
      <Checkboxes
        label='Would you like to receive notifications via email?:'
        options={[{ value: 'yes', label: 'Yes' }]}
        {...register('notifications')}
      />

      <Select
        label='How did you hear about our service?:'
        {...register('hearAbout', { required: true })}
        error={formState.errors.hearAbout && 'This field is required.'}
        options={[
          { value: 'socialMedia', label: 'Social Media' },
          { value: 'friend', label: 'Friend' },
          { value: 'advertisement', label: 'Advertisement' },
          { value: 'other', label: 'Other' },
        ]}
      />

      <Checkboxes
        label='Terms and Conditions:'
        options={[
          { value: 'agree', label: 'I agree to the terms and conditions' },
        ]}
        {...(register('terms'), { required: true })}
        error={formState.errors.terms && 'This field is required.'}
      />
    </>
  );
}
