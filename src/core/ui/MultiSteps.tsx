'use client';

import { Children, ReactNode, useState } from 'react';

export default function MultiSteps({
  children,
  prevStep,
  currentStep,
}: {
  children: ReactNode;
  nextStep?: () => void;
  prevStep: () => void;
  currentStep: number;
}) {
  const Components = Children.toArray(children);

  return (
    <div className='flex flex-col justify-between h-full'>
      <div className='flex flex-col gap-6 mb-10 w-full max-w-96 mx-auto'>
        {Components[currentStep]}
      </div>
      <div className='flex flex-col gap-4'>
        {
          <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl disabled:opacity-50'
          >
            {currentStep === Components.length - 1 ? 'Submit' : 'Next'}
          </button>
        }
        {currentStep > 0 && (
          <button
            onClick={prevStep}
            className='text-blue-500 hover:text-blue-700 font-bold text-sm cursor-pointer'
          >
            Previous
          </button>
        )}
      </div>
    </div>
  );
}
