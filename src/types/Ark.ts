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
