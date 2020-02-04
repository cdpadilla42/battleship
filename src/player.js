import gameboard from './gameboard';

const playerFactory = function() {
  const playerBoard = gameboard();
  const move = coord => {};
  const showPlayerBoard = () => {
    return playerBoard.showBoard();
  };
  return { showPlayerBoard, move };
};

const computer = function() {
  const playerBoard = gameboard();
};

export { playerFactory as default };
