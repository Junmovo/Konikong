import Image from 'next/image';
import React from 'react';

const ArkWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full flex justify-center  bg-[#f8f9fd] h-[100vh]">{children}</div>;
};

export default ArkWrapper;
