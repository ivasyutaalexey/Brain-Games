import playGame from '../core';
import getRandomInt from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const maxRandom = 100;

const getMaximumNumber = (a, b) => (a > b ? a : b);

const getGCD = (a, b) => {
  if (a === b) {
    return a;
  }

  const maximum = getMaximumNumber(a, b);
  let divisor = 1;

  for (let i = 2; i < maximum; i += 1) {
    if (a % i === 0 && b % i === 0) {
      divisor = i;
    }
  }

  return divisor;
};

const getGameData = () => {
  const a = getRandomInt(1, maxRandom);
  const b = getRandomInt(1, maxRandom);

  const question = `${a} ${b}`;
  const answer = getGCD(a, b);

  return [question, String(answer)];
};

export default () => playGame(gameDescription, getGameData);
