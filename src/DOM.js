const DOM = (() => {
  const renderPlayerBoard = (player, name) => {
    const boardData = player.playerBoard.showBoard();
    const boardElement = document.querySelector(`.${name} table`);
    console.log(boardElement);

    const newBoardElement = document.createElement('table');
    newBoardElement.classList.add('boardtable');
    for (var i = 0; i < boardData.length; i++) {
      console.log(boardData[i], i);
      const tdElement = document.createElement('td');
      tdElement.innerText = boardData[i];
      // Next step...how to get this too fit into tr/td style of iteration. We'll see!
    }
  };

  return { renderPlayerBoard };
})();

export { DOM as default };
