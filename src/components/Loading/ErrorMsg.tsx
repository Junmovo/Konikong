'use client';
import React from 'react';
import { GridLoader } from 'react-spinners';

const ErrorMsg = () => {
  return (
    <div className="my-4 flex items-center justify-center flex-col gap-4">
      <GridLoader color="red" />
      <div className="text-[50px]">oops</div>
      <div>잠시 후 확인해 주세요.</div>
    </div>
  );
};

export default ErrorMsg;
