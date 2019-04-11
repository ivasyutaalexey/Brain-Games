import game from '../tools/core';
import { getDivisors, getRandomInt } from '../tools/utils';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const maxRandom = 100;

const isPrime = (number) => {
  const divisors = getDivisors(number);
  return divisors.length === 2 && divisors[0] === 1 && divisors[1] === number;
};

const gamesData = () => {
  const question = getRandomInt(1, maxRandom);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => game(gameRules, gamesData);
