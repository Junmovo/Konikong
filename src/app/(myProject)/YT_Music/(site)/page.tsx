import { sleep } from '@/lib/utils';
import Category from './components/Category';
import PagePadding from '@/components/Layout/elements/PagePadding';
import PlayListCarousel from '@/components/Layout/elements/PlayListCarousel';
import { dummyPlaylistArray, getPlaylistById } from '@/lib/dummyData';
import UserIcon from '@/components/Layout/elements/UserIcon';
import PlayerWrapper from '@/components/player/PlayerWrapper';

export default async function YTMusic() {
  const dummyPlaylistArray1 = [...dummyPlaylistArray];
  const dummyPlaylistArray2 = [await getPlaylistById(1)];
  const dummyPlaylistArray3 = [await getPlaylistById(2)];
  const dummyPlaylistArray4 = [await getPlaylistById(3)];

  // await sleep(2000);
  return (
    <PagePadding>
      <div className="mt-9">
        <Category />
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray1]}
          Thumbnail={
            <div>
              <UserIcon size={'lg'} />
            </div>
          }
          title="다시듣기"
          subTitle="도도"
        />
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray2]}
          Thumbnail={<div></div>}
          title="빠른 선곡"
          subTitle="이 노래로 뮤직 스테이션 시작하기"
        />
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray3]}
          Thumbnail={<div></div>}
          title="추천 뮤직비디오"
          subTitle="도도"
        />
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray4]}
          Thumbnail={<div></div>}
          title="다시듣기"
          subTitle="도도"
        />
      </div>
    </PagePadding>
  );
}
