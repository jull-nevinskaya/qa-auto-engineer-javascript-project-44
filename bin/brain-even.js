import { func, greetings, random } from '../src/index.js'
import { isEven } from "../src/games/isEven.js";

const name = greetings('Answer "yes" if the number is even, otherwise answer "no".');

func(random, isEven, name);