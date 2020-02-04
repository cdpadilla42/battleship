import shipsFactory from './ships';

const gameboard = function() {
  let model = new Array(64).fill(null);

  const placeShip = function(ship, location) {
    const shipName = ship.showName();
    const shipLength = ship.showLength();
    let counter = 1;
    for (var i = location; i < shipLength; i++) {
      model[i] = `${shipName}${counter}`;
      counter++;
    }
  };

  const showBoard = () => model;

  // board represented by array, 8 x 8 in size
  // ship parts are placed on the board
  // represented by identifier and index of ship model (A1, A2, B1, B2, B3)
  // first corner is selected by player, then proceeding parts of array are filled in
  // hit represented with an X. Blank hit with a 'miss'

  return { placeShip, showBoard };
};

export { gameboard as default };
