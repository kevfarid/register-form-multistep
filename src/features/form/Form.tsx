'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import FormSteps from './FormSteps';
import { sendForm } from './services/form';
import { useRouter } from 'next/navigation';

export default function Form() {
  const methods = useForm();

  const [currentStep, setCurrentStep] = useState(0);

  const router = useRouter();

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const onSubmit = (data: any) => {
    if (currentStep < 4) {
      nextStep();
      return;
    }

    sendForm(data).then((data) => {
      localStorage.setItem('form', JSON.stringify(data));
      router.push('/summary');
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className='bg-white pt-16 pb-8 px-12 rounded-3xl flex flex-col gap-6 w-full max-w-96 mx-auto'
      >
        <FormSteps
          currentStep={currentStep}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      </form>
    </FormProvider>
  );
}
