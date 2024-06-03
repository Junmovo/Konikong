'use client';

import useUIState from '@/hooks/useUIState';
import React, { useEffect } from 'react';

const HeaderBgChanger = ({ Imagesrc }: { Imagesrc: string }) => {
  const { setHeaderImageSrc } = useUIState();
  useEffect(() => {
    if (Imagesrc) setHeaderImageSrc(Imagesrc);
  }, [Imagesrc]);
  return <></>;
};

export default HeaderBgChanger;
