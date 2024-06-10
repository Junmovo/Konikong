import React from 'react';
import KoniLogo from './KoniLogo';

interface INoneContentsProps {
  contents: string;
}

const NoneContents = ({ contents }: INoneContentsProps) => {
  return (
    <div className="flex items-center w-full justify-center min-h-[400px] flex-col ">
      <KoniLogo width={100} height={100} />
      <div className="text-[14px] text-gray-500 font-semibold">{contents}</div>
    </div>
  );
};

export default NoneContents;
