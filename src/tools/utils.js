import { gamesCount } from './core';

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max + 1) - min)) + min;

const generateGamesData = (getQuestion, getCorrectAnswer) => {
  const gameData = [];

  for (let i = 0; i < gamesCount; i += 1) {
    const map = new Map();
    const question = getQuestion();
    const correctAnswer = getCorrectAnswer(question);

    map.set('question', question);
    map.set('answer', correctAnswer);

    gameData.push(map);
  }

  return gameData;
};

export { getRandomInt, generateGamesData };
