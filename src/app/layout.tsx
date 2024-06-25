import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';
import styles from './page.module.css';
import Header from '@/components/Layout/Header';
import { NanumNeo, Tmoney, montserrat, pretendard } from '../../public/fonts/fonts';
import ConditionalHeader from '@/components/Layout/HeaderConditional';
import { ThemeProvider } from '../../provider/ThemeProvider';
import ArkHeader from '@/components/Layout/Ark_elements/Header';
import ArkWrapper from '@/components/Layout/Ark_elements/ArkWrapper';

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
    url: 'https://junmo-github-io.vercel.app/',
    images: [
      {
        url: '/images/Lostark/KoniImage.jpg',
        width: 800,
        height: 400,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable} ${montserrat.className} `}>
      <StyledComponentsRegistry>
        <body className={pretendard.className} style={{ overflowX: 'hidden' }}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <div className="font-pretendard">
              <ArkHeader />
              <ArkWrapper>{children}</ArkWrapper>
            </div>
          </ThemeProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
