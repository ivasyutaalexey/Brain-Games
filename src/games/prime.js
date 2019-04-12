import game from '../core';
import getRandomInt from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const maxRandom = 100;

const getDivisors = (number) => {
  const divisors = [];

  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
};

const isPrime = (number) => {
  const divisors = getDivisors(number);
  return divisors.length === 2 && divisors[0] === 1 && divisors[1] === number;
};

const getGameData = () => {
  const question = getRandomInt(1, maxRandom);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => game(gameDescription, getGameData);
