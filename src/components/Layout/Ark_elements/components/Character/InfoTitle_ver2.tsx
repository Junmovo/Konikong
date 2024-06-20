import React from 'react';

interface IInfoBoxProps {
  title?: string;
  contents?: string | number;
  subcontents?: string;
  color: 'black' | 'gray';
}

const InfoBox_ver2: React.FC<IInfoBoxProps> = ({ title, contents, subcontents, color }) => {
  const colorVariants = {
    black: 'bg-gray-600',
    gray: 'bg-gray-400',
  };

  return (
    <div className="flex items-center ">
      <div
        className={` rounded-lg text-[12px] text-white  w-[45px] text-center px-[6px] mr-[5px] ${colorVariants[color]}`}
      >
        {title}
      </div>
      <span className="text-[12px]">{subcontents}</span>
      <div className="font-bold text-black dark:text-white text-[14px]  px-[2px]">{contents}</div>
    </div>
  );
};

export default InfoBox_ver2;
