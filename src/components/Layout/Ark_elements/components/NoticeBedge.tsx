import React from 'react';

interface INoticeBedgeProps {
  type: string;
}

const NoticeBedge = ({ type }: INoticeBedgeProps) => {
  const colorVariants: { [key: string]: string } = {
    공지: 'bg-[#ffecec] text-[#f46963]',
    이벤트: 'bg-[#e8eaf7] text-[#425ad5]',
    점검: 'bg-[#ddd] text-[#1a1a1a]',
    상점: 'bg-[#e9fcea] text-[#46ad4e]',
  };

  return (
    <div className={`${colorVariants[type]} px-[6px] py-[2px] rounded-[5px] text-center w-[50px]  text-[14px]`}>
      {type}
    </div>
  );
};

export default NoticeBedge;
