import gameboard from '../src/gameboard';
import shipsFactory from '../src/ships';

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

// Ships conform to grid layout - 8 x 8
// Breaking points: 8, 16, 24, 32, 40, 48, 56, 64

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
