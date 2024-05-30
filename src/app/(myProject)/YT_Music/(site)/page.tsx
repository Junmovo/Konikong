import { sleep } from '@/lib/utils';
import Category from './components/Category';

export default async function YTMusic() {
  // await sleep(2000);
  return (
    <div>
      <div className="mt-9">유튜브뮤직페이지입니다.</div>
      <div className="mt-9">
        <Category />
      </div>
      <div className="bg-slate-600 h-[100vh]">asd</div>
    </div>
  );
}
