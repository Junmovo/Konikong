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
import NoneContents from '@/components/Layout/Ark_elements/commons/NoneContents';

interface LayoutProps {
  children: React.ReactNode;
  params: ISearchParams;
}

export default function Layout({ children, params }: LayoutProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [CharacterInfo, setCharacterInfo] = useState<ICharterProfiles>();
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
  if (!CharacterInfo) {
    return <NoneContents contents={`'${decodedId}' 캐릭터 정보가 없습니다.`} />;
  }

  return (
    <>
      <div className="w-full">
        <ArkPadding>
          <div className="flex gap-5 mt-10">
            <CharacterPage CharacterInfo={CharacterInfo} decodedId={decodedId} />
            <CharactersMenu decodedId={decodedId}>{children}</CharactersMenu>
          </div>
        </ArkPadding>
      </div>
    </>
  );
}
