import {game} from '../tools/core';
import { getRandomInt, generateGamesData } from '../tools/utils';

const gameRules = 'Answer "yes" if number even otherwise answer "no".';
const maxRandom = 100;

const isEven = number => number % 2 === 0;
const getQuestion = () => getRandomInt(1, maxRandom);
const getCorrectAnswer = question => (isEven(question) ? 'yes' : 'no');

export default () => {
  const gamesData = generateGamesData(getQuestion, getCorrectAnswer);
  game(gameRules, gamesData);
};
