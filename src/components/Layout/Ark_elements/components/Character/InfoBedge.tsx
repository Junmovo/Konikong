import React from 'react';

interface InfoBedgeProps {
  contents?: string;
  grade: string;
}
const colorBedge: { [key: string]: string } = {
  level: ' bg-gray-100 ',
  plus: ' bg-gradient-to-br from-[#341a09] to-[#a24006] ',
  minus: ' bg-gradient-to-135deg from-[#362003] to-[#9e5f04] ',
  defalt: ' bg-gray-100',
};

const InfoBedge: React.FC<InfoBedgeProps> = ({ contents, grade }) => {
  return (
    <div className={`text-[12px]  inline-block px-[8px] py-[1px] rounded-sm ${colorBedge[grade]} `}>{contents}</div>
  );
};

export default InfoBedge;
