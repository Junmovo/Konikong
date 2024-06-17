import { MouseEvent } from 'react';

export interface ICharterInfo {
  ServerName: string;
  CharacterName: string;
  CharacterLevel: number;
  CharacterClassName: string;
  ItemAvgLevel: string;
  ItemMaxLevel: string;
}

export interface ICharterProfiles extends ICharterInfo {
  CharacterImage: string;
  ExpeditionLevel: number;
  PvpGradeName: string;
  TownLevel: number;
  TownName: string;
  Title: string;
  GuildMemberGrade: string;
  GuildName: string;
  UsingSkillPoint: number;
  TotalSkillPoint: number;
  Stats: {
    Type: string;
    Value: string;
    Tooltip: string;
  };
}
export interface ICharacterWeapon {
  Type: string;
  Name: string;
  Icon: string;
  Grade: string;
  Tooltip: string;
}

export interface IInfoProps {
  CharacterInfo?: ICharterProfiles;
  decodedId: string;
}

export interface ISearchParams {
  Id: string;
}

export interface IHeaderMenu {
  label: string;
  link: string;
}

export interface INoticeInfo {
  Title: string;
  Date: string;
  Link: string;
  Type: string;
}

export interface IEventInfo {
  Title: string;
  Thumbnail: string;
  Link: string;
  StartDate: string;
  EndDate: string;
  RewardDate: null;
}
export interface IconButtonProps {
  icon: React.ReactNode;
  onClickIcon?: (e: MouseEvent<HTMLDivElement>) => void;
}

export interface ISearchLogValue {
  name: string;
  class: string;
  level: string;
  server: string;
}
export interface ISearchLogValueProps {
  value: {
    name: string;
    class: string;
    level: string;
    server: string;
  };
  onClickAddFavorite: (v: string) => (e: MouseEvent<HTMLDivElement>) => void;
  onClickRemove: (v: string) => (e: MouseEvent<HTMLDivElement>) => void;
  key: number;
}

export interface IGem {
  Slot: number;
  Name: string;
  Icon: string;
  Level: number;
  Grade: string;
  Tooltip: string;
}

export interface IEffect {
  GemSlot: number;
  Name: string;
  Description: string;
  Icon: string;
  Tooltip: string;
}

export interface ICharacterGems {
  Gems: IGem[];
  Effects: IEffect[];
}
