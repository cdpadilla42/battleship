const DOM = (() => {
  let breakPoints = [7, 15, 23, 31, 39, 47, 55, 63];
  const renderPlayerBoard = (player, name, opponentObj) => {
    const boardData = player.playerBoard.showBoard();
    const boardElement = document.querySelector(`.${name}`);

    const newBoardElement = document.createElement('table');
    newBoardElement.classList.add('boardtable');

    let trElement = document.createElement('tr');
    for (var i = 0; i < boardData.length; i++) {
      let tdElement = document.createElement('td');
      tdElement.innerText = boardData[i];
      stylizeTdElement(tdElement, boardData[i]);
      addDataIndex(tdElement, i);
      addListenerToTd(tdElement, player, opponentObj);
      trElement.appendChild(tdElement);
      // if the current iteration has filled a row, start a new tr
      if (breakPoints.find(current => current === i)) {
        newBoardElement.appendChild(trElement);
        trElement = document.createElement('tr');
      }
    }
    boardElement.innerHTML = '';
    boardElement.appendChild(newBoardElement);
  };

  const renderSecretBoard = (player, name, opponentObj) => {
    const boardData = player.playerBoard.showBoard();
    const boardElement = document.querySelector(`.${name}`);

    const newBoardElement = document.createElement('table');
    newBoardElement.classList.add('boardtable');

    let trElement = document.createElement('tr');
    for (var i = 0; i < boardData.length; i++) {
      let tdElement = document.createElement('td');
      tdElement.innerText = boardData[i];
      stylizeSecretElements(tdElement, boardData[i]);
      addDataIndex(tdElement, i);
      addListenerToTd(tdElement, player, opponentObj);
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

  const stylizeSecretElements = function(tdElement, data) {
    if (data === 'X') {
      tdElement.classList.add('hit');
    }
    if (data === null) {
      return;
    }
    if (data === 'miss') {
      tdElement.classList.add('miss');
    }
    tdElement.classList.add('secret');
  };

  const addDataIndex = (td, index) => {
    td.setAttribute('data-index', index);
  };

  const addListenerToTd = (td, player, opponentObj) => {
    td.addEventListener('click', e => {
      console.log(e.target.getAttribute('data-index'));
      const index = e.target.getAttribute('data-index');
      player.move(opponentObj, index);
    });
  };

  const changeLowerMessage = message => {
    const messageDiv = document.querySelector('.message');
    messageDiv.innerText = message;
  };

  const changeBannerMessage = message => {
    const bannerDiv = document.querySelector('.winner-space');
    bannerDiv.innerText = message;
  };

  return { renderPlayerBoard, renderSecretBoard };
})();

export { DOM as default };
