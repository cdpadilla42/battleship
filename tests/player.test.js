import playerFactory from '../src/player';

describe('Player moves', () => {
  const playerOne = playerFactory();
  const playerTwo = playerFactory();

  // HOLD UP!!! REFACTOR ME
  // So that the player class is dependent on the board
  // NOT the other way around! OR make the gameboard accessible to the player,
  // but it won't be accessible to anything OUTSIDE the player function
  // come back at this with a fresh mind, baby

  test('move initiates an attack on other player board', () => {
    playerOne.move(0);
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
    expect(playerTwo.showPlayerBoard()).toStrictEqual(expected);
  });
});

describe('Computer moves', () => {
  const playerOne = playerFactory();
  const computerPlayer = computer();

  test.toDo('computer move randomly places move on other board');
});
