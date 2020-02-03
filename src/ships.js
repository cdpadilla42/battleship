const shipsFactory = function(length) {
  const shipLength = length;
  const shipModel = new Array(shipLength).fill(null);

  const showModel = () => {
    return shipModel;
  };

  const isSunk = () => {
    for (var i = 0; i < shipLength; i++) {
      if (shipModel[i] === null) {
        return false;
      }
    }
    return true;
  };

  const showLength = () => {
    return shipLength;
  };

  const hit = n => {
    shipModel[n] = 'x';
  };

  return { showLength, showModel, hit, isSunk };
};

export { shipsFactory as default };
