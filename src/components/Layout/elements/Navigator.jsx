'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { FiPlus, FiCompass, FiMusic } from 'react-icons/fi';
import { GoHome } from 'react-icons/go';
import PlayList from './PlayList';
import { dummyPlaylistArray } from '@/lib/dummyData';

export default function Navigator() {
  const pathname = usePathname();
  const routes = useMemo(() => {
    return [
      {
        label: '홈',
        icon: <GoHome size={24} />,
        isActive: pathname === '/YT_Music',
        href: '/YT_Music',
      },
      {
        label: '둘러보기',
        icon: <FiCompass size={24} />,
        isActive: pathname === '/YT_Music/explore',
        href: '/YT_Music/explore',
      },
      {
        label: '보관함',
        icon: <FiMusic size={24} />,
        isActive: pathname === '/YT_Music/library',
        href: '/YT_Music/library',
      },
    ];
  }, [pathname]);
  return (
    <div>
      <section className="flex flex-col mt-4">
        {routes.map((el) => {
          return (
            <Link href={el.href} key={el.label}>
              <div
                className={cn(
                  'flex gap-4 p-[12px] items-center hover:bg-neutral-700 rounded-[7px]',
                  el.isActive && 'bg-neutral-800'
                )}
              >
                <span>{el.icon}</span>
                <span>{el.label}</span>
              </div>
            </Link>
          );
        })}
      </section>
      <section>
        <div className="w-full h-[1px] my-[24px] bg-gray-500 "></div>
      </section>
      <section>
        <div className="flex items-center justify-center gap-2 bg-neutral-800 p-[8px] rounded-full cursor-pointer text-[14px] hover:bg-neutral-600 font-[200]">
          <FiPlus size={22} />
          <span>새 재생목록</span>
        </div>
      </section>
      <section className="my-3">
        <ul>
          {dummyPlaylistArray.map((playlist) => {
            return <PlayList playlist={playlist} />;
          })}
        </ul>
      </section>
    </div>
  );
}
