// eslint-disable-next-line import/extensions
import { isEven, random } from '../index.js';

// eslint-disable-next-line import/prefer-default-export
export const even = () => {
  const number = random();
  const result = isEven(number);
  const resArr = [];
  resArr.push(number);
  resArr.push(result);
  return resArr;
};
