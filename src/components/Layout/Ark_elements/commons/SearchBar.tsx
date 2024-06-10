'use client';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import _ from 'lodash';
import { useRouter } from 'next/navigation';
import { IoSearchOutline } from 'react-icons/io5';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SearchLog from '../SearchLog';
import useLostArkSearchStore from '@/stores/useLostArkSearchStore';

interface ISearchBarProps {
  header: boolean;
  main?: boolean;
}

export default function SearchBar({ header, main }: ISearchBarProps) {
  const [SearchValue, setSearchValue] = useState<string>('');
  const { searchValue, addSearchValue } = useLostArkSearchStore();
  const router = useRouter();

  const deBounce = _.debounce((v) => {
    setSearchValue(v);
  }, 300);

  const onChangeCharacterValue = (e: ChangeEvent<HTMLInputElement>) => {
    deBounce(e.target.value);
  };

  const onClickSearchCharacter = () => {
    addSearchValue(`${SearchValue}`);
    router.push(`/LostArk/character/${SearchValue}`);
  };
  const handelKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!SearchValue) return;
    if (e.key === 'Enter') {
      addSearchValue(`${SearchValue}`);
      router.push(`/LostArk/character/${SearchValue}`);
    }
  };

  return (
    <div>
      <div className={cn('relative', header ? 'w-[300px]' : 'w-[480px]', main ? 'hidden' : 'block')}>
        <input
          type="text"
          className={cn(
            'w-full rounded-[10px] outline-none',
            header ? 'px-[20px] py-[10px] bg-slate-100' : 'px-[30px] py-[20px]'
          )}
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
        <Tabs defaultValue="searchvalue" className="absolute w-full z-[1]">
          <TabsList className="w-full p-3">
            <TabsTrigger value="searchvalue" className="w-[50%]">
              최근검색
            </TabsTrigger>
            <TabsTrigger value="password" className="w-[50%]">
              즐겨찾기
            </TabsTrigger>
          </TabsList>
          <TabsContent value="searchvalue" className="mt-0">
            <SearchLog />
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
