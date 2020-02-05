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
    const currentBoard = player.playerBoard; // Does this route correctly?
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

  const renderBoard = (player, name) => {
    DOM.renderPlayerBoard(player, name);
  };

  return { newGameComp, playerOne, playerTwo, isOver, renderBoard };
};

export { gameLoop as default };