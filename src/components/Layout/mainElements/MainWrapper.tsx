import React from 'react';

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[1300px] flex items-center justify-between h-[100vh] m-auto relative pb-[50px]">{children}</div>
  );
};

export default MainWrapper;
