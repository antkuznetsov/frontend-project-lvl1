import { getAnswer, getUserName } from './cli.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let wins = 0;
  while (wins < 3) {
    const number = Math.floor(Math.random() * 100);
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = getAnswer();

    if (userAnswer === correctAnswer) {
      wins += 1;
      console.log('Correct!');
    } else {
      wins = 0;
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
