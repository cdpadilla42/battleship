import gameLoop from './game-loop';

const DOM = (() => {
  let breakPoints = [7, 15, 23, 31, 39, 47, 55, 63];
  let callbackForMove;
  let gameStop = false;
  const renderPlayerBoard = (player, name, opponentObj) => {
    const boardData = player.playerBoard.showBoard();
    const boardElement = document.querySelector(`.${name}`);

    const newBoardElement = document.createElement('table');
    newBoardElement.classList.add('boardtable');

    let trElement = document.createElement('tr');
    for (var i = 0; i < boardData.length; i++) {
      let tdElement = document.createElement('td');
      // tdElement.innerText = boardData[i];
      stylizeTdElement(tdElement, boardData[i]);
      addDataIndex(tdElement, i);
      // below line for two live player functionality. Not need for CPU
      // addListenerToTd(tdElement, opponentObj, player);
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
      // tdElement.innerText = boardData[i];
      stylizeSecretElements(tdElement, boardData[i]);
      addDataIndex(tdElement, i);
      addListenerToTd(tdElement, opponentObj, player);
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
    // tdElement.classList.add('secret');
  };

  const addDataIndex = (td, index) => {
    td.setAttribute('data-index', index);
  };

  const toggleListeners = () => {
    gameStop = !gameStop;
  };

  const addListenerToTd = (td, player, opponentObj) => {
    td.addEventListener('click', e => {
      // switch moves here
      if (gameStop) {
        return;
      }
      console.log(e.target.getAttribute('data-index'));
      const index = e.target.getAttribute('data-index');
      console.log('for', player);
      player.move(opponentObj, index);
      gameLoop().nextMove(player, 'player-one', opponentObj);
    });
  };

  const firstMove = (player, name, opponentObj) => {
    changeLowerMessage(`It's your turn!`);
  };

  const nextMovePlayer = (player, name, opponentObj) => {
    renderSecretBoard(opponentObj, 'player-two', player);
    changeLowerMessage(`It's the Computer's turn!`);
  };

  const nextMoveComputer = (player, name, opponentObj) => {
    renderPlayerBoard(opponentObj, 'player-one', player);
    changeLowerMessage(`It's your turn!`);
  };

  const hideTopBanner = () => {
    const banner = document.querySelector('.winner');
    banner.classList.add('hide');
  };

  const showTopBanner = () => {
    const banner = document.querySelector('.winner');
    banner.classList.remove('hide');
  };

  const changeLowerMessage = message => {
    const messageDiv = document.querySelector('.message');
    messageDiv.innerText = message;
  };

  const changeBannerMessage = message => {
    const bannerDiv = document.querySelector('.winner');
    bannerDiv.innerText = message;
  };

  const addNewRoundBttn = () => {
    const bttn = document.querySelector('#round-start');
    bttn.addEventListener('click', () => {
      gameLoop().nextGame();
    });
  };

  const handleCoordSubmission = () => {
    const coord = document.querySelector('#player-name-field').value;
    gameLoop().handleShipPlacement(coord);
  };

  const addListenerShipPlacement = () => {
    const bttn = document.querySelector('#coord-submit');
    bttn.addEventListener('click', handleCoordSubmission);
  };

  return {
    renderPlayerBoard,
    renderSecretBoard,
    nextMovePlayer,
    nextMoveComputer,
    changeLowerMessage,
    hideTopBanner,
    showTopBanner,
    changeBannerMessage,
    toggleListeners,
    addNewRoundBttn,
    handleCoordSubmission,
    addListenerShipPlacement
  };
})();

export { DOM as default };
