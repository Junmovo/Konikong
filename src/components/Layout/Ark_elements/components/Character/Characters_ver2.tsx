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
          <div className="w-full rounded-xl h-[250px] bg-[#15181d] relative overflow-hidden">
            <div className="absolute w-[469px] right-[-60px] top-[-45px]">
              <Image
                src={CharacterInfo?.CharacterImage || ''}
                width={612}
                height={708}
                alt={CharacterInfo?.CharacterName || ''}
              />
            </div>
          </div>
          {/* 내용 */}
          <div className="p-[20px]">
            <div className="">
              <div className="text-[14px]">{CharacterInfo?.ServerName} </div>
              <div className="flex items-end">
                <div className="font-bold text-black text-[30px]">{decodedId}</div>
                <div className="text-[14px] ml-[5px] text-gray-500">{CharacterInfo?.CharacterClassName}</div>
                <div>
                  <span
                    className={cn(
                      'p-[3px] ml-[5px] cursor-pointer text-[14px] flex justify-center items-center bg-inherit border border-gray-300 text-white rounded-[5px]',
                      isFavorite ? 'bg-[#425ad5]' : 'bg-inherit'
                    )}
                    onClick={onClickAddFavorite(decodedId)}
                  >
                    {isFavorite ? <FaStar color="#fff" size={16} /> : <CiStar color="#d1d5db" size={16} />}
                  </span>
                </div>
              </div>
              <InfoBox contents={CharacterInfo?.ItemAvgLevel} subcontents="Lv." />
            </div>
            <div className="flex gap-4 mt-6">
              <div>
                <InfoBox_ver2 title={'아이템'} contents={CharacterInfo?.ItemAvgLevel} subcontents="Lv." />
                <InfoBox_ver2 title={'원정대'} contents={CharacterInfo?.ExpeditionLevel} subcontents="Lv." />
                <InfoBox_ver2 title={'전투'} contents={CharacterInfo?.CharacterLevel} subcontents="Lv." />
              </div>
              <div>
                <InfoBox_ver2 title={'길드'} contents={CharacterInfo?.GuildName || '-'} />
                <InfoBox_ver2 title={'칭호'} contents={CharacterInfo?.Title} />
                <InfoBox_ver2
                  title={'영지'}
                  contents={`${CharacterInfo?.TownLevel} ${CharacterInfo?.TownName}`}
                  subcontents="Lv."
                />
                <InfoBox_ver2 title={'PVP'} contents={CharacterInfo?.PvpGradeName} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters_ver2;
