import MultiSteps from '@/core/ui/MultiSteps';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { UserProfiles } from './constants';

import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4A from './components/Step4A';
import Step4B from './components/Step4B';
import Step5 from './components/Step5';

export default function FormSteps({
  nextStep,
  prevStep,
  currentStep,
}: {
  nextStep: () => void;
  prevStep: () => void;
  currentStep: number;
}) {
  const { getValues } = useFormContext();

  return (
    <MultiSteps
      currentStep={currentStep}
      nextStep={nextStep}
      prevStep={prevStep}
    >
      <Step1 />
      <Step2 />
      <Step3 />
      {getValues('userProfile') === UserProfiles.PERSONAL ? (
        <Step4A />
      ) : (
        <Step4B />
      )}
      <Step5 />
    </MultiSteps>
  );
}
