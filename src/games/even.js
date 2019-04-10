import game from './core';
import { getRandomInt, generateGamesData } from './utils';

const GAME_RULES = 'Answer "yes" if number even otherwise answer "no".';
const MAX_RANDOM = 100;

const isEven = number => number % 2 === 0;
const getQuestion = () => getRandomInt(1, MAX_RANDOM);
const getCorrectAnswer = question => (isEven(question) ? 'yes' : 'no');

export default () => {
  const gamesData = generateGamesData(getQuestion, getCorrectAnswer);
  game(GAME_RULES, gamesData);
};
