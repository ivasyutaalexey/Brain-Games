import game from '../tools/core';
import { getRandomInt } from '../tools/utils';

const gameRules = 'What is the result of the expression?';
const maxRandom = 100;

const gameData = () => {
  const operations = [
    ['+', (x, y) => x + y],
    ['-', (x, y) => x - y],
    ['*', (x, y) => x * y],
  ];

  const index = getRandomInt(0, operations.length - 1);
  const operation = operations[index];
  const a = getRandomInt(1, maxRandom);
  const b = getRandomInt(1, maxRandom);

  const question = `${a} ${operation[0]} ${b}`;
  const answer = operation[1](a, b);

  return [question, answer];
};

export default () => game(gameRules, gameData);
