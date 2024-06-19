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
  Stats: ICharacterStats[];
  Tendencies: ITendencies[];
}

export interface ICharacterStats {
  Type: string;
  Value: string;
  Tooltip: string;
}
export interface ITendencies {
  Type: string;
  Point: number;
  MaxPoint: number;
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
  length: number;
  Gems: IGem[];
  Effects: IEffect[];
}

export interface IEngravings {
  Slot: number;
  Name: string;
  Icon: string;
  Tooltip: string;
}

export interface IEngravingsEffect {
  Icon: string;
  Name: string;
  Description: string;
}

export interface ICharacterEngravings {
  Engravings: IEngravings[];
  Effects: IEngravingsEffect[];
}

export interface ICharacterCardsName {
  Slot: number;
  Name: string;
  Icon: string;
  AwakeCount: number;
  AwakeTotal: number;
  Grade: string;
  Tooltip: string;
}

export interface ICharacterCardsEffects {
  Index: number;
  CardSlots: number[];
  Items: ICharacterCardsEffectsItems[];
}
export interface ICharacterCardsEffectsItems {
  Name: string;
  Description: string;
}

export interface ICharacterCards {
  Cards: ICharacterCardsName[];
  Effects: ICharacterCardsEffects[];
}

export interface IDungeons {
  Name: string;
  Description: string;
  MinCharacterLevel: number;
  MinItemLevel: number;
  AreaName: string;
  StartTime: string;
  EndTime: string;
  Image: string;
  RewardItems: IDungeonsItem[];
}

export interface IDungeonsItem {
  Name: string;
  Icon: string;
  Grade: string;
  StartTimes: null;
}

export interface IRaidsItem {
  Name: string;
  Description: string;
  MinCharacterLevel: number;
  MinItemLevel: number;
  StartTime: string;
  EndTime: string;
  Image: string;
}
export interface IRewardItem {
  Name: string;
  Icon: string;
  Grade: string;
  StartTimes: null;
}

export interface IRaids {
  Raids: IRaidsItem[];
  RewardItems: IRewardItem[];
}
