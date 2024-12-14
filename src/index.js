import readlineSync from 'readline-sync';

export const random = () => Math.round(Math.random() * 100);

export const getRandomNumber10 = () => (Math.floor(Math.random() * 10) + 1);

export const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

export const question = (expression, result, name) => {
  console.log('Question:', expression);
  const answer = readlineSync.question();
  console.log(`Your answer: ${answer}`);
  if (answer === result.toString()) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

export const game = (func, name) => {
  let count = 0;

  while (count < 3) {
    const result = func();
    if (question(result[0], result[1], name)) {
      count += 1;
    } else {
      break;
    }
  }

  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
