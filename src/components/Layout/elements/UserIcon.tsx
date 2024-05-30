import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

import React from 'react';
type UserIconProps = {
  size?: string;
};

const UserIcon: React.FC<UserIconProps> = ({ size }) => {
  return (
    <Avatar className={cn(size === 'lg' ? 'w-[56px] h-[56px]' : 'w-[40px] h-[40px]')}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserIcon;
