import React from 'react';

interface InfoBedgeProps {
  contents?: string | string[];
  grade: string;
}
const colorBedge: { [key: string]: string } = {
  level: ' bg-gray-100 border-gray-100 dark:bg-gray-800',
  plus: ' bg-slate-100 text-[#425ad5] dark:bg-[#b8c1f5] dark:text-[#182466]',
  minus: ' bg-red-50 text-[#dc6b6b] dark:bg-[#f8c7c7] dark:text-[#b33b3b]',
  default: 'border',
};

const InfoBedge: React.FC<InfoBedgeProps> = ({ contents, grade }) => {
  return (
    <div className={`text-[12px]  inline-block px-[8px] py-[1px] rounded-sm ${colorBedge[grade]} `}>{contents}</div>
  );
};

export default InfoBedge;
