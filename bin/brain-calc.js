#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import { game } from '../src/index.js';
// eslint-disable-next-line import/extensions
import { helloFunc } from '../src/cli.js';
// eslint-disable-next-line import/extensions
import { expression } from '../src/games/calc.js';

const name = helloFunc();

console.log('What is the result of the expression?');

game(expression, name);
