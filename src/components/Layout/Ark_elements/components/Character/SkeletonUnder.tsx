import React from 'react';

interface ICharacters_Skeleton {
  title: string;
}

const Characters_Skeleton = ({ title }: ICharacters_Skeleton) => {
  return (
    <div className="flex gap-3 mb-2">
      <div className="w-[45px] h-[45px] rounded-sm bg-gray-100" />
      <div>
        <h1 className="font-semibold mb-[5px] text-gray-400">{title}</h1>
      </div>
    </div>
  );
};

export default Characters_Skeleton;
