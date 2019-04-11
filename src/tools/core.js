import readlineSync from 'readline-sync';

const gamesCount = 3;

const game = (rules, gamesData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < gamesData.length; i += 1) {
    const gameData = gamesData[i];
    const correctAnswer = gameData.get('answer');

    console.log(`Question: ${gameData.get('question')}`);
    const answer = readlineSync.question('Your answer: ');

    if (String(correctAnswer) === answer) {
      console.log('Correct!');

      if (i === gamesData.length - 1) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export { game, gamesCount };
