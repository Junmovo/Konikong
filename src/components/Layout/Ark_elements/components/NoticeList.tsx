'use client';
import { INoticeInfo } from '@/types/Ark';
import React from 'react';
import MovedLink from 'next/link';
import { getTime, getToday } from '@/lib/utils';
import NoticeBedge from './NoticeBedge';

interface NoticeListProps {
  notice: INoticeInfo;
}

const NoticeList = ({ notice }: NoticeListProps) => {
  const { Title, Date: NoticeDate, Link, Type } = notice;
  const [Date, Time] = NoticeDate.split('T'); // 작성시간
  const Today = getToday();
  const NowTime = getTime();
  const getTimeAgo = () => {
    if (Date === Today) {
      let agoHours = Number(NowTime.split(':')[0]) - Number(Time.split(':')[0]);
      return agoHours > 0 ? agoHours + '시간전' : '방금전';
    }
  };
  return (
    <MovedLink href={Link} className="block w-full p-[12px]" target="_blank">
      <div className="flex justify-between">
        <div className="flex w-[70px] justify-center ">
          <NoticeBedge type={Type} />
        </div>
        <div className="flex w-[80%] items-center">
          <div>{Title}</div>
          {Date === Today ? (
            <div>
              <span className="bg-[#e02020] text-[8px]  rounded-full w-[15px] h-[15px] flex items-center justify-center text-white font-bold ml-[5px]">
                N
              </span>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="flex w-[10%] justify-center items-center text-[#9c9d9e] text-[14px]">
          {Date === Today ? getTimeAgo() : Date}
        </div>
      </div>
    </MovedLink>
  );
};
export default NoticeList;
