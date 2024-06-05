'use client';
import React from 'react';
import { ICharterInfo, ISearchParams } from '@/types/Ark';
import { apikey } from '../../service/service';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function CharacterPage({ params }: { params: ISearchParams }) {
  const [CharacterInfo, setCharacterInfo] = useState<ICharterInfo[]>([]);

  useEffect(() => {
    const searchCharacter = async (): Promise<void> => {
      try {
        const { data } = await axios.get(
          `https://developer-lostark.game.onstove.com/characters/${params.Id}/siblings`,
          {
            headers: {
              accept: 'application/json',
              authorization: `bearer ${apikey}`,
            },
          }
        );
        setCharacterInfo(data);
      } catch (error) {
        console.log('데이터를 받아오지 못했습니다', error);
      }
    };
    searchCharacter();
  }, [params.Id]);
  return (
    <div>
      {CharacterInfo?.map((ch, idx) => (
        <div key={idx}>
          <p>server : {ch.ServerName}</p>
        </div>
      ))}
    </div>
  );
}
