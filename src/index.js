import gameLoop from './game-loop';

const currentGame = gameLoop();
currentGame.newGameComp();
currentGame.renderBoard(currentGame.playerOne, 'player-one');
