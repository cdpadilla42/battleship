import shipsFactory from '../src/ships';

test('Ships facotry returns appropriate lengthed ship', () => {
  expect(shipsFactory(4).showLength()).toBe(4);
});

test('ship factory shows if afloat', () => {
  expect(shipsFactory(4).isSunk()).toBe(false);
});

test('showModel shows the array to contain hit spots of ship', () => {
  expect(shipsFactory(4).showModel()).toStrictEqual([null, null, null, null]);
});

test('hit function takes number and returns appropriate spot hit in ship', () => {
  let hitShip = shipsFactory(3);
  hitShip.hit(1);
  expect(hitShip.showModel()).toStrictEqual([null, 'x', null]);
});

test('showIsSunk calculates if sunk based on the way the shipModel is filled', () => {
  let hitShip2 = shipsFactory(3);
  for (var i = 0; i < 3; i++) {
    hitShip2.hit(i);
  }
  expect(hitShip2.isSunk()).toBe(true);
});
