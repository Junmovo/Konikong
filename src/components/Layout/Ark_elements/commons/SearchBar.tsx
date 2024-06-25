'use client';
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
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
  const [ShowModal, setShowModal] = useState<boolean>(false);
  const { addSearchValue } = useLostArkSearchStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onChangeCharacterValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onClickSearchCharacter = () => {
    if (!SearchValue) return;
    router.push(`/character/${SearchValue}`);
    addSearchValue(`${SearchValue}`);
    setShowModal(false);
  };
  const handelKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!SearchValue) return;
    if (e.key === 'Enter') {
      router.push(`/character/${SearchValue}`);
      addSearchValue(`${SearchValue}`);
      setSearchValue('');
      inputRef.current?.blur();
      setShowModal(false);
    }
  };
  const onFoucsModal = () => {
    setShowModal(true);
  };

  const clickWrapp = (event: MouseEvent) => {
    if (
      inputRef.current &&
      modalRef.current &&
      !inputRef.current.contains(event.target as Node) &&
      !modalRef.current.contains(event.target as Node)
    ) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickWrapp);
    return () => {
      document.removeEventListener('click', clickWrapp);
      setSearchValue('');
      setShowModal(false);
      inputRef.current?.blur();
    };
  }, []);

  return (
    <div>
      <div className={cn('relative', header ? 'w-[350px]' : 'w-[480px]', main ? 'hidden' : 'block')}>
        <form action={`/character/${SearchValue}`}>
          <input
            type="text"
            className={cn(
              'w-full rounded-[10px] outline-none',
              header ? 'px-[20px] py-[10px] bg-slate-100 dark:bg-[#2525259d]' : 'px-[30px] py-[20px]'
            )}
            placeholder="캐릭터명을 입력해주세요."
            onChange={onChangeCharacterValue}
            onKeyDown={handelKeydown}
            onFocus={onFoucsModal}
            value={SearchValue}
            ref={inputRef}
          />
          <button
            className="absolute right-[10px] top-[50%] translate-y-[-50%] py-[10px] px-[5px]"
            onClick={onClickSearchCharacter}
          >
            <IoSearchOutline size={25} />
          </button>
        </form>
        {ShowModal && (
          <div ref={modalRef}>
            <Tabs defaultValue="searchvalue" className="absolute w-full z-[1]  mt-[10px] ">
              <TabsList className="w-full p-2 h-[50px] ">
                <TabsTrigger value="searchvalue" className="w-[50%] focus:text-[#425ad5]">
                  최근검색
                </TabsTrigger>
                <TabsTrigger value="favorites" className="w-[50%] focus:text-[#425ad5]">
                  즐겨찾기
                </TabsTrigger>
              </TabsList>
              <TabsContent value="searchvalue" className="mt-0 rounded-[10px]">
                <SearchLog />
              </TabsContent>
              <TabsContent value="favorites" className="mt-0">
                <FavoritesLog />
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
}
