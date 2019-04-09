import readlineSync from 'readline-sync';

const GAMES_COUNT = 3;
let name = '';

export default (rules, getQuestion, getCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules}\n`);

  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  let currentGamesCount = 0;
  let answeredRight = true;

  while (currentGamesCount < GAMES_COUNT && answeredRight) {
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(question);

    if (correctAnswer === answer) {
      currentGamesCount += 1;
      console.log('Correct!');
    } else {
      answeredRight = false;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
    }
  }

  if (currentGamesCount === GAMES_COUNT && answeredRight) {
    console.log(`Congratulations, ${name}!`);
  }
};
