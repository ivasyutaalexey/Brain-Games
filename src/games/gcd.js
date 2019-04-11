/* eslint no-plusplus: 0 */


import game from '../tools/core';
import { generateGamesData, getRandomInt } from '../tools/utils';

const gameRules = 'Find the greatest common divisor of given numbers.';
const maxRandom = 100;

let result = '';

const getMaximumNumber = (a, b) => (a > b ? a : b);

const getGCD = (a, b) => {
  if (a === b) {
    return a;
  }

  const maximum = getMaximumNumber(a, b);
  let divisor = 1;

  for (let i = 2; i < maximum; i++) {
    if (a % i === 0 && b % i === 0) {
      divisor = i;
    }
  }

  return divisor;
};

const getQuestion = () => {
  const a = getRandomInt(1, maxRandom);
  const b = getRandomInt(1, maxRandom);

  result = getGCD(a, b);

  return `${a} ${b}`;
};

const getCorrectAnswer = () => result;

export default () => {
  const gamesData = generateGamesData(getQuestion, getCorrectAnswer);
  game(gameRules, gamesData);
};
