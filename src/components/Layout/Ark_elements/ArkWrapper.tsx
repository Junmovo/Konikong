import React from 'react';

const ArkWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex  justify-center">
      <div className="w-[1080px] ">{children}</div>
    </div>
  );
};

export default ArkWrapper;
