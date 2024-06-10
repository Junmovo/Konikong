'use client';
import React, { useEffect } from 'react';
import { ICharterInfo, ISearchParams } from '@/types/Ark';
import { useState } from 'react';
import instance from '../../service/service';
import Characters from '@/components/Layout/Ark_elements/components/Character/Characters';

export default function CharacterPage({ params }: { params: ISearchParams }) {
  const [CharacterInfo, setCharacterInfo] = useState<ICharterInfo[]>([]);
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
      <Characters CharacterInfo={CharacterInfo} decodedId={decodedId} />
    </div>
  );
}
