/* eslint no-eval: 0 */

import { game } from '../tools/core';
import { generateGamesData, getRandomInt } from '../tools/utils';

const gameRules = 'What is the result of the expression?';
const maxRandom = 100;

let result = '';

const getQuestion = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomInt(0, operations.length)];
  const a = getRandomInt(1, maxRandom);
  const b = getRandomInt(1, maxRandom);
  const question = `${a} ${operation} ${b}`;
  result = eval(question);

  return question;
};

const getCorrectAnswer = () => result;

export default () => {
  const gamesData = generateGamesData(getQuestion, getCorrectAnswer);
  game(gameRules, gamesData);
};
