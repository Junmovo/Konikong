'use client';
import { useTheme } from 'next-themes';
import React from 'react';
import IconButton from '../Layout/elements/IconButton';
import { FaMoon } from 'react-icons/fa6';
import { IoSunnySharp } from 'react-icons/io5';

const DarkModeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const onClickMode = () => {
    if (resolvedTheme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  return (
    <IconButton
      icon={resolvedTheme === 'light' ? <FaMoon size={20} /> : <IoSunnySharp size={20} />}
      onClickIcon={onClickMode}
    />
  );
};

export default DarkModeButton;
