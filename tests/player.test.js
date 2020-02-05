import { playerFactory, computer } from '../src/player';

describe('Player moves', () => {
  const playerOne = playerFactory();
  const playerTwo = playerFactory();

  const currentBoard = playerTwo.playerBoard;
  const shipsObj = currentBoard.showShips();
  currentBoard.placeShip(shipsObj.A, 0);
  currentBoard.placeShip(shipsObj.B, 3);
  currentBoard.placeShip(shipsObj.C, 7);

  test('move initiates an attack on other player board', () => {
    playerOne.move(playerTwo, 0);
    const arrFill = new Array(56).fill(null);
    const expected = [
      'X',
      'A2',
      null,
      'B1',
      'B2',
      'B3',
      null,
      'C1',
      ...arrFill
    ];
    expect(playerTwo.playerBoard.showBoard()).toStrictEqual(expected);
  });

  test('move initiates an attack on other player board 2', () => {
    playerOne.move(playerTwo, 2);
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
    expect(playerTwo.playerBoard.showBoard()).toStrictEqual(expected);
  });
});

describe('Computer moves', () => {
  const playerOne = playerFactory();
  const computerPlayer = computer();

  const currentBoard = playerOne.playerBoard;
  const shipsObj = currentBoard.showShips();
  currentBoard.placeShip(shipsObj.A, 0);
  currentBoard.placeShip(shipsObj.B, 3);
  currentBoard.placeShip(shipsObj.C, 7);

  test('computer move randomly places move on other board', () => {
    computerPlayer.randomMove(playerOne);
    const arrFill = new Array(56).fill(null);
    const expected = [
      'A1',
      'A2',
      null,
      'B1',
      'B2',
      'B3',
      null,
      'C1',
      ...arrFill
    ];
    expect(playerOne.playerBoard.showBoard()).not.toStrictEqual(expected);
  });
});
