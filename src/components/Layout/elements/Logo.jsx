'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import IconButton from './IconButton';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Logo() {
  const { push } = useRouter();
  const onClickMain = () => {
    push('/YT_Music');
  };
  const onClickMenu = (url) => () => {
    push(url);
  };

  return (
    <section className="flex items-center gap-3">
      <IconButton icon={<RxHamburgerMenu size={24} />} onClickIcon={onClickMenu('/YT_Music')} />
      <div className="cursor-pointer" onClick={onClickMain}>
        <Image src={'/main-logo.svg'} width={100} height={30} alt="logo" />
      </div>
    </section>
  );
}
