'use client';
import React from 'react';
import { FaShare } from 'react-icons/fa';
import { copyURL } from '@/components/Layout/LinkCopy';

const Message = () => {
  return (
    <div className="flex items-center" onClick={() => copyURL()}>
      <span className="min-w-[40px]">
        <FaShare size={16} />
      </span>
      공유
    </div>
  );
};

export default Message;
