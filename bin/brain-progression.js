// eslint-disable-next-line import/extensions
import { game } from '../src/index.js';
// eslint-disable-next-line import/extensions
import { helloFunc } from '../src/cli.js';
// eslint-disable-next-line import/extensions
import { finalProgression } from '../src/games/progression.js';

const name = helloFunc();

console.log('What number is missing in the progression?');

game(finalProgression, name);
