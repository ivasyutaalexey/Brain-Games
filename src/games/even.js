import { game } from '../tools/core';
import { getRandomInt } from '../tools/utils';

const gameRules = 'Answer "yes" if number even otherwise answer "no".';
const maxRandom = 100;

const isEven = number => number % 2 === 0;

const gamesData = () => {
  const question = getRandomInt(1, maxRandom);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => game(gameRules, gamesData);
