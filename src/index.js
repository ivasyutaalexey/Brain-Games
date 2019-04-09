import readlineSync from 'readline-sync';


const getRandomInt = () => Math.floor(Math.random() * (100 - 1)) + 1;

export default () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  let gameCount = 0;
  let rightAnswer = true;

  while (gameCount < 3 && rightAnswer) {
    const digit = getRandomInt();
    const correctAnswer = digit % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${digit}`);
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
