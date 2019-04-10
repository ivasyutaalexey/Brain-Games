/* eslint no-eval: 0 */

import game from './core';
import { generateGamesData, getRandomInt } from './utils';

const GAME_RULES = 'What is the result of the expression?';
const MAX_RANDOM = 100;

let result = '';

const getQuestion = () => {
  const OPERATIONS = ['+', '-', '*'];
  const operation = OPERATIONS[getRandomInt(0, OPERATIONS.length)];
  const a = getRandomInt(1, MAX_RANDOM);
  const b = getRandomInt(1, MAX_RANDOM);
  const question = `${a} ${operation} ${b}`;
  result = eval(question);

  return question;
};

const getCorrectAnswer = () => result;

export default () => {
  const gamesData = generateGamesData(getQuestion, getCorrectAnswer);
  game(GAME_RULES, gamesData);
};
