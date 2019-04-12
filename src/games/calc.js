import game from '../core';
import getRandomInt from '../utils';

const gameDescription = 'What is the result of the expression?';
const maxRandom = 100;

const operations = [
  ['+', (x, y) => x + y],
  ['-', (x, y) => x - y],
  ['*', (x, y) => x * y],
];

const getGameData = () => {
  const index = getRandomInt(0, operations.length - 1);
  const [operationLiteral, operationFunc] = operations[index];

  const a = getRandomInt(1, maxRandom);
  const b = getRandomInt(1, maxRandom);

  const question = `${a} ${operationLiteral} ${b}`;
  const answer = operationFunc(a, b);

  return [question, answer];
};

export default () => game(gameDescription, getGameData);
