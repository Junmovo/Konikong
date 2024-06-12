'use client';
import React, { useEffect } from 'react';
import CharacterPage from '../../../../../components/Layout/Ark_elements/components/Character/Charcterpage';
import ArkPadding from '@/components/Layout/Ark_elements/ArkPadding';
import LostArk_LoadingBar from '@/app/(myProject)/LostArk/loading';
import CharacterLoading from '@/app/(myProject)/LostArk/character/[Id]/loding';
import { ICharacterWeapon, ICharterProfiles, ISearchParams } from '@/types/Ark';
import { useState } from 'react';
import instance from '../../../../../app/(myProject)/LostArk/service/service';
import CharactersMenu from '@/components/Layout/Ark_elements/components/Character/CharactersMenu';

interface LayoutProps {
  children: React.ReactNode;
  params: ISearchParams;
}

export default function Layout({ children, params }: LayoutProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [CharacterInfo, setCharacterInfo] = useState<ICharterProfiles>();
  // const [CharacterWeapon, setCharacterWeapon] = useState<ICharacterWeapon[]>();
  const decodedId = decodeURIComponent(params.Id);

  useEffect(() => {
    const getAPIData = async () => {
      try {
        const { data } = await instance.get(
          `https://developer-lostark.game.onstove.com/armories/characters/${params.Id}/profiles`
        );

        setLoading(false);
        setCharacterInfo(data);
      } catch (error) {
        console.error('데이터를 받아오지 못했습니다.');
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    getAPIData();
  }, [params.Id]);

  if (loading) {
    return <LostArk_LoadingBar />;
  }

  return (
    <>
      <div className="w-full">
        {/* <div className="bg-[#14181d] w-full h-[300px]">
          <div className="w-[1080px] mx-auto h-full relative overflow-hidden">
            <div className="  absolute left-1/2 translate-x-[-50%]"></div>
          </div>
          <div className="absolute bottom-[-20px] flex  bg-[rgba(0,0,0,0.2)] p-2 rounded-lg">
            <div className="flex">
              <a href=""></a>
            </div>
          </div>
        </div> */}
        <ArkPadding>
          <CharacterPage CharacterInfo={CharacterInfo} decodedId={decodedId} />
          <CharactersMenu>{children}</CharactersMenu>
        </ArkPadding>
      </div>
    </>
  );
}
