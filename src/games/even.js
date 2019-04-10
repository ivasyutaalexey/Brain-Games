import game from './core';

const isEven = number => number % 2 === 0;

export default () => {

  const checkAnswer = answer => (isEven(answer) ? 'yes' : 'no');

  const getRandomInt = () => Math.floor(Math.random() * (100 - 1)) + 1;

  game(
    'Answer "yes" if number even otherwise answer "no".',
    getRandomInt,
    checkAnswer,
  );
};
