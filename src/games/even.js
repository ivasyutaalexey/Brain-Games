import game from './core';

export default () => {
  const isEven = number => number % 2 === 0;

  const checkAnswer = answer => (isEven(answer) ? 'yes' : 'no');

  const getRandomInt = () => Math.floor(Math.random() * (100 - 1)) + 1;

  game(
    'Answer "yes" if number even otherwise answer "no".',
    getRandomInt,
    checkAnswer
  );
};
