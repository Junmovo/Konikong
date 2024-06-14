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
