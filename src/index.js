import gameLoop from './game-loop';

const currentGame = gameLoop();
currentGame.renderBoard(currentGame.playerOne, 'player-one');
