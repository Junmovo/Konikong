import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';
import styles from './page.module.css';
import Header from '@/components/Layout/Header';
import { NanumNeo, Tmoney, montserrat, pretendard } from '../../public/fonts/fonts';

export const metadata: Metadata = {
  title: '준모 포트폴리오',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="kr"
      className={`${NanumNeo.variable} ${Tmoney.variable}  ${pretendard.variable} ${montserrat.className} `}
    >
      <StyledComponentsRegistry>
        <body className={NanumNeo.className} style={{ overflowX: 'hidden' }}>
          <Header />
          <div>{children}</div>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
