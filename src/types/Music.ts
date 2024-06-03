export interface IitemsType {
  label: string;
  src: string;
}
export interface IconButtonProps {
  icon: React.ReactNode;
  onClickIcon?: () => void;
}
export interface IconButtonColorProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}
export interface ILogoProps {
  Open?: boolean;
  onClickClose?: () => void;
}

export interface Song {
  name: string;
  channelId: number;
  channel: string;
  src: string;
  imageSrc: string;
}
export interface TopSong extends Song {
  prevRank: number;
  rank: number;
}

export interface IPlaylist {
  id: number;
  owner: string;
  playlistName: string;
  songList: Song[];
}

export interface IPropsPlaylist {
  playlist: IPlaylist;
}

export interface Channel {
  id: number;
  subscribers: number;
  name: string;
  songList: Song[];
  playlistArray: Song[];
}

export interface ICategoryMenuProps {
  icon: React.ReactNode;
  label: string;
}
