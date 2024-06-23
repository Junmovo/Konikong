import React from 'react';

import { Metadata } from 'next';
import { ThemeProvider } from '../../../../provider/ThemeProvider';
import ArkHeader from '@/components/Layout/Ark_elements/Header';
import ArkWrapper from '@/components/Layout/Ark_elements/ArkWrapper';
import { pretendard } from '../../../../public/fonts/fonts';

export const metadata: Metadata = {
  metadataBase: new URL('https://junmo-github-io.vercel.app/'),
  title: '코니콩 로아검색',
  description: '로스트아크 전적검색 사이트입니다.',
  icons: {
    icon: '/images/Lostark/koni.png',
  },
  openGraph: {
    title: '코니콩 로아검색',
    description: '로스트아크 전적검색 사이트입니다.',
    url: 'https://junmo-github-io.vercel.app/LostArk',
    images: [
      {
        url: '/images/Lostark/KoniImage.jpg',
        width: 800,
        height: 400,
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="font-pretendard">
        <ArkHeader />
        <ArkWrapper>{children}</ArkWrapper>
      </div>
    </ThemeProvider>
  );
}
