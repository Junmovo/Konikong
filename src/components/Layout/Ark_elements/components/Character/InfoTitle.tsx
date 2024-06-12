import React from 'react';

interface IInfoBoxProps {
  title?: string;
  contents?: string | number;
  subcontents?: string;
}

const InfoBox: React.FC<IInfoBoxProps> = ({ title, contents, subcontents }) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="text-gray-500">{title}</div>
      <div className="font-bold text-black text-[24px]">
        <span className="text-[12px] ">{subcontents}</span>
        {contents}
      </div>
    </div>
  );
};

export default InfoBox;
