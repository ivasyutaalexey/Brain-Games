import playGame from '../core';
import getRandomInt from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const maxRandom = 100;

const isEven = number => number % 2 === 0;

const getGameData = () => {
  const question = getRandomInt(1, maxRandom);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => playGame(gameDescription, getGameData);
