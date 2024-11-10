import { func, greetings } from '../src/index.js'
import { expression } from "../src/games/calc.js";

const name = greetings('What is the result of the expression?');

func(expression, eval, name);
