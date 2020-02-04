import shipsFactory from './ships';

const gameboard = function() {
  let model = new Array(64).fill(null);

  const isShipOverflowing = (shipLength, location) => {
    let edge;
    if (location < 8) {
      edge = 8;
    } else if (location >= 8 && location < 16) {
      edge = 16;
    } else if (location >= 16 && location < 24) {
      edge = 24;
    } else if (location >= 24 && location < 32) {
      edge = 32;
    } else if (location >= 32 && location < 40) {
      edge = 40;
    } else if (location >= 40 && location < 48) {
      edge = 48;
    } else if (location >= 48 && location < 56) {
      edge = 56;
    } else {
      edge = 64;
    }

    if (location + shipLength >= edge) {
      return true;
    }
    return false;
  };

  const placeShip = function(ship, location) {
    const shipName = ship.showName();
    const shipLength = ship.showLength();
    if (isShipOverflowing(shipLength, location)) {
      return placementError();
    }
    let counter = 1;
    for (var i = location; i < shipLength + location; i++) {
      model[i] = `${shipName}${counter}`;
      counter++;
    }
  };

  const placementError = () => {
    return new Error('Could not place ships');
  };

  const showBoard = () => model;

  // board represented by array, 8 x 8 in size
  // ship parts are placed on the board
  // represented by identifier and index of ship model (A1, A2, B1, B2, B3)
  // first corner is selected by player, then proceeding parts of array are filled in
  // hit represented with an X. Blank hit with a 'miss'

  return { placeShip, showBoard, placementError };
};

export { gameboard as default };