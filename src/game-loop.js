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
    DOM.hideTopBanner();
    // move start
    firstMove(playerOne, 'player-one', playerTwo);
  };

  const handleShipPlacement = coord => {
    console.log('placing ship', nextShip);
    let shipsObj = playerOne.playerBoard.showShips();
    playerOne.playerBoard.placeShip(shipsObj[nextShip], coord);

    if (nextShip === 'C') {
      console.log('game start!');
    }
    if (nextShip === 'B') {
      nextShip = 'C';
    }
    if (nextShip === 'A') {
      nextShip = 'B';
    }
  };

  const autoPlaceShips = function(player) {
    const currentBoard = player.playerBoard;
    const shipsObj = currentBoard.showShips();
    currentBoard.placeShip(shipsObj.A, 0);
    currentBoard.placeShip(shipsObj.B, 3);
    currentBoard.placeShip(shipsObj.C, 7);
  };

  const areShipsPlaced = () => {
    const board = playerOne.playerBoard.showBoard();
    for (var i = 0; i < board.length; i++) {
      if (board[i] === null) {
        continue;
      }
      if (board[i][0] === 'C') {
        return true;
      }
    }
    return false;
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
    DOM.nextMoveComputer(opponentObj, 'player-two', player);
    if (isOver(player, opponentObj)) {
      gameOver(isOver());
      return;
    }
  };

  const firstMove = (player, name, opponentObj) => {
    DOM.nextMovePlayer(player, name, opponentObj);
    DOM.changeLowerMessage(`It's your turn!`);
  };

  const gameOver = winner => {
    console.log('game over!');
    // ends game, calls to render appropriate views.
    // THIS IS THE NEXT STEP!!!
    // eventually ... ends clickability
    DOM.showTopBanner();
    DOM.changeBannerMessage('Game Over!');
    DOM.changeLowerMessage('We have a winner!');
    DOM.toggleListeners();
  };

  const gameStart = () => {
    DOM.addNewRoundBttn();
  };

  const nextGame = () => {
    playerOne = playerFactory();
    playerTwo = computer();
    newGameComp();
  };

  const handleCoordSubmission = () => {
    handleCoordSubmission();
  };

  const setUpGame = () => {
    DOM.addListenerShipPlacement();
  };

  return {
    newGameComp,
    playerOne,
    playerTwo,
    isOver,
    renderBoard,
    renderSecretBoard,
    nextMove,
    gameStart,
    nextGame,
    areShipsPlaced,
    setUpGame,
    handleCoordSubmission,
    handleShipPlacement
  };
};

export { gameLoop as default };
