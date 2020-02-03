import gameboard from '../src/gameboard';

test.todo('Places a single ship on the board', () => {
  const gameboard = gameboard();
  gameboard.placeShip(ship, 0);

  let expected = new Array(64).fill(null);
  expected[0] = 'A1';
  expect(gameboard.showBoard()).toStrictlyEqual(expected);
});
