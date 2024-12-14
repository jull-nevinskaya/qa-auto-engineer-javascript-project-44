// eslint-disable-next-line import/extensions
import { getRandomNumber10 } from '../index.js';

export const generateProgression = (num1, num2) => {
  const step = num2 - num1;
  const arrProgression = [num1, num2];

  for (let i = 2; i < 10; i += 1) {
    arrProgression.push(arrProgression[i - 1] + step);
  }
  return arrProgression;
}

export const finalProgression = () => {
  const num1 = getRandomNumber10();
  const num2 = getRandomNumber10();
  const progression = generateProgression(num1, num2);
  const numOfdot = getRandomNumber10();
  const answer = progression[numOfdot - 1];
  progression[numOfdot - 1] = '..';
  const resArr = [];
  resArr.push(progression);
  resArr.push(answer);
  return resArr;
}