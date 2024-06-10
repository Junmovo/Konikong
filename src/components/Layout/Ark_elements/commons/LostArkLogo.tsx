import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import KoniLogo from './KoniLogo';
import LoSearch from './LoSearch';

const LostArkLogo = () => {
  return (
    <div>
      <Link href={'/LostArk'} className="flex w-[175px]">
        <KoniLogo width={50} height={62} />
        <LoSearch width={160} height={62} />
      </Link>
    </div>
  );
};

export default LostArkLogo;
