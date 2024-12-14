// eslint-disable-next-line import/extensions
import { even } from '../src/games/even.js';
// eslint-disable-next-line import/extensions
import { helloFunc } from '../src/cli.js';
// eslint-disable-next-line import/extensions
import { game } from '../src/index.js';

const name = helloFunc();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

game(even, name);
