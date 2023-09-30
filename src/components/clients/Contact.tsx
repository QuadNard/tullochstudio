"use client"

import React from 'react';
import Map from './Map';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('@/components/clients/Map'), {
  ssr: false,
})

const Contact = () => {



  return (
    <div className=''>
      <DynamicMap />
    </div>
  );
};

export default Contact;
