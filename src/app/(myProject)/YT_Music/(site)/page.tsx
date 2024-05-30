import { sleep } from '@/lib/utils';
import Category from './components/Category';
import PagePadding from '@/components/Layout/elements/PagePadding';
import PlayListCarousel from '@/components/Layout/elements/PlayListCarousel';
import { dummyPlaylistArray } from '@/lib/dummyData';
import UserIcon from '@/components/Layout/elements/UserIcon';

export default async function YTMusic() {
  const dummyPlaylistArray1 = [...dummyPlaylistArray];

  // await sleep(2000);
  return (
    <PagePadding>
      <div className="mt-9">
        <Category />
        {/* <div className="bg-slate-600 h-[100vh]">asd</div> */}
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
      </div>
    </PagePadding>
  );
}
