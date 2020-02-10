import shipsFactory from './ships';

const gameboard = function() {
  let model = new Array(64).fill(null);
  let ships = {
    A: shipsFactory(2, 'A'),
    B: shipsFactory(3, 'B'),
    C: shipsFactory(1, 'C')
  };

  const areShipsSunk = () => {
    // for (var i = 0; i < model.length; i++) {
    //   if (model[i] === 'miss' || model[i] === 'X' || model[i] === null) {
    //     // nothing
    //   } else {
    //     return false;
    //   }
    // }
    // return true;

    for (const key in ships) {
      if (!ships[key].isSunk()) {
        return false;
      }
    }
    return true;
  };

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

    if (location + (shipLength - 1) >= edge) {
      return true;
    }
    return false;
  };

  const showShips = () => {
    return ships;
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

  const recieveAttack = coord => {
    if (model[coord] === null || model[coord] === 'miss') {
      model[coord] = 'miss';
    } else if (model[coord] === 'X') {
      return;
    } else {
      const shipName = model[coord][0];
      const hitLocation = model[coord][1];
      model[coord] = 'X';
      ships[shipName].hit(hitLocation - 1);
    }
  };

  const translateCoordinates = (a, b) => {
    return b - 1 + (a - 1) * 8;
  };

  return {
    placeShip,
    showBoard,
    placementError,
    recieveAttack,
    showShips,
    areShipsSunk
  };
};

export { gameboard as default };
