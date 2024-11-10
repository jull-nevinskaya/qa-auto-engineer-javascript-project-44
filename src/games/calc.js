import {question, random} from "../index.js";

export const randomOperation = () => {
  let operation = Math.floor(Math.random() * 3);
  switch (operation) {
    case 0:
      operation = '+';
      break;
    case 1:
      operation = '-';
      break;
    default:
      operation = '*';
  }
  return operation;
}

export const expression = () => {
  const num1 = random();
  const num2 = random();
  const operation = randomOperation();
  return `${num1} ${operation} ${num2}`;
}