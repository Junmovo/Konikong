import { IRaids } from '@/types/Ark';
import React, { useEffect, useState } from 'react';
import instance from '@/app/(myProject)/LostArk/service/service';
import ArkWhiteBox from '../ArkWhiteBox';
import Image from 'next/image';

const Guardian = () => {
  const [Raids, setRaids] = useState<IRaids>();

  useEffect(() => {
    const getAPIData = async () => {
      try {
        const { data } = await instance.get(`/gamecontents/challenge-guardian-raids`);

        setRaids(data);
      } catch (error) {
        console.error('데이터를 받아오지 못했습니다.');
      }
    };
    getAPIData();
  }, []);
  console.log(Raids);

  return (
    <div className="grid grid-cols-3 gap-3">
      {Raids?.Raids.map((el, idx) => (
        <ArkWhiteBox key={idx}>
          <div className="flex gap-3 items-center" key={idx}>
            <div className="w-[80px] h-[80px] bg-gray-100 rounded-lg relative overflow-hidden">
              <div className="absolute w-[254px] right-[-60px] top-[0px]">
                <Image src={el.Image} width={284} height={100} alt={el.Name} />
              </div>
            </div>
            <div>
              <div className="font-semibold text-[18px]">{el.Name}</div>
              <div>
                <div className="text-gray-400 text-[14px] ">
                  {el.StartTime.split(' ')[0]} ~ {el.EndTime.split(' ')[0]}
                </div>
              </div>
            </div>
          </div>
        </ArkWhiteBox>
      ))}
    </div>
  );
};

export default Guardian;
