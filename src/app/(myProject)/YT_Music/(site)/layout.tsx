'use client';
import React from 'react';

import Header from '@/components/Layout/elements/Youtube_Header';
import SideBar from '@/components/Layout/SideBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row h-full ">
      <SideBar />
      <div className="w-full xl:w-[calc(100% - 240px)]">
        <Header>{children}</Header>
      </div>
    </div>
  );
}
