import gameboard from '../src/gameboard';
import shipsFactory from '../src/ships';

describe('Ship Placement', () => {
  test('Places a single ship on the board', () => {
    const currentBoard = gameboard();
    const shipA = shipsFactory(1, 'A');
    currentBoard.placeShip(shipA, 0);

    let expected = new Array(64).fill(null);
    expected[0] = 'A1';
    expect(currentBoard.showBoard()).toStrictEqual(expected);
  });

  test('Places a ship of length 3 on the board', () => {
    const currentBoard = gameboard();
    const shipA = shipsFactory(3, 'A');
    currentBoard.placeShip(shipA, 0);

    let expected = new Array(64).fill(null);
    expected[0] = 'A1';
    expected[1] = 'A2';
    expected[2] = 'A3';
    expect(currentBoard.showBoard()).toStrictEqual(expected);
  });

  test('Places a ship of length 1 on the board NOT at the start', () => {
    const currentBoard = gameboard();
    const shipA = shipsFactory(1, 'A');
    currentBoard.placeShip(shipA, 4);

    let expected = new Array(64).fill(null);
    expected[4] = 'A1';
    expect(currentBoard.showBoard()).toStrictEqual(expected);
  });

  test('Places a ship of length 1 on the board NOT at the start', () => {
    const currentBoard = gameboard();
    const shipA = shipsFactory(1, 'A');
    currentBoard.placeShip(shipA, 10);

    let expected = new Array(64).fill(null);
    expected[10] = 'A1';
    expect(currentBoard.showBoard()).toStrictEqual(expected);
  });
});

describe('Board overflow', () => {
  test('board rejects a ship that overflows the board', () => {
    const currentBoard = gameboard();
    const shipA = shipsFactory(2, 'A');
    expect(currentBoard.placeShip(shipA, 7)).toStrictEqual(
      currentBoard.placementError()
    );

    // expect to return error and leave board unchanged
    let expected = new Array(64).fill(null);
    expect(currentBoard.showBoard()).toStrictEqual(expected);
  });

  test('board rejects a ship that overflows the board 2', () => {
    const currentBoard = gameboard();
    const shipA = shipsFactory(2, 'A');
    expect(currentBoard.placeShip(shipA, 15)).toStrictEqual(
      currentBoard.placementError()
    );

    // expect to return error and leave board unchanged
    let expected = new Array(64).fill(null);
    expect(currentBoard.showBoard()).toStrictEqual(expected);
  });

  test('board rejects a ship that overflows the board 3', () => {
    const currentBoard = gameboard();
    const shipA = shipsFactory(2, 'A');
    expect(currentBoard.placeShip(shipA, 23)).toStrictEqual(
      currentBoard.placementError()
    );

    // expect to return error and leave board unchanged
    let expected = new Array(64).fill(null);
    expect(currentBoard.showBoard()).toStrictEqual(expected);
  });

  test('board rejects a ship that overflows the board 4', () => {
    const currentBoard = gameboard();
    const shipA = shipsFactory(2, 'A');
    expect(currentBoard.placeShip(shipA, 31)).toStrictEqual(
      currentBoard.placementError()
    );

    // expect to return error and leave board unchanged
    let expected = new Array(64).fill(null);
    expect(currentBoard.showBoard()).toStrictEqual(expected);
  });

  test('board rejects a ship that overflows the board 5', () => {
    const currentBoard = gameboard();
    const shipA = shipsFactory(2, 'A');
    expect(currentBoard.placeShip(shipA, 39)).toStrictEqual(
      currentBoard.placementError()
    );

    // expect to return error and leave board unchanged
    let expected = new Array(64).fill(null);
    expect(currentBoard.showBoard()).toStrictEqual(expected);
  });

  test('board rejects a ship that overflows the board 6', () => {
    const currentBoard = gameboard();
    const shipA = shipsFactory(2, 'A');
    expect(currentBoard.placeShip(shipA, 47)).toStrictEqual(
      currentBoard.placementError()
    );

    // expect to return error and leave board unchanged
    let expected = new Array(64).fill(null);
    expect(currentBoard.showBoard()).toStrictEqual(expected);
  });

  test('board rejects a ship that overflows the board 7', () => {
    const currentBoard = gameboard();
    const shipA = shipsFactory(2, 'A');
    expect(currentBoard.placeShip(shipA, 55)).toStrictEqual(
      currentBoard.placementError()
    );

    // expect to return error and leave board unchanged
    let expected = new Array(64).fill(null);
    expect(currentBoard.showBoard()).toStrictEqual(expected);
  });

  test('board rejects a ship that overflows the board 8', () => {
    const currentBoard = gameboard();
    const shipA = shipsFactory(2, 'A');
    expect(currentBoard.placeShip(shipA, 63)).toStrictEqual(
      currentBoard.placementError()
    );

    // expect to return error and leave board unchanged
    let expected = new Array(64).fill(null);
    expect(currentBoard.showBoard()).toStrictEqual(expected);
  });
});

describe('recieveAttack', () => {
  const currentBoard = gameboard();
  const shipsObj = currentBoard.showShips();
  currentBoard.placeShip(shipsObj.A, 0);
  currentBoard.placeShip(shipsObj.B, 3);
  currentBoard.placeShip(shipsObj.C, 7);

  test('recieveAttack takes in coordinates and shows a miss', () => {
    currentBoard.recieveAttack(2);
    const arrFill = new Array(56).fill(null);
    const expected = [
      'A1',
      'A2',
      'miss',
      'B1',
      'B2',
      'B3',
      null,
      'C1',
      ...arrFill
    ];
    expect(currentBoard.showBoard()).toStrictEqual(expected);
  });

  test('recieveAttack takes in coordinates and shows a hit on board', () => {
    currentBoard.recieveAttack(0);
    const arrFill = new Array(56).fill(null);
    const expected = [
      'X',
      'A2',
      'miss',
      'B1',
      'B2',
      'B3',
      null,
      'C1',
      ...arrFill
    ];
    expect(currentBoard.showBoard()).toStrictEqual(expected);
  });

  test('recieveAttack rejects an already placed hit', () => {
    currentBoard.recieveAttack(0);
    currentBoard.recieveAttack(0);
    const arrFill = new Array(56).fill(null);
    const expected = [
      'X',
      'A2',
      'miss',
      'B1',
      'B2',
      'B3',
      null,
      'C1',
      ...arrFill
    ];
    expect(currentBoard.showBoard()).toStrictEqual(expected);
  });

  test('recieveAttack shows a hit, altering ships model array', () => {
    currentBoard.recieveAttack(0);
    const arrFill = new Array(56).fill(null);
    const expected = [
      'X',
      'A2',
      'miss',
      'B1',
      'B2',
      'B3',
      null,
      'C1',
      ...arrFill
    ];
    expect(shipsObj.A.showModel()).toStrictEqual(['x', null]);
  });

  test('recieveAttack shows a hit, altering ships model array 2', () => {
    currentBoard.recieveAttack(1);
    const arrFill = new Array(56).fill(null);
    const expected = [
      'A1',
      'X',
      'miss',
      'B1',
      'B2',
      'B3',
      null,
      'C1',
      ...arrFill
    ];
    expect(shipsObj.A.showModel()).toStrictEqual(['x', 'x']);
    // both spots marked due to previous test.
  });

  test('board shows if all ships are NOT sunk', () => {
    expect(currentBoard.areShipsSunk()).toStrictEqual(false);
  });

  test('board shows if all ships are sunk', () => {
    for (var i = 0; i < 8; i++) {
      currentBoard.recieveAttack(i);
    }
    expect(currentBoard.areShipsSunk()).toStrictEqual(true);
  });
});

describe('All Ship Sunk', () => {
  const currentBoard = gameboard();
  const shipsObj = currentBoard.showShips();
  currentBoard.placeShip(shipsObj.A, 0);
  currentBoard.placeShip(shipsObj.B, 3);
  currentBoard.placeShip(shipsObj.C, 7);

  test('board shows if all ships are sunk', () => {
    for (var i = 0; i < 8; i++) {
      currentBoard.recieveAttack(i);
    }
    expect(currentBoard.areShipsSunk()).toStrictEqual(true);
  });
});
