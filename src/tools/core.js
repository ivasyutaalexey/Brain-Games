import readlineSync from 'readline-sync';

const gamesCount = 3;

const game = (rules, gameDataFunc) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rules}\n`);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < gamesCount; i += 1) {
    const gameData = gameDataFunc();
    const correctAnswer = gameData.get('answer');
    const question = gameData.get('question');

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (String(correctAnswer) === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log(`Congratulations, ${name}!`);
  }
};

export { game, gamesCount };
