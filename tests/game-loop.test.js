import gameLoop from '../src/game-loop';
import { playerFactory, computer } from '../src/player';

describe('Game Initialization', () => {
  test.skip('New game creates two players', () => {
    const game = gameLoop();
    game.newGameComp();
    expect(game.playerOne).objectContaining(playerFactory());
  });

  test('Ship Placer adds ships as expected to a board', () => {
    const game = gameLoop();
    game.newGameComp();

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
    expect(game.playerOne.playerBoard.showBoard()).toStrictEqual(expected);
  });

  test('Ship Placer adds ships as expected to a board 2', () => {
    const game = gameLoop();
    game.newGameComp();

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
    expect(game.playerTwo.playerBoard.showBoard()).toStrictEqual(expected);
  });

  test('game ends when all ships have been sunk on one board', () => {
    const game = gameLoop();
    game.newGameComp();
    for (var i = 0; i < 8; i++) {
      game.playerOne.move(game.playerTwo, i);
    }
    expect(game.isOver()).toStrictEqual(true);
  });
});
