import React from 'react';

const PageDetailWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-[1300px] pt-[60px] m-auto">{children}</div>;
};

export default PageDetailWrapper;
