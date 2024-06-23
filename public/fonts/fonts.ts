import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

export const Tmoney = localFont({
  src: [
    {
      path: '../../public/fonts/TmoneyRoundWindRegular.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/TmoneyRoundWindExtraBold.woff2',
      weight: '700',
    },
  ],
  display: 'swap',
  variable: '--font-Tmoney',
  preload: true,
});

export const montserrat = Montserrat({ subsets: ['latin'] });

export const NanumNeo = localFont({
  src: [
    {
      path: '../../public/fonts/NanumSquareNeoTTF-aLt.woff2',
      weight: '200',
    },
    {
      path: '../../public/fonts/NanumSquareNeoTTF-bRg.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/NanumSquareNeoTTF-cBd.woff2',
      weight: '700',
    },
    {
      path: '../../public/fonts/NanumSquareNeoTTF-dEb.woff2',
      weight: '800',
    },
    {
      path: '../../public/fonts/NanumSquareNeoTTF-eHv.woff2',
      weight: '900',
    },
  ],
  display: 'swap',
  variable: '--font-NanumNeo',
});

export const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
  preload: true,
});
