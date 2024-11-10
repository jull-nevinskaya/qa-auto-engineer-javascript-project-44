import readlineSync from "readline-sync";
import { question, func } from "../index.js";

export const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');