'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function LogoImg() {
  const { push } = useRouter();
  const onClickMenu = (url: string) => () => {
    push(url);
  };

  return (
    <div className="cursor-pointer" onClick={onClickMenu('/YT_Music')}>
      <Image src={'/main-logo.svg'} width={100} height={30} alt="logo" />
    </div>
  );
}
