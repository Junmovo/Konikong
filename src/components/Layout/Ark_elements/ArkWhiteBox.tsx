import React from 'react';

const ArkWhiteBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" mt-3 p-[20px] rounded-lg bg-white shadow-[0_2px_30px_0_rgba(0,0,0,.06)] dark:bg-[#2525259d]">
      {children}
    </div>
  );
};

export default ArkWhiteBox;
