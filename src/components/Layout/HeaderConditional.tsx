'use client';
import { usePathname } from 'next/navigation';
import Header from './Header';

const ConditionalHeader = () => {
  const pathname = usePathname();
  const hiddenHeaderPatterns = [/^\/LostArk/];
  const isHiddenPath = hiddenHeaderPatterns.some((pattern) => pattern.test(pathname));

  return !isHiddenPath ? <Header /> : null;
};

export default ConditionalHeader;
