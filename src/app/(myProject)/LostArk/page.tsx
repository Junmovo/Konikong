'use client';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import _ from 'lodash';
import { useRouter } from 'next/navigation';

export default function LostArk() {
  const [SearchValue, setSearchValue] = useState<string>('');
  const router = useRouter();

  const deBounce = _.debounce((v) => {
    setSearchValue(v);
    console.log(v);
  }, 100);

  const onChangeCharacterValue = (e: ChangeEvent<HTMLInputElement>) => {
    deBounce(e.target.value);
  };

  const onClickSearchCharacter = () => {
    router.push(`/LostArk/character/${SearchValue}`);
  };
  const handelKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`/LostArk/character/${SearchValue}`);
    }
  };

  return (
    <>
      <input type="text" className="bg-slate-400" onChange={onChangeCharacterValue} onKeyDown={handelKeydown} />
      <span onClick={onClickSearchCharacter}>검색하기</span>
    </>
  );
}
