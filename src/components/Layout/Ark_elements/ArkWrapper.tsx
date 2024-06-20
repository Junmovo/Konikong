import Image from 'next/image';
import React from 'react';

const ArkWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex justify-center  bg-[#f8f9fd] pb-[60px] min-h-[100vh] dark:bg-[#121212]">{children}</div>
  );
};

export default ArkWrapper;
