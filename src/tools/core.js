import readlineSync from 'readline-sync';

const roundsCount = 3;

const game = (rules, gameDataFunc) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const gameData = gameDataFunc();
    const question = gameData[0];
    const correctAnswer = gameData[1];

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
