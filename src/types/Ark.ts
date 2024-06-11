import { MouseEvent } from 'react';

export interface ICharterInfo {
  ServerName: string;
  CharacterName: string;
  CharacterLevel: number;
  CharacterClassName: string;
  ItemAvgLevel: string;
  ItemMaxLevel: string;
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
