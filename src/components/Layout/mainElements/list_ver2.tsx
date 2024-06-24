// import Listimg from '@/';

import Image from 'next/image';
import ListCard from './components/listCard';
import { ListChart } from '@/lib/CardListData';

export default function List2(): JSX.Element {
  return (
    <div className="w-[1300px] m-auto pb-[50px]">
      <div>
        <h1 className="text-[64px] font-[400] font-montserrat mb-[30px]">Web Project</h1>
      </div>
      <div className="grid grid-cols-3 gap-[20px]">
        {ListChart.map((items, idx) => (
          <ListCard
            key={idx}
            Title={items.Title}
            SubTitle={items.SubTitle}
            ImageSrc={items.ImageSrc}
            Page={items.Page}
            Tag={items.Tag}
          />
        ))}
      </div>
    </div>
  );
}
