import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomArrElements<E>(arr: E[]) {
  const len = arr?.length;
  return arr[getRandomInt(0, len - 1)];
}

export default function chunkArray(arr: any[], chunkSize: number) {
  const resultArray = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    resultArray.push(chunk);
  }

  return resultArray;
}

export function RandomColorHexcode() {
  const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let result: number | string = '#';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexNumbers.length);
    result += hexNumbers[randomIndex];
  }

  return result;
}

export function getToday() {
  var today = new Date();

  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);

  return year + '-' + month + '-' + day;
}
export function getTime() {
  var today = new Date();

  var hours = ('0' + today.getHours()).slice(-2);
  var minutes = ('0' + today.getMinutes()).slice(-2);
  var seconds = ('0' + today.getSeconds()).slice(-2);

  return hours + ':' + minutes + ':' + seconds;
}

export const Qualitycolor = (v: number) => {
  if (v === 100) {
    return 'bg-[#f9ae00]';
  } else if (v >= 90) {
    return 'bg-[#8045dd]';
  } else if (v >= 70) {
    return 'bg-[#2AB1F6]';
  } else if (v >= 60) {
    return 'bg-[#A0E71C]';
  } else if (v >= 30) {
    return 'bg-[#FFE81D]';
  } else {
    return 'hidden';
  }
};

export const colorGrade = (G: string) => {
  if (G === '고대') {
    return ' bg-gradient-to-br from-[#3d3325] to-[#dcc999] ';
  } else if (G === '유물') {
    return ' bg-gradient-to-br from-[#341a09] to-[#a24006] ';
  } else if (G === '전설') {
    return ' bg-gradient-to-br from-[#362003] to-[#9e5f04] ';
  } else if (G === '영웅') {
    return ' bg-gradient-to-br from-[#261331] to-[#480d5d] ';
  } else if (G === '희귀') {
    return ' bg-gradient-to-br from-[#111f2c] to-[#113d5d] ';
  } else {
    return 'bg-gradient-to-br from-[#0c2e2c] to-[#2faba8]';
  }
};

export const ImgClass = (Class: string) => {
  if (Class === '워로드') {
    return '/images/Lostark/Class/warload.png';
  } else if (Class === '버서커') {
    return '/images/Lostark/Class/berserker.png';
  } else if (Class === '홀리나이트') {
    return '/images/Lostark/Class/holyknight.png';
  } else if (Class === '디스트로이어') {
    return '/images/Lostark/Class/destroyer.png';
  } else if (Class === '슬레이어') {
    return '/images/Lostark/Class/slayer.png';
  } else if (Class === '배틀마스터') {
    return '/images/Lostark/Class/battlemaster.png';
  } else if (Class === '인파이터') {
    return '/images/Lostark/Class/infighter.png';
  } else if (Class === '기공사') {
    return '/images/Lostark/Class/soulMaster.png';
  } else if (Class === '창술사') {
    return '/images/Lostark/Class/LanceMaster.png';
  } else if (Class === '데빌헌터') {
    return '/images/Lostark/Class/devil.png';
  } else if (Class === '호크아이') {
    return '/images/Lostark/Class/hawkeye.png';
  } else if (Class === '스카우터') {
    return '/images/Lostark/Class/scouter.png';
  } else if (Class === '블래스터') {
    return '/images/Lostark/Class/blaster.png';
  } else if (Class === '건슬링어') {
    return '/images/Lostark/Class/gunsel.png';
  } else if (Class === '데모닉') {
    return '/images/Lostark/Class/demonic.png';
  } else if (Class === '블레이드') {
    return '/images/Lostark/Class/blade.png';
  } else if (Class === '리퍼') {
    return '/images/Lostark/Class/repper.png';
  } else if (Class === '소울이터') {
    return '/images/Lostark/Class/soul.png';
  } else if (Class === '스트라이커') {
    return '/images/Lostark/Class/striker.png';
  } else if (Class === '바드') {
    return '/images/Lostark/Class/bard.png';
  } else if (Class === '서머너') {
    return '/images/Lostark/Class/summoner.png';
  } else if (Class === '아르카나') {
    return '/images/Lostark/Class/arcana.png';
  } else if (Class === '소서리스') {
    return '/images/Lostark/Class/sorceress.png';
  } else if (Class === '브레이커') {
    return '/images/Lostark/Class/breaker.png';
  } else if (Class === '기상술사') {
    return '/images/Lostark/Class/aeromancer.png';
  } else if (Class === '도화가') {
    return '/images/Lostark/Class/artist.png';
  } else {
    return '/images/Lostark/Class/default.png';
  }
};
