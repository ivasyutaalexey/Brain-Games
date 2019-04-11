import { game } from '../tools/core';
import { getRandomInt } from '../tools/utils';

const gameRules = 'What number is missing in the progression?';
const minStep = 1;
const maxStep = 10;
const progressionLength = 10;

const generateProgression = () => {
  const step = getRandomInt(minStep, maxStep);
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === 0) {
      progression.push(1);
    } else {
      const nextElement = progression[progression.length - 1] + step;
      progression.push(nextElement);
    }
  }

  return progression;
};

const gamesData = () => {
  const progression = generateProgression();
  const position = getRandomInt(0, progression.length - 1);

  const answer = progression[position];
  progression[position] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => game(gameRules, gamesData);
