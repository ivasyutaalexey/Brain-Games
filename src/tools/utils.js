/* eslint no-plusplus: 0 */

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const GAMES_COUNT = 3;

const generateGamesData = (getQuestion, getCorrectAnswer) => {
  const gameData = [];

  for (let i = 0; i < GAMES_COUNT; i++) {
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
