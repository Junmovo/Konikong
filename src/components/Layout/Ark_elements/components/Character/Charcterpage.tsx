'use client';
import React from 'react';
import { IInfoProps } from '@/types/Ark';
import NoneContents from '@/components/Layout/Ark_elements/commons/NoneContents';
import Characters_ver2 from './Characters_ver2';

export default function CharacterPage({ CharacterInfo, decodedId }: IInfoProps) {
  return (
    <div>
      {!CharacterInfo ? (
        <div className="w-full">
          <NoneContents contents={`'${decodedId}' 캐릭터 정보가 없습니다.`} />
        </div>
      ) : (
        // <Characters CharacterInfo={CharacterInfo} decodedId={decodedId} />
        <Characters_ver2 CharacterInfo={CharacterInfo} decodedId={decodedId} />
      )}
    </div>
  );
}
