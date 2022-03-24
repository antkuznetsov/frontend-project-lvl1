import { getUserName } from './cli.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${getUserName()}`);
};
