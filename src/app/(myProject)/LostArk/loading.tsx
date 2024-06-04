'use client';
import React from 'react';
import { BarLoader } from 'react-spinners';

const LostArk_LoadingBar = () => {
  return (
    <div className="w-full">
      <BarLoader color="#425ad5" cssOverride={{ width: '100%' }} />
    </div>
  );
};

export default LostArk_LoadingBar;
