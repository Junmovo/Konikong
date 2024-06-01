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

export default function cunkArray(arr: any[], chunkSize: number) {
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
