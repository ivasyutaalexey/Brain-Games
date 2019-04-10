/* eslint no-plusplus: 0 */

import game from './core';
import { generateGamesData, getRandomInt } from './utils';

const GAME_RULES = 'What number is missing in the progression?';
const MIN_STEP = 1;
const MAX_STEP = 10;
const PROGRESSION_ELEMENTS_COUNT = 10;

let result = '';

const generateProgression = () => {
  const step = getRandomInt(MIN_STEP, MAX_STEP);
  const progression = [];

  for (let i = 0; i < PROGRESSION_ELEMENTS_COUNT; i++) {
    if (i === 0) {
      progression.push(1);
    } else {
      const nextElement = progression[progression.length - 1] + step;
      progression.push(nextElement);
    }
  }

  return progression;
};

const getQuestion = () => {
  const progression = generateProgression();
  const position = getRandomInt(0, progression.length);

  result = progression[position];
  progression[position] = '..';

  return progression.join(' ');
};

const getCorrectAnswer = () => result;

export default () => {
  const gamesData = generateGamesData(getQuestion, getCorrectAnswer);
  game(GAME_RULES, gamesData);
};
