import React, { ReactElement } from 'react';
import { IoMusicalNotes } from 'react-icons/io5';
import { MdOutlineShowChart } from 'react-icons/md';
import { FaRegFaceSmile } from 'react-icons/fa6';
import { ICategoryMenuProps } from '@/types/Music';

const CategoryMenu = ({ icon, label }: ICategoryMenuProps) => {
  return (
    <div className="flex w-full bg-neutral-700 hover:bg-neutral-800 cursor-pointer py-4 px-[20px] items-center gap-4 text-[20px] font-bold rounded-[5px] transition">
      {icon}
      {label}
    </div>
  );
};

const Category = () => {
  return (
    <div>
      <div className="flex gap-3 w-full flex-col lg:flex-row">
        <CategoryMenu icon={<IoMusicalNotes color="#aaaaaa" />} label={'최신 음악'} />
        <CategoryMenu icon={<MdOutlineShowChart color="#aaaaaa" />} label={'차트'} />
        <CategoryMenu icon={<FaRegFaceSmile color="#aaaaaa" />} label={'분위기 및 장르'} />
      </div>
    </div>
  );
};

export default Category;
