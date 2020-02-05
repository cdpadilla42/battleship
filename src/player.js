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

  const moveList = [];

  const move = (target, coord) => {
    target.playerBoard.recieveAttack(coord);
  };

  const getRandomInt = function(max) {
    let selection = Math.floor(Math.random() * Math.floor(max));
    if (moveList.find(element => element === selection)) {
      return getRandomInt(max);
    }
    return selection;
  };

  const randomMove = target => {
    // add logic for knowing not to repeat thine self
    let randomCoord = getRandomInt(64);
    move(target, randomCoord);
    moveList.push(randomCoord);
  };

  return { randomMove, playerBoard };
};

export { playerFactory, computer };
