'use client';
import { FaCirclePlay } from 'react-icons/fa6';

interface IPlaylist {
  id: number;
  owner: string;
  playlistName: string;
  songList: () => void;
}

interface IPropsPlaylist {
  playlist: IPlaylist;
}
export default function PlayList({ playlist }: IPropsPlaylist) {
  const { id, owner, playlistName, songList } = playlist;

  const onclickPlay = () => {
    // todo Play music
  };

  return (
    <li
      onClick={onclickPlay}
      className="cursor-pointer flex items-center p-3 justify-between hover:bg-neutral-600 rounded-[7px] group relative"
    >
      <div className="w-full">
        <div className="text-[14px] group-hover:w-[85%]  text-ellipsis whitespace-nowrap overflow-hidden">
          {playlistName}
        </div>
        <div className="text-[12px] text-neutral-400">{owner}</div>
      </div>
      <div className="hidden group-hover:block p-[3px] absolute  right-[5px]">
        <FaCirclePlay size={24} />
      </div>
    </li>
  );
}
