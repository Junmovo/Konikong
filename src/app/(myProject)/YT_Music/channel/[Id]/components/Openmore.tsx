'use client';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

const Openmore = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const onClickActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="mb-4">
      <div className={cn(' text-neutral-400 mb-1 w-[80%]  line-clamp-2', isActive && 'line-clamp-none')}>
        조성우는 예명 코드 쿤스트로 더 잘 알려진 대한민국의 음악 프로듀서이다. 2015년에 2번째 정규 음반 Crumple을 발매한
        후 하이그라운드와 계약했다. 2017년에 3번째 정규 음반 Muggles` Mansion을 발매했다. 2018년에 AOMG와 계약한 후{' '}
        {`<쇼미더머니777'>`}에 심사위원 및 프로듀서로 출연했다. 2020년에 4번째 정규 음반 People을 발매했고, 2021년에
        한국 힙합 어워즈 올해의 프로듀서를 수상했다. 2023년에 5번째 정규 음반 Remember Archive를 발매했다.
        <br />
        <br /> 출처: Wikipedia(https://ko.wikipedia.org/wiki/코드_쿤스트), 라이선스: Creative Commons Attribution
        CC-BY-SA 3.0(http://creativecommons.org/licenses/by-sa/3.0/legalcode)
      </div>
      <div className="cursor-pointer inline-block p-1" onClick={onClickActive}>
        {isActive ? '간략히 보기' : '더보기'}
      </div>
    </div>
  );
};

export default Openmore;
