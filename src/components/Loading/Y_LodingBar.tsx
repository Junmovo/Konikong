'use client';
import React from 'react';
import { BarLoader } from 'react-spinners';

const Y_LoadingBar = () => {
  return (
    <div className="w-full">
      <BarLoader color="#36d7b7" cssOverride={{ width: '100%' }} />
    </div>
  );
};

export default Y_LoadingBar;
