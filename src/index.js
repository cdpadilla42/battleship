import gameLoop from './game-loop';

function handleShipPlacement(e) {
  e.preventDefault();
  gameLoop().handleCoordSubmission();
}

const currentGame = gameLoop();
currentGame.setUpGame();
currentGame.gameStart();
currentGame.newGameComp();
console.log(currentGame.areShipsPlaced());

// NEXT TODO: Implement placing ships from this function

// HOW TO DO IT: Create a NEXT SHIP MODULE that will handle the placing of ships. ORRR, write it in the actual player modules
