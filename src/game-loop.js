import { playerFactory, computer } from './player';
import DOM from './DOM';

const gameLoop = function() {
  let playerOne = playerFactory();
  let playerTwo = computer();

  const newGameComp = function() {
    autoPlaceShips(playerOne);
    autoPlaceShips(playerTwo);
  };

  const autoPlaceShips = function(player) {
    const currentBoard = player.playerBoard;
    const shipsObj = currentBoard.showShips();
    currentBoard.placeShip(shipsObj.A, 0);
    currentBoard.placeShip(shipsObj.B, 3);
    currentBoard.placeShip(shipsObj.C, 7);
  };

  const isOver = () => {
    if (playerOne.playerBoard.areShipsSunk()) {
      // player two wins!
      return true;
    }
    if (playerTwo.playerBoard.areShipsSunk()) {
      // player one wins!
      return true;
    }
    return false;
  };

  const renderBoard = (player, name, opponentObj) => {
    DOM.renderPlayerBoard(player, name, opponentObj);
  };

  const renderSecretBoard = (player, name, opponentObj) => {
    DOM.renderSecretBoard(player, name, opponentObj);
  };

  const nextMove = (player, name, opponentObj) => {
    // connects to DOM's next move changes
    DOM.nextMove(player, name, opponentObj);
  };

  const gameStart = () => {
    // render boards
    // render message
    // start move
    let playerOne = playerFactory();
    nextMove(playerOne, 'player-one', playerTwo);
  };

  return {
    newGameComp,
    playerOne,
    playerTwo,
    isOver,
    renderBoard,
    renderSecretBoard,
    nextMove,
    gameStart
  };
};

export { gameLoop as default };
