#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import { game } from '../src/index.js';
// eslint-disable-next-line import/extensions
import { helloFunc } from '../src/cli.js';
// eslint-disable-next-line import/extensions
import { smallestDivisor } from '../src/games/gcd.js';

const name = helloFunc();

console.log('Find the greatest common divisor of given numbers.');

game(smallestDivisor, name);
