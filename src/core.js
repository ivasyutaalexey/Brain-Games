import readlineSync from 'readline-sync';

const roundsCount = 3;

const game = (gameDescription, gameDataFunc) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = gameDataFunc();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (String(correctAnswer) === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default game;
