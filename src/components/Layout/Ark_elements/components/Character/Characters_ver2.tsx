import useLostArkSearchStore from '@/stores/useLostArkSearchStore';
import { ICharacterWeapon, ICharterInfo, ICharterProfiles, IInfoProps } from '@/types/Ark';
import Image from 'next/image';
import React from 'react';
import ArkPadding from '../../ArkPadding';
import InfoBox from './InfoTitle';
import { CiStar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import InfoBox_ver2 from './InfoTitle_ver2';

const Characters_ver2: React.FC<IInfoProps> = ({ CharacterInfo, decodedId }) => {
  const { addFavorites } = useLostArkSearchStore();
  const { favorites } = useLostArkSearchStore();
  const isFavorite = favorites.some((el) => el.name === decodedId);
  const onClickAddFavorite = (v: string) => (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    addFavorites(v);
  };

  return (
    <div className="w-full min-w-[330px]">
      <div className="flex justify-between w-full">
        <div className="flex w-full flex-col items-center gap-1 bg-white shadow-[0_2px_30px_0_rgba(0,0,0,.06)]  rounded-lg overflow-hidden">
          {/* 프로필사진 */}
          <div className="w-full h-[250px] bg-[#15181d] relative overflow-hidden">
            <div
              className={cn(
                'absolute w-[469px] right-[-60px] top-[-45px]',
                CharacterInfo?.CharacterClassName === '도화가'
                  ? 'top-[-90px]'
                  : CharacterInfo?.CharacterClassName === '워로드'
                  ? 'top-[0px]'
                  : ''
              )}
            >
              <Image
                src={CharacterInfo?.CharacterImage || ''}
                width={612}
                height={708}
                alt={CharacterInfo?.CharacterName || ''}
              />
            </div>
            <div className="absolute right-[20px] top-[20px]">
              <span className="cursor-pointer" onClick={onClickAddFavorite(decodedId)}>
                {isFavorite ? <FaStar color="#ffe425" size={24} /> : <CiStar color="#d1d5db" size={24} />}
              </span>
            </div>
          </div>
          {/* 내용 */}
          <div className="w-full relative p-[25px]">
            <div className="">
              <div className="flex items-end">
                <div className="font-bold text-black text-[30px]">{decodedId}</div>
              </div>
              <InfoBox contents={CharacterInfo?.ItemAvgLevel} subcontents="Lv." />

              <div className="gap-1 flex  mt-2">
                <div className="text-[12px] bg-gray-100 inline-block px-[8px] py-[3px] rounded-sm">
                  {CharacterInfo?.ServerName}{' '}
                </div>
                <div className="text-[12px] bg-gray-100 inline-block px-[8px] py-[3px] rounded-sm">
                  {CharacterInfo?.CharacterClassName}
                </div>
              </div>
            </div>
            {/* 하단 */}
            <div className="flex gap-4 mt-[15px] py-[15px] border-y-[1px]">
              <div className="w-full flex flex-col gap-1">
                <InfoBox_ver2
                  title={'아이템'}
                  contents={CharacterInfo?.ItemAvgLevel}
                  subcontents="Lv."
                  color={'black'}
                />
                <InfoBox_ver2
                  title={'원정대'}
                  contents={CharacterInfo?.ExpeditionLevel}
                  subcontents="Lv."
                  color={'black'}
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <InfoBox_ver2
                  title={'전투'}
                  contents={CharacterInfo?.CharacterLevel}
                  subcontents="Lv."
                  color={'black'}
                />

                <InfoBox_ver2 title={'PVP'} contents={CharacterInfo?.PvpGradeName} color={'black'} />
              </div>
            </div>
            <div className=" mt-[15px] pb-[10px] flex flex-col gap-1">
              <InfoBox_ver2 title={'칭호'} contents={CharacterInfo?.Title || '-'} color={'gray'} />
              <InfoBox_ver2 title={'길드'} contents={CharacterInfo?.GuildName || '-'} color={'gray'} />
              <InfoBox_ver2
                title={'영지'}
                contents={`${CharacterInfo?.TownLevel} ${CharacterInfo?.TownName}`}
                subcontents="Lv."
                color={'gray'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters_ver2;
