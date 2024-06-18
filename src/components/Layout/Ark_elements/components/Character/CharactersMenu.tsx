'use client';
import ItemsPage from '@/app/(myProject)/LostArk/character/[Id]/items/page';
// import OthersPage from '@/app/(myProject)/LostArk/character/[Id]/others/page';
import instance from '@/app/(myProject)/LostArk/service/service';
import { cn } from '@/lib/utils';
import { ICharterInfo, ICharterProfiles } from '@/types/Ark';
import React, { useEffect, useState } from 'react';
import OthersPage from './Characters_others';
import Characters_gems from './Characters_gems';
import ArkWhiteBox from '../../ArkWhiteBox';
import Characters_power from './Characters_power';

interface ICharactersMenu {
  children: React.ReactNode;
  decodedId: string;
}

const CharactersMenu = ({ children, decodedId }: ICharactersMenu) => {
  const [selectedTab, setSelectedTab] = useState('');
  const [OtherCharacter, setOtherCharacter] = useState<ICharterInfo[] | undefined>();

  useEffect(() => {
    const getAPIData = async () => {
      try {
        const { data } = await instance.get(`/characters/${decodedId}/siblings`);

        setOtherCharacter(data);
      } catch (error) {
        console.error('데이터를 받아오지 못했습니다.');
      }
    };
    getAPIData();
  }, [decodedId]);

  const TabMenu = [
    { Title: '메인', Load: '' },
    { Title: '아바타', Load: 'avoater' },
    { Title: '다른 캐릭터', Load: 'Others' },
  ];

  const onChangeTab = (L: string) => () => {
    setSelectedTab(L);
  };

  return (
    <>
      <div className="w-full">
        <div className=" p-[10px] bg-white shadow-[0_2px_30px_0_rgba(0,0,0,.06)] rounded-lg">
          <ul className="flex">
            {TabMenu.map((el, idx) => (
              <li
                key={idx}
                onClick={onChangeTab(el.Load)}
                className={cn(
                  'flex items-center font-semibold text-[#9c9d9e] hover:text-[#425ad5] relative transition px-[10px] py-[5px] hover:before:contents-[""] hover:before:absolute hover:before:bottom-0 hover:before:left-0 hover:before:w-full hover:before:h-[2px] before:transition-[all 200ms cubic-bezier(0.65, 0, 0.35, 1)] hover:before:bg-[#425ad5] cursor-pointer',
                  selectedTab === el.Load
                    ? 'text-[#425ad5] before:contents-[""] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-[#425ad5]'
                    : ''
                )}
              >
                {el.Title}
              </li>
            ))}
          </ul>
        </div>
        <ArkWhiteBox>
          {selectedTab === '' && children}
          {selectedTab === 'items' && <ItemsPage />}
          {selectedTab === 'Others' && <OthersPage OtherCharacter={OtherCharacter} decodedId={decodedId} />}
        </ArkWhiteBox>
        <div>{selectedTab === '' && <Characters_gems decodedId={decodedId} />}</div>
        <div> {selectedTab === '' && <Characters_power decodedId={decodedId} />}</div>
      </div>
    </>
  );
};

export default CharactersMenu;
