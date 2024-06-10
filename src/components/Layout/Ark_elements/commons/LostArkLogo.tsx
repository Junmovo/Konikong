import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LostArkLogo = () => {
  return (
    <div>
      <Link href={'/LostArk'} className="flex w-[175px]">
        <Image src={'/images/Lostark/koni.png'} width={50} height={62} alt="Logo" className="object-cover" />
        <div className="relative flex items-center ml-[4px]">
          <Image src={'/images/Lostark/Losearch.webp'} width={160} height={62} alt="Logo" className="object-contain" />
        </div>
      </Link>
    </div>
  );
};

export default LostArkLogo;
