'use client';
import React, { useEffect } from 'react';
import ArkPadding from '@/components/Layout/Ark_elements/ArkPadding';
import { ICharacterWeapon, ICharterProfiles, ISearchParams } from '@/types/Ark';
import { useState } from 'react';
import CharactersMenu from '@/components/Layout/Ark_elements/components/Character/CharactersMenu';
import NoneContents from '@/components/Layout/Ark_elements/commons/NoneContents';
import LostarkSerachLoading from '../loading';
import { Toaster } from '@/components/ui/sonner';
import instance from '@/app/service/service';
import CharacterPage from '@/components/Layout/Ark_elements/components/Character/Charcterpage';
import { useCharacterInfo } from '@/stores/useQueryLostarkStore';

interface LayoutProps {
  children: React.ReactNode;
  params: ISearchParams;
}

export default function Layout({ children, params }: LayoutProps) {
  const decodedId = decodeURIComponent(params.Id);
  const { data: CharacterInfo, isLoading } = useCharacterInfo(decodedId);

  if (isLoading) {
    return <LostarkSerachLoading />;
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
        <Toaster position="top-center" duration={2000} richColors />
      </div>
    </>
  );
}
