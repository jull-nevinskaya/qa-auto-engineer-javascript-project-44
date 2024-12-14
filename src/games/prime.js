// eslint-disable-next-line import/extensions,import/no-unresolved
import { random } from '../index.js';

export const isPrime = (x) => {
  if (x <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(x); i += 1) {
    if (x % i === 0) return false; // Найден делитель, число составное
  }
  return true; // Делителей нет, число простое
};

export const prime = () => {
  const num = random();
  const resArr = [];
  resArr.push(num);
  if (isPrime(num)) {
    resArr.push('yes');
    return resArr;
  }
  resArr.push('no');
  return resArr;
};
