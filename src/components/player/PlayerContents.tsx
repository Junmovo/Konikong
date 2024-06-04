'use client';
import React, { useCallback, useEffect } from 'react';
import { Slider as PlayerSlider } from '@/components/ui/playerslider';
import { useAudio } from 'react-use';
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp, IoShuffle, IoVolumeHighOutline } from 'react-icons/io5';
import { AiFillCaretUp, AiOutlinePause } from 'react-icons/ai';
import usePlayerState from '@/hooks/usePlayerState';
import { ClipLoader } from 'react-spinners';
import { RiPlayFill } from 'react-icons/ri';
import Image from 'next/image';
import { RxLoop } from 'react-icons/rx';

const PlayerContents = () => {
  const { activeSong, prevPlayerQueue, nextPlayerQueue, playBack, playNext } = usePlayerState();
  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src || '',
    autoPlay: true,
  });
  console.log(activeSong?.imageSrc);
  const isLoading = activeSong?.src && state.buffered?.length === 0;

  const onClickPrevBtn = () => {
    if (state.playing && state.time > 10) {
      controls.seek(0);
      return;
    }
    if (prevPlayerQueue.length === 0) return;
    playBack();
  };
  const onClickStartBtn = () => {
    if (activeSong) {
      controls.play();
    } else {
      playNext();
    }
  };
  const onClickPauseBtn = () => {
    controls.pause();
  };
  const onClickNextBtn = useCallback(() => {
    if (nextPlayerQueue.length === 0) {
      controls.pause();
    } else {
      playNext();
    }
  }, [controls, playNext, nextPlayerQueue]);

  useEffect(() => {
    ref?.current?.addEventListener('ended', onClickNextBtn);
    return () => {
      ref?.current?.addEventListener('ended', onClickNextBtn);
    };
  }, [ref, onClickNextBtn]);

  return (
    <div className="h-full w-[calc(100% - 240px)] relative">
      <div className="absolute w-full top-[-16px]">
        <PlayerSlider
          max={state.duration}
          defaultValue={[0]}
          value={[state.time]}
          onValueChange={(value: number[]) => controls.seek(value[0])}
        />
      </div>
      {audio}
      <section className="flex flex-row items-center justify-between p-2 lg:p-6 w-[100%] h-full">
        <div className="flex flex-row h-full items-center gap-1 lg:gap-8">
          <IoPlaySkipBackSharp size={24} className="cursor-pointer" onClick={onClickPrevBtn} />
          {isLoading ? (
            <ClipLoader color="#fff" />
          ) : state.playing ? (
            <AiOutlinePause size={40} className="cursor-pointer" onClick={onClickPauseBtn} />
          ) : (
            <RiPlayFill size={40} className="cursor-pointer" onClick={onClickStartBtn} />
          )}
          <IoPlaySkipForwardSharp size={24} className="cursor-pointer" onClick={onClickNextBtn} />
        </div>
        <article className="flex">
          <div className="flex flex-row gap-4 items-center">
            <div className="relative w-[40px] h-[40px]">
              <Image fill className="object-cover" src={activeSong?.imageSrc || ''} alt="재생목록이미지" />
            </div>
            <div>
              <div>{activeSong?.name}</div>
              <div className="text-neutral-500 text-[14px]">{activeSong?.channel} 조회수 12.5만회 좋아요 1.7천개</div>
            </div>
          </div>
        </article>
        <div className="flex-row gap-4 flex">
          <div className="hidden lg:flex gap-4">
            <IoVolumeHighOutline size={24} className="cursor-pointer" />
            <IoShuffle size={24} className="cursor-pointer" />
            <RxLoop size={24} className="cursor-pointer" />
          </div>
          <div>
            <AiFillCaretUp size={24} className="cursor-pointer" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlayerContents;
