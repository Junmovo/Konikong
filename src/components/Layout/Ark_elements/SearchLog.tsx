import useLostArkSearchStore from '@/stores/useLostArkSearchStore';
import Link from 'next/link';
import React from 'react';
import IconButton from '../elements/IconButton';
import { CiStar } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
const SearchLog = () => {
  const { searchValue, addSearchValue } = useLostArkSearchStore();

  return (
    <div>
      <div className="bg-white rounded-[3px]">
        <ul>
          {searchValue.map((value, idx) => (
            <li
              key={idx}
              className=" border-neutral-300 border-b-[1px]  last:border-none first:border-t-none hover:bg-gray-50"
            >
              <Link
                href={`/LostArk/character/${value}`}
                className="flex items-center justify-between p-2 px-[20px] w-full "
              >
                <div key={idx} className="">
                  {value}
                </div>
                <div className="flex">
                  <IconButton icon={<CiStar />} />
                  <IconButton icon={<IoMdClose />} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchLog;
