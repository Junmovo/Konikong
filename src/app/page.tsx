import Image from 'next/image';
import styles from './page.module.css';
import MainPage from './main/page';

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <MainPage />
    </>
  );
}
