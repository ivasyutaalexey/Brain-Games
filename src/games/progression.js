import game from '../core';
import { getRandomInt } from '../utils';

const gameDescription = 'What number is missing in the progression?';
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

const getGameData = () => {
  const progression = generateProgression();
  const positionOfHiddenElement = getRandomInt(0, progression.length - 1);

  const answer = progression[positionOfHiddenElement];
  progression[positionOfHiddenElement] = '..';
  const question = progression.join(' ');

  return [question, answer];
};

export default () => game(gameDescription, getGameData);
