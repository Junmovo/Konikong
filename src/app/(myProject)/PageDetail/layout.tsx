import PageDetailWrapper from '@/components/Layout/mainElements/PageDetailWrapper';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageDetailWrapper>{children}</PageDetailWrapper>;
}
