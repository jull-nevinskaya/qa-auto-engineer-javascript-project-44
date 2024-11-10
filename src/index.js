import readlineSync from "readline-sync";


export const random = () => Math.round(Math.random() * 100);

export const greetings = (question) => {
  console.log('Welcome to the Brain Games!');
  console.log('May I have your name?');
  const name = readlineSync.question();
  console.log(`Hello, ${name}!`);
  console.log(question);
  return name;
};

export const question = (expression, result, name) => {
  let exp = expression();
  console.log('Question: ', exp);
  const answer = readlineSync.question();
  console.log(`Your answer: ${answer}`);
  if (Number(answer) === result(exp)) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result(exp)}'`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

export const func = (generation, check, name) => {
  let i = 0;
  let res = true;

  res = question(generation, check, name);
  while (res === true && (i < 2)) {
    res = question(generation, check);
    i = i + 1;
  }
  if (res === true) {
    console.log(`Congratulations, ${name}!`);
  }
}