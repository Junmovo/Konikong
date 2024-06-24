'use client';
import React from 'react';
import { INoticeInfo } from '@/types/Ark';
import instance from '@/app/(myProject)/LostArk/service/service';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import NoticeList from '@/components/Layout/Ark_elements/components/NoticeList';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import ArkPadding from '@/components/Layout/Ark_elements/ArkPadding';
import ArkWhiteBox from '@/components/Layout/Ark_elements/ArkWhiteBox';
import SkeletonNotice from '@/components/Layout/Ark_elements/components/SkeletonNotice';

export default function LostArkNotice() {
  const [NoticeInfo, setNoticeInfo] = useState<INoticeInfo[]>([]);
  const [FilteredNoticeInfo, setFilteredNoticeInfo] = useState<INoticeInfo[]>([]);
  const [Page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState(true);

  const [NowActive, setNowActive] = useState<string>('전체');
  const Pagination = Math.floor(FilteredNoticeInfo.length / 10 + 1);
  const LastPage = Page * 10;
  const FisrtPage = LastPage - 10;
  const SliceNotice = FilteredNoticeInfo.slice(FisrtPage, LastPage);
  const filterList = ['전체', '공지', '이벤트', '점검', '상점'];

  const onClickFilter = (filter: string) => () => {
    setPage(1);
    if (filter === '전체') {
      setFilteredNoticeInfo(NoticeInfo);
      setNowActive(filter);
      return;
    }
    const result = NoticeInfo.reduce<Record<string, INoticeInfo[]>>((acc, curr) => {
      const { Type } = curr;
      if (acc[Type]) acc[Type].push(curr);
      else acc[Type] = [curr];
      return acc;
    }, {});
    setNowActive(filter);
    setFilteredNoticeInfo(result[filter]);
  };
  const nextPage = () => {
    if (Pagination === Page) return;
    setPage(Page + 1);
  };
  const prevPage = () => {
    if (Page === 1) return;
    setPage(Page - 1);
  };

  const PageMoved = (page: number) => () => {
    if (page === Page) {
      return;
    }
    setPage(page);
  };

  const getAPIData = async () => {
    const { data } = await instance.get('/news/notices');
    setNoticeInfo(data);
    setFilteredNoticeInfo(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getAPIData();
  }, []);
  if (isLoading) return <SkeletonNotice />;

  return (
    <ArkPadding>
      <div className="p-10">
        <div className="text-[36px] font-bold mb-[35px]">공지사항</div>
        <div className="pb-[20px] border-b-[2px] border-neutral-500">
          <ul className="flex gap-2">
            {filterList.map((tag, idx) => (
              <li
                key={idx}
                className={cn(
                  'px-[15px] py-[8px] w-[] text-[14px] rounded-full cursor-pointer hover:bg-gray-100 border dark:hover:bg-[#2525259d]',
                  NowActive === tag ? 'bg-[#e8eaf7] dark:bg-black  text-[#425ad5] font-semibold' : 'border'
                )}
                onClick={onClickFilter(tag)}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {SliceNotice?.map((notice, idx) => (
              <li
                key={idx}
                className="last:border-none border-neutral-300 border-b-[1px] hover:bg-gray-100 dark:hover:bg-[#2525259d]"
              >
                <NoticeList notice={notice} />
              </li>
            ))}
          </ul>
        </div>
        <div className=" w-full items-center justify-center flex mt-10">
          <ul className="flex gap-1 items-center">
            <li
              className="px-[10px] py-[10px] text-[#9c9d9e] cursor-pointer hover:bg-gray-100 rounded-full"
              onClick={prevPage}
            >
              <IoIosArrowBack />
            </li>
            {new Array(Pagination).fill(1).map((_, idx) => (
              <li
                key={idx}
                className={cn(
                  'px-[15px] py-[5px] text-[#9c9d9e] cursor-pointer hover:bg-gray-100 rounded-full',
                  Page === idx + 1 ? 'text-[#425ad5] bg-[#e8eaf7] rounded-full' : ''
                )}
                onClick={PageMoved(idx + 1)}
              >
                <span>{idx + 1}</span>
              </li>
            ))}
            <li
              className="px-[10px] py-[10px] text-[#9c9d9e] cursor-pointer hover:bg-gray-100 rounded-full"
              onClick={nextPage}
            >
              <IoIosArrowForward />
            </li>
          </ul>
        </div>
      </div>
    </ArkPadding>
  );
}
