import readlineSync from "readline-sync";

const getUserName = () => {
    return readlineSync.question('May I have your name?\n');
};

export { getUserName };