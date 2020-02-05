import gameboard from './gameboard';

const playerFactory = function() {
  const playerBoard = gameboard();
  const move = (target, coord) => {
    target.playerBoard.recieveAttack(coord);
  };
  const showPlayerBoard = () => {
    return playerBoard.showBoard();
  };
  return { move, playerBoard };
};

const computer = function() {
  const playerBoard = gameboard();

  const move = (target, coord) => {
    target.playerBoard.recieveAttack(coord);
  };

  const getRandomInt = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const randomMove = target => {
    const randomCoord = getRandomInt(64);
    move(target, randomCoord);
  };

  return { randomMove, playerBoard };
};

export { playerFactory, computer };
