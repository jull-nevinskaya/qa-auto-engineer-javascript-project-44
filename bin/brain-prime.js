// eslint-disable-next-line import/extensions
import { game } from '../src/index.js';
// eslint-disable-next-line import/extensions
import { helloFunc } from '../src/cli.js';
// eslint-disable-next-line import/extensions
import { prime } from '../src/games/prime.js';

const name = helloFunc();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

game(prime, name);
