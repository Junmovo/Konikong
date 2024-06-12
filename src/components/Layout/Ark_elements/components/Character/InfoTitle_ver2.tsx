import React from 'react';

interface IInfoBoxProps {
  title?: string;
  contents?: string | number;
  subcontents?: string;
}

const InfoBox_ver2: React.FC<IInfoBoxProps> = ({ title, contents, subcontents }) => {
  return (
    <div className="flex items-center mb-1">
      <div className=" bg-gray-600 rounded-lg text-[12px] text-white w-[45px] text-center px-[6px] mr-[5px]">
        {title}
      </div>
      <span className="text-[12px]">{subcontents}</span>
      <div className="font-bold text-black text-[14px]  px-[2px]">{contents}</div>
    </div>
  );
};

export default InfoBox_ver2;
