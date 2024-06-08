import React from 'react';

const ArkWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full flex justify-center">{children}</div>;
};

export default ArkWrapper;
