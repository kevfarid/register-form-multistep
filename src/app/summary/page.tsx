'use client';

import React from 'react';

export default function Summary() {
  const data = JSON.parse(localStorage.getItem('form') || '{}');

  return (
    <div className='bg-white pt-16 pb-8 px-12 rounded-3xl flex flex-col gap-6 w-full max-w-96 mx-auto mt-24'>
      <h1 className='text-2xl font-bold text-center text-blue-500'>Summary</h1>
      <ul className='flex flex-col gap-4'>
        <li>
          <span className='font-bold'>Name:</span> {data.full_name}
        </li>
        <li>
          <span className='font-bold'>Username:</span> {data.username}
        </li>
        <li>
          <span className='font-bold'>Email:</span> {data.email}
        </li>

        <li>
          <span className='font-bold'>User Profile:</span> {data.profile_type}
        </li>
        <li>
          <span className='font-bold'>Notifications:</span>{' '}
          {Boolean(data.notifications).toString()}
        </li>
        <li>
          <span className='font-bold'>City:</span>
          {data.city}
        </li>
        <li>
          <span className='font-bold'>Country:</span>
          {data.country}
        </li>
        <li>
          <span className='font-bold'>Phone:</span> {data.phone_number}
        </li>
        <li>
          <span className='font-bold'>Address:</span> {data.street_address}
        </li>
      </ul>
    </div>
  );
}
