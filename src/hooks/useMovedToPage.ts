import { useRouter } from 'next/navigation';

interface IUseMoveToPageReturn {
  onClickMovetoPage: (PATH: string) => () => void;
}

export const useMoveToPage = (): IUseMoveToPageReturn => {
  const router = useRouter();

  const onClickMovetoPage = (Path: string) => () => {
    void router.push(Path);
  };

  return {
    onClickMovetoPage,
  };
};
