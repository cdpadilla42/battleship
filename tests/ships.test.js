import shipsFactory from '../modules/ships';

test.todo('Ships facotry returns appropriate lengthed ship', () => {
  expect(shipsFactory(4).length).toBe(4);
});

test.todo('Ship factory shows where a ship has been hit');

test.todo('Ship factory shows if sunk');

test.todo('ship factory shows if afloat');
