import readlineSync from 'readline-sync';

const random = () => Math.round(Math.random() * 100);

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const numEnter = (name) => {
  const num1 = random();
  console.log(`Question: ${num1}`);
  const answer1 = readlineSync.question();
  console.log(`Your answer: ${answer1}`);
  if (answer1 === isEven(num1)) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${answer1}' is wrong answer ;(. Correct answer was '${isEven(num1)}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

export const checkEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;
  let res = true;

  res = numEnter(name);
  while (res === true && (i < 2)) {
    res = numEnter(name);
    i = i + 1;
  }
  if (res === true) {
    console.log(`Congratulations, ${name}!`);
  }
};

checkEven();
