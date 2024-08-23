import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';
import { montserrat, pretendard } from '../../public/fonts/fonts';
import { ThemeProvider } from '../../provider/ThemeProvider';
import ArkHeader from '@/components/Layout/Ark_elements/Header';
import ArkWrapper from '@/components/Layout/Ark_elements/ArkWrapper';
import ReactQueryProvider from '@/hooks/useQueryProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://junmo-github-io.vercel.app/'),
  title: '코니콩 로아검색',
  description: '로스트아크 전적검색 사이트입니다.',
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
    <html lang="ko" className={`${pretendard.variable} ${montserrat.className} `}>
      <StyledComponentsRegistry>
        <body className={pretendard.className} style={{ overflowX: 'hidden' }}>
          <ReactQueryProvider>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
              <div className="font-pretendard">
                <ArkHeader />
                <ArkWrapper>{children}</ArkWrapper>
              </div>
            </ThemeProvider>
          </ReactQueryProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
