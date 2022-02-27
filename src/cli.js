import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name?\n');

export default getUserName;
