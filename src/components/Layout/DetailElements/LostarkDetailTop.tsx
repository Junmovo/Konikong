'use client';
import React from 'react';
import Link from 'next/link';
import * as S from '@/styles/mainStyles';

const LostarkDetailTop = () => {
  return (
    <div className="flex justify-between items-end mt-[30px] p-[20px] border-b-[1px] pb-[40px]">
      <div>
        <div className="">
          <div className="flex gap-2">
            <span className="text-[12px] rounded-full border py-[5px] px-[10px] inline-block mb-2">FrontEnd</span>
            <span className="text-[12px] rounded-full border py-[5px] px-[10px] inline-block mb-2">개인 프로젝트</span>
          </div>
          <div>
            <span className=" text-[32px] text-gray-600">로스트아크 전적검색</span>
            <h1 className="font-[800] text-[64px] mb-5">코니콩</h1>
          </div>
          <div>
            <div className="mb-2">24.06.04 - 24.06.20</div>
          </div>
          <div className="text-gray-500">
            로스트아크 OpenAPi를 활용한 캐릭터 정보검색 사이트입니다. <br />
            Axios 및 Axios instance를 활용하여 코드의 가독성을 높이고,
            <br />
            Component 단위로 구성하여 재사용성을 높였습니다.
          </div>

          <div className="mt-10">
            <Link
              href={'/LostArk'}
              className="p-[10px] px-[15px] border-black  border  rounded-full text-[14px] inline-block"
            >
              홈페이지 바로가기
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[600px] h-[400px] bg-gray-400 rounded-lg  mt-3 p-[20px]  shadow-[0_2px_30px_0_rgba(0,0,0,.06)] dark:bg-[#2525259d]">
        우측사진
      </div>
    </div>
  );
};

export default LostarkDetailTop;
