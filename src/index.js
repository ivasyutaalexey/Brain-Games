import readlineSync from 'readline-sync';

const getRandomInt = () => Math.floor(Math.random() * (100 - 1)) + 1;
const GAMES_COUNT = 3;

export default () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  let gameCount = 0;
  let rightAnswer = true;

  while (gameCount < GAMES_COUNT && rightAnswer) {
    const numberForQuestion = getRandomInt();
    const correctAnswer = numberForQuestion % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${numberForQuestion}`);
    const answer = readlineSync.question('Your answer: ');

    if (correctAnswer === answer) {
      gameCount += 1;
      console.log('Correct!');
    } else {
      rightAnswer = false;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    }
  }

  if (gameCount === 3 && rightAnswer) {
    console.log(`Congratulations, ${name}!`);
  }
};
