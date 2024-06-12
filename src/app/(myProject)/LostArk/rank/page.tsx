import ArkPadding from '@/components/Layout/Ark_elements/ArkPadding';
import React from 'react';

const Rankpage = () => {
  return (
    <ArkPadding>
      <div className="mt-10">
        <div className="text-[36px] font-bold mb-[35px]">보류</div>
        <div className="flex w-full gap-4 h-[400vh]">
          <div className="w-[25%] sticky top-0 h-[200px] bg-gray-200 rounded-[10px]">직업각인,레벨,클래스,서버</div>
          <div className="w-[75%] bg-gray-200 rounded-[10px]"></div>
        </div>
      </div>
    </ArkPadding>
  );
};

export default Rankpage;
