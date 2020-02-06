import gameLoop from './game-loop';

const currentGame = gameLoop();
currentGame.newGameComp();
currentGame.renderBoard(
  currentGame.playerOne,
  'player-one',
  currentGame.playerTwo
);

currentGame.renderBoard(
  currentGame.playerOne,
  'player-one',
  currentGame.playerTwo
);

currentGame.renderSecretBoard(
  currentGame.playerTwo,
  'player-two',
  currentGame.playerOne
);
