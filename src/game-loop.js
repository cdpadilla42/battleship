import { playerFactory, computer } from './player';
import DOM from './DOM';

const gameLoop = function() {
  let playerOne = playerFactory();
  let playerTwo = computer();

  const newGameComp = function() {
    autoPlaceShips(playerOne);
    autoPlaceShips(playerTwo);
    renderBoard(playerOne, 'player-one', playerTwo);
    renderSecretBoard(playerTwo, 'player-two', playerOne);
    // move start
    firstMove(playerOne, 'player-one', playerTwo);
  };

  const autoPlaceShips = function(player) {
    const currentBoard = player.playerBoard;
    const shipsObj = currentBoard.showShips();
    currentBoard.placeShip(shipsObj.A, 0);
    currentBoard.placeShip(shipsObj.B, 3);
    currentBoard.placeShip(shipsObj.C, 7);
  };

  const isOver = (firstPlayer, secondPlayer) => {
    if (firstPlayer.playerBoard.areShipsSunk()) {
      return firstPlayer; // returns winner
    }
    if (secondPlayer.playerBoard.areShipsSunk()) {
      return secondPlayer; // returns winner
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
    DOM.nextMovePlayer(player, name, opponentObj);
    // run computer move
    if (isOver(player, opponentObj)) {
      gameOver(isOver(player, opponentObj));
      return;
    }
    opponentObj.randomMove(player);
    // reinstate player move
    if (isOver()) {
      gameOver(isOver());
      return;
    }
    DOM.nextMoveComputer(opponentObj, 'player-two', player);
  };

  const firstMove = (player, name, opponentObj) => {
    DOM.nextMovePlayer(player, name, opponentObj);
    DOM.changeLowerMessage(`It's ${name}'s turn!`);
  };

  const gameOver = winner => {
    console.log('game over!');
    // ends game, calls to render appropriate views.
    // eventually ... ends clickability
  };

  const gameStart = () => {
    // render boards
    // render message
    // start move
    // TO DO - move this to computerStart, that function already exists.
    let playerOne = playerFactory();
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
