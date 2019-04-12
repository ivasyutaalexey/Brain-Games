import playGame from '../core';
import getRandomInt from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const maxRandom = 100;

const isPrime = (number) => {
  let divisorsCount = 0;
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      divisorsCount += 1;
    }
  }

  return divisorsCount === 2;
};

const getGameData = () => {
  const question = getRandomInt(1, maxRandom);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => playGame(gameDescription, getGameData);
