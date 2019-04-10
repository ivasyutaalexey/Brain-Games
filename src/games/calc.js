import game from './core';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const MAX_RANDOM = 100;

let a = 0;
let b = 0;
let result = '';
let operation;

const getQuestion = () => {
  const operations = ['subtraction', 'addition', 'multiplication'];
  let question;

  operation = operations[getRandomInt(0, operations.length - 1)];
  a = getRandomInt(1, MAX_RANDOM);
  b = getRandomInt(1, MAX_RANDOM);

  switch (operation) {
    case 'multiplication':
      question = `${a} * ${b}`;
      result = String(a * b);
      break;
    case 'addition':
      question = `${a} + ${b}`;
      result = String(a + b);
      break;
    case 'subtraction':
      question = `${a} - ${b}`;
      result = String(a - b);
      break;
    default:
      break;
  }

  return question;
};

const checkAnswer = () => result;

export default () => {
  game(
    'What is the result of the expression?',
    getQuestion,
    checkAnswer,
  );
};
