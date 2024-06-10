'use client';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoSearchOutline } from 'react-icons/io5';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SearchLog from '../components/SearchLog';
import useLostArkSearchStore from '@/stores/useLostArkSearchStore';
import FavoritesLog from '../components/FavoritesLog';

interface ISearchBarProps {
  header: boolean;
  main?: boolean;
}

export default function SearchBar({ header, main }: ISearchBarProps) {
  const [SearchValue, setSearchValue] = useState<string>('');
  const { addSearchValue } = useLostArkSearchStore();
  const router = useRouter();

  const onChangeCharacterValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onClickSearchCharacter = () => {
    if (!SearchValue) return;
    router.push(`/LostArk/character/${SearchValue}`);
    addSearchValue(`${SearchValue}`);
  };
  const handelKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!SearchValue) return;
    if (e.key === 'Enter') {
      router.push(`/LostArk/character/${SearchValue}`);
      addSearchValue(`${SearchValue}`);
    }
  };
  console.log(SearchValue);
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
          defaultValue={SearchValue}
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
            <TabsTrigger value="favorites" className="w-[50%]">
              즐겨찾기
            </TabsTrigger>
          </TabsList>
          <TabsContent value="searchvalue" className="mt-0">
            <SearchLog />
          </TabsContent>
          <TabsContent value="favorites" className="mt-0">
            <FavoritesLog />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
