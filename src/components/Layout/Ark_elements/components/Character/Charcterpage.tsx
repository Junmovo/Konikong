'use client';
import React, { useEffect } from 'react';
import { ICharacterWeapon, ICharterProfiles, IInfoProps, ISearchParams } from '@/types/Ark';
import { useState } from 'react';
import instance from '../../../../../app/(myProject)/LostArk/service/service';
import Characters from '@/components/Layout/Ark_elements/components/Character/Characters';
import NoneContents from '@/components/Layout/Ark_elements/commons/NoneContents';
import LostArk_LoadingBar from '@/app/(myProject)/LostArk/loading';
import CharacterLoading from '@/app/(myProject)/LostArk/character/[Id]/loding';

export default function CharacterPage({ CharacterInfo, decodedId }: IInfoProps) {
  return (
    <div className="w-full">
      {!CharacterInfo ? (
        <NoneContents contents={`'${decodedId}' 캐릭터 정보가 없습니다.`} />
      ) : (
        <Characters CharacterInfo={CharacterInfo} decodedId={decodedId} />
      )}
    </div>
  );
}
