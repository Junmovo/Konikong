import React from 'react';

const PagePadding = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto w-full px-[20px] py-2 xl:px-[100px]">{children}</div>;
};

export default PagePadding;
