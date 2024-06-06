'use client';
import React from 'react';
import { INoticeInfo } from '@/types/Ark';
import instance from '@/app/(myProject)/LostArk/service/service';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import NoticeList from '@/components/Layout/Ark_elements/components/NoticeList';

export default function LostArkNotice() {
  const [NoticeInfo, setNoticeInfo] = useState<INoticeInfo[]>([]);
  const [Page, setPage] = useState<number>(1);
  const Pagination = Math.floor(NoticeInfo.length / 10 + 1);
  const LastPage = Page * 10;
  const FisrtPage = LastPage - 10;
  const SliceNotice = NoticeInfo.slice(FisrtPage, LastPage);

  const PageMoved = (page: number) => () => {
    if (page === Page) {
      return;
    }
    setPage(page);
  };

  const getAPIData = async () => {
    const { data } = await instance.get('/news/notices');
    setNoticeInfo(data);
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <div className="mt-10">
      <div className="text-[36px] font-bold mb-[30px]">공지사항</div>
      {/* <div className="text-[16px] text-neutral-500">서브</div> */}
      <div>
        <ul>
          {SliceNotice?.map((notice, idx) => (
            <li key={idx} className="last:border-none border-neutral-300 border-b-[1px] ">
              <NoticeList notice={notice} />
            </li>
          ))}
        </ul>
      </div>
      <div className=" w-full items-center justify-center flex mt-10">
        <ul className="flex gap-4">
          {new Array(Pagination).fill(1).map((_, idx) => (
            <li
              key={idx}
              className={cn(
                'px-[15px] py-[5px] text-[#9c9d9e] cursor-pointer',
                Page === idx + 1 ? 'text-[#425ad5] bg-[#e8eaf7] rounded-[5px]' : ''
              )}
              onClick={PageMoved(idx + 1)}
            >
              <span>{idx + 1}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
