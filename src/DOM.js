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
      trElement.appendChild(tdElement);
      // if the current iteration is a breaking point
      if (breakPoints.find(current => current === i)) {
        newBoardElement.appendChild(trElement);
        trElement = document.createElement('tr');
      }
    }
    console.log(newBoardElement);
    boardElement.innerHTML = '';
    boardElement.appendChild(newBoardElement);
  };

  return { renderPlayerBoard };
})();

export { DOM as default };
