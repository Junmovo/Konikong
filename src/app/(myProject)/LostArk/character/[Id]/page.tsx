'use client';
import React, { useEffect } from 'react';
import { ICharterInfo, ISearchParams } from '@/types/Ark';
import { useState } from 'react';
import instance from '../../service/service';
import Characters from '@/components/Layout/Ark_elements/components/Character/Characters';
import useLostArkSearchStore from '@/stores/useLostArkSearchStore';
import KoniLogo from '@/components/Layout/Ark_elements/commons/KoniLogo';
import NoneContents from '@/components/Layout/Ark_elements/commons/NoneContents';

export default function CharacterPage({ params }: { params: ISearchParams }) {
  const [CharacterInfo, setCharacterInfo] = useState<ICharterInfo[]>([]);
  const { addSearchValue } = useLostArkSearchStore();
  const decodedId = decodeURIComponent(params.Id);

  useEffect(() => {
    const getAPIData = async () => {
      try {
        const { data } = await instance.get(
          `https://developer-lostark.game.onstove.com/characters/${params.Id}/siblings`
        );
        setCharacterInfo(data);
      } catch (error) {
        console.error('데이터를 받아오지 못했습니다.');
      }
    };
    getAPIData();
  }, [params.Id]);

  return (
    <div>
      {!CharacterInfo ? (
        <NoneContents contents={`'${decodedId}' 캐릭터 정보가 없습니다.`} />
      ) : (
        <Characters CharacterInfo={CharacterInfo} decodedId={decodedId} />
      )}
    </div>
  );
}
