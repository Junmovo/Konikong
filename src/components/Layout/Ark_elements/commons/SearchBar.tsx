'use client';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import _ from 'lodash';
import { useRouter } from 'next/navigation';
import { IoSearchOutline } from 'react-icons/io5';
import { cn } from '@/lib/utils';

export default function SearchBar({ header }: { header: boolean }) {
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
    if (!SearchValue) return;
    if (e.key === 'Enter') {
      router.push(`/LostArk/character/${SearchValue}`);
    }
  };

  return (
    <div className={cn('relative', header ? 'w-[350px]' : 'w-[50%]')}>
      <input
        type="text"
        className="w-full bg-slate-100 px-[20px] py-[10px] rounded-[10px] outline-none"
        placeholder="캐릭터명을 입력해주세요."
        onChange={onChangeCharacterValue}
        onKeyDown={handelKeydown}
      />
      <button
        className="absolute right-[10px] top-[50%] translate-y-[-50%] py-[10px] px-[5px]"
        onClick={onClickSearchCharacter}
      >
        <IoSearchOutline size={25} />
      </button>
    </div>
  );
}
