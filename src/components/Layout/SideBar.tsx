import React from 'react';
import Navigator from '@/components/Layout/elements/Navigator';
import Logo from '@/components/Layout/elements/Logo';
const SideBar = () => {
  return (
    <nav className="w-[240px] border-r-[1px] p-[20px] hidden xl:block">
      <div className="p-[8px]">
        <Logo />
      </div>
      <div>
        <Navigator />
      </div>
    </nav>
  );
};

export default SideBar;
