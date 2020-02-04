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
