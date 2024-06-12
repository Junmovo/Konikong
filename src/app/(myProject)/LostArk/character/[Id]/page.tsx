'use client';
import ArkPadding from '@/components/Layout/Ark_elements/ArkPadding';
import { ISearchParams } from '@/types/Ark';
import Link from 'next/link';
import React from 'react';

const CharacterPages = ({ params }: { params: ISearchParams }) => {
  const decodedId = decodeURIComponent(params.Id);
  return (
    <div>
      <Link href={`/LostArk/character/${decodedId}/items`}>{decodedId}</Link>
    </div>
  );
};

export default CharacterPages;
