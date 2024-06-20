import instance from '@/app/(myProject)/LostArk/service/service';
import { IDungeons } from '@/types/Ark';
import React, { useEffect, useState } from 'react';
import ArkWhiteBox from '../ArkWhiteBox';
import Image from 'next/image';
import { Tooltip } from 'antd';
import SkeletonEvent from './SkeletonEvent';
import SkeletonDungeon from './SkeletonDungeon';

const Dungeons = () => {
  const [Dungeons, setDungeons] = useState<IDungeons[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAPIData = async () => {
      try {
        const { data } = await instance.get(`/gamecontents/challenge-abyss-dungeons`);
        setDungeons(data);
        setIsLoading(false);
      } catch (error) {
        console.error('데이터를 받아오지 못했습니다.');
      }
    };
    getAPIData();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 max-h-[180px]">
      {isLoading
        ? new Array(2).fill(1).map((_, i) => {
            return <SkeletonDungeon key={i} />;
          })
        : Dungeons?.map((items, idx) => (
            <ArkWhiteBox key={idx}>
              <div className="flex justify-between gap-3 items-center ">
                <div className="flex gap-3">
                  <div className="relative w-[90px] h-[90px] rounded-sm overflow-hidden">
                    <Image src={items.Image} fill alt={items.Name} />
                  </div>
                  <div className="">
                    <div className="mb-[2px]">
                      <div className="font-semibold text-[18px]">{items.Name}</div>
                      <div className="text-[16px]">{items.AreaName}</div>
                    </div>
                    <div className="flex">
                      <div className="text-gray-400 text-[14px] ">
                        {items.StartTime.split(' ')[0]} ~ {items.EndTime.split(' ')[0]}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 bg-gray-50 p-2 px-5 rounded-lg scrollbar-gutter-stable dark:bg-[#121212]">
                  {items.RewardItems.map((el, i) => (
                    <div key={i}>
                      <Tooltip title={el.Name}>
                        <div className="relative w-[35px] h-[35px] rounded-sm hover:overflow-auto scrollbar scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-inherit">
                          <Image src={el.Icon} fill alt={items.Name} />
                        </div>
                      </Tooltip>
                    </div>
                  ))}
                </div>
              </div>
            </ArkWhiteBox>
          ))}
    </div>
  );
};

export default Dungeons;
