import playGame from '../core';
import getRandomInt from '../utils';

const gameDescription = 'What number is missing in the progression?';
const minStep = 1;
const maxStep = 10;
const progressionLength = 10;

const generateProgression = () => {
  const progression = [];
  const progressionStep = getRandomInt(minStep, maxStep);
  const firstElement = 1;

  for (let i = 0; i < progressionLength; i += 1) {
    const nextElement = firstElement + progressionStep * i;
    progression.push(nextElement);
  }

  return progression;
};

const getGameData = () => {
  const progression = generateProgression();
  const positionOfHiddenElement = getRandomInt(0, progressionLength - 1);

  const answer = progression[positionOfHiddenElement];
  progression[positionOfHiddenElement] = '..';
  const question = progression.join(' ');

  return [question, String(answer)];
};

export default () => playGame(gameDescription, getGameData);
