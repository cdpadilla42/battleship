const DOM = (() => {
  let breakPoints = [7, 15, 23, 31, 39, 47, 55, 63];
  const renderPlayerBoard = (player, name) => {
    const boardData = player.playerBoard.showBoard();
    const boardElement = document.querySelector(`.${name}`);

    const newBoardElement = document.createElement('table');
    newBoardElement.classList.add('boardtable');

    let trElement = document.createElement('tr');
    for (var i = 0; i < boardData.length; i++) {
      let tdElement = document.createElement('td');
      tdElement.innerText = boardData[i];
      stylizeTdElement(tdElement, boardData[i]);
      trElement.appendChild(tdElement);
      // if the current iteration has filled a row, start a new tr
      if (breakPoints.find(current => current === i)) {
        newBoardElement.appendChild(trElement);
        trElement = document.createElement('tr');
      }
    }
    console.log(newBoardElement);
    boardElement.innerHTML = '';
    boardElement.appendChild(newBoardElement);
  };

  const stylizeTdElement = function(tdElement, data) {
    if (data === 'X') {
      tdElement.classList.add('hit');
    }
    if (data === null) {
      return;
    }
    if (data === 'miss') {
      tdElement.classList.add('miss');
    }
    tdElement.classList.add('ship');
  };

  return { renderPlayerBoard };
})();

export { DOM as default };
