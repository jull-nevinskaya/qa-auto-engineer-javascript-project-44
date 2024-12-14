// eslint-disable-next-line import/extensions
import { random } from '../index.js';

// eslint-disable-next-line import/prefer-default-export
export const smallestDivisor = () => {
  const num1 = random();
  const num2 = random();

  let max = 0;
  let min = 0;
  if (num1 > num2) {
    max = num1;
    min = num2;
  } else if (num1 < num2) {
    max = num2;
    min = num1;
  } else return max; // числа равны

  if (max % min === 0) {
    return min;
  }
  let divider = min;
  while ((max % divider !== 0) || (min % divider !== 0)) {
    divider -= 1;
  }

  const resArr = [];
  resArr.push(`${num1} ${num2}`);
  resArr.push(divider);
  return resArr;
};
