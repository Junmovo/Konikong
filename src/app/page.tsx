'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Maincontents from '@/components/Layout/mainElements/MainContents';
import List from '@/components/Layout/mainElements/list';

export default function Home() {
  return (
    <>
      <Maincontents />
      <List />
    </>
  );
}
