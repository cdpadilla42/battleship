import shipsFactory from './ships';

const gameboard = function() {
  model = new Array(64).fill(null);

  // board represented by array, 8 x 8 in size
  // ship parts are placed on the board
  // represented by identifier and index of ship model (A1, A2, B1, B2, B3)
  // first corner is selected by player, then proceeding parts of array are filled in
  // hit represented with an X. Blank hit with a 'miss'

  return {};
};

export { gameboard as default };
