import React from 'react';

import { Metadata } from 'next';
import { ThemeProvider } from '../../../../provider/ThemeProvider';
import ArkHeader from '@/components/Layout/Ark_elements/Header';
import ArkWrapper from '@/components/Layout/Ark_elements/ArkWrapper';

export const metadata: Metadata = {
  title: '코니콩 로아검색',
  description: '로스아크 전적검색 사이트입니다.',
  icons: {
    icon: './images/Lostark/koni.png',
  },
  openGraph: {
    images: './images/Lostark/koni.png',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <ArkHeader />
      <ArkWrapper>{children}</ArkWrapper>
    </ThemeProvider>
  );
}
