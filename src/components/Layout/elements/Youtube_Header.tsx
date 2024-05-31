'use client';
import Image from 'next/image';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import UserIcon from './UserIcon';
import PagePadding from './PagePadding';
import { FiSearch } from 'react-icons/fi';
import { FaChromecast } from 'react-icons/fa6';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import Logo from './Logo';
import Navigator from './Navigator';
import IconButton from './IconButton';
import { RxHamburgerMenu } from 'react-icons/rx';
import LogoImg from './LogoImg';
import { cn } from '@/lib/utils';
import useUIState from '@/hooks/useUIState';
import _ from 'lodash';

const HeaderDrawer = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="h-full w-[240px] p-[20px]">
        <Logo Open={isOpen} onClickClose={isHandler}></Logo>
        <Navigator></Navigator>
      </DrawerContent>
    </Drawer>
  );
};

const YHeader = ({ children }: { children: React.ReactNode }) => {
  const { headerImageSrc } = useUIState();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const headRef = useRef<HTMLHeadElement>(null);

  const onDebounced = _.debounce((v: number | undefined) => {
    setIsScrolled(v !== 0);
  }, 100);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = headRef?.current?.scrollTop;
      // console.log(typeof scrollValue);
      onDebounced(scrollValue);
    };
    headRef?.current?.addEventListener('scroll', handleScroll);
    return () => {
      headRef?.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="relative overflow-y-auto w-full h-full" ref={headRef}>
      <section className="absolute top-0 w-full">
        <div className="relative w-full h-[400px]">
          <Image
            className="object-cover"
            fill
            // falsy값을 대비하기 위한 ||(or) 연산자 값이 빠졌을때 falsy가 된다.
            src={headerImageSrc || 'https://cdn.pixabay.com/photo/2020/08/22/17/51/boat-5509027_1280.jpg'}
            alt="사진"
          />
        </div>
        <div className="absolute h-[400px] bg-black top-0 opacity-40 w-full"></div>
        <div className="absolute h-[400px]  top-0 bg-gradient-to-t from-black w-full"></div>
      </section>
      <section className={cn('sticky top-0 z-10  transition', isScrolled ? 'bg-black' : '')}>
        <PagePadding>
          <div className="flex  items-center justify-between">
            <article
              className={cn(
                'hidden lg:flex  gap-4 min-w-[400px] h-[40px] items-center bg-[rgba(0,0,0,0.14)] rounded-[10px] px-[16px] transition border border-transparent ',
                isScrolled ? ' border-neutral-600' : ''
              )}
            >
              <div>
                <FiSearch size={24} />
              </div>
              <input
                type="text"
                className=" w-full h-full bg-transparent px-2"
                placeholder="노래, 아티스트, 앨범을 검색해주세요."
              />
            </article>
            <article className="flex items-center gap-3 lg:hidden">
              <HeaderDrawer>
                <article className="lg:hidden">
                  <IconButton icon={<RxHamburgerMenu size={24} />}></IconButton>
                </article>
              </HeaderDrawer>
              <LogoImg />
            </article>
            <article className="flex gap-6 items-center">
              <FaChromecast size={24} className="cursor-pointer" />
              <UserIcon size={'sm'} />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="relative">{children}</section>
    </header>
  );
};

export default YHeader;
