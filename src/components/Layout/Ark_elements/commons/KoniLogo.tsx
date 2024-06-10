import Image from 'next/image';
import React from 'react';

interface IKoniLogoProps {
  width: number;
  height: number;
}

const KoniLogo = ({ width, height }: IKoniLogoProps) => {
  return <Image src={'/images/Lostark/koni.png'} width={width} height={height} alt="Logo" className="object-cover" />;
};

export default KoniLogo;
