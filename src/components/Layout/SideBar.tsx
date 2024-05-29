import React from 'react';

const SideBar = ({ children }) => {
  return (
    <div>
      <nav>왼쪽 네비게이션입니다</nav>
      <div>{children}</div>
    </div>
  );
};

export default SideBar;
