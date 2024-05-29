import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      레이아웃입니다.
      {children}
    </div>
  );
};

export default layout;
