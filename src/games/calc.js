// eslint-disable-next-line import/extensions
import { random } from '../index.js';

export const randomOperation = (num1, num2) => {
  let operation = Math.floor(Math.random() * 3);
  let result = 0;
  switch (operation) {
    case 0:
      operation = '+';
      result = num1 + num2;
      break;
    case 1:
      operation = '-';
      result = num1 - num2;
      break;
    default:
      operation = '*';
      result = num1 * num2;
  }
  const resArr = [];
  resArr.push(`${num1} ${operation} ${num2}`);
  resArr.push(result);
  return resArr;
};

export const expression = () => {
  const num1 = random();
  const num2 = random();
  const resArr = randomOperation(num1, num2);
  return resArr;
};
