'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Maincontents from '@/components/Layout/mainElements/MainContents';
import List from '@/components/Layout/mainElements/list';
import MainContents_ver2 from '@/components/Layout/mainElements/MainContents_ver2';
import List2 from '@/components/Layout/mainElements/list_ver2';

export default function Home() {
  return (
    <>
      <MainContents_ver2 />
      <List2 />
    </>
  );
}
