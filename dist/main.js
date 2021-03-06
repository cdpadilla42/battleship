/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DOM; });\n/* harmony import */ var _game_loop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-loop */ \"./src/game-loop.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\n\nconst DOM = (() => {\n  let breakPoints = [7, 15, 23, 31, 39, 47, 55, 63];\n  let callbackForMove;\n  let gameStop = false;\n  const renderPlayerBoard = (player, name, opponentObj) => {\n    const boardData = player.playerBoard.showBoard();\n    const boardElement = document.querySelector(`.${name}`);\n\n    const newBoardElement = document.createElement('table');\n    newBoardElement.classList.add('boardtable');\n\n    let trElement = document.createElement('tr');\n    for (var i = 0; i < boardData.length; i++) {\n      let tdElement = document.createElement('td');\n      // tdElement.innerText = boardData[i];\n      stylizeTdElement(tdElement, boardData[i]);\n      addDataIndex(tdElement, i);\n      // below line for two live player functionality. Not need for CPU\n      // addListenerToTd(tdElement, opponentObj, player);\n      trElement.appendChild(tdElement);\n      // if the current iteration has filled a row, start a new tr\n      if (breakPoints.find(current => current === i)) {\n        newBoardElement.appendChild(trElement);\n        trElement = document.createElement('tr');\n      }\n    }\n    boardElement.innerHTML = '';\n    boardElement.appendChild(newBoardElement);\n  };\n\n  const renderSecretBoard = (player, name, opponentObj) => {\n    const boardData = player.playerBoard.showBoard();\n    const boardElement = document.querySelector(`.${name}`);\n\n    const newBoardElement = document.createElement('table');\n    newBoardElement.classList.add('boardtable');\n\n    let trElement = document.createElement('tr');\n    for (var i = 0; i < boardData.length; i++) {\n      let tdElement = document.createElement('td');\n      // tdElement.innerText = boardData[i];\n      stylizeSecretElements(tdElement, boardData[i]);\n      addDataIndex(tdElement, i);\n      addListenerToTd(tdElement, opponentObj, player);\n      trElement.appendChild(tdElement);\n      // if the current iteration has filled a row, start a new tr\n      if (breakPoints.find(current => current === i)) {\n        newBoardElement.appendChild(trElement);\n        trElement = document.createElement('tr');\n      }\n    }\n    console.log(newBoardElement);\n    boardElement.innerHTML = '';\n    boardElement.appendChild(newBoardElement);\n  };\n\n  const stylizeTdElement = function(tdElement, data) {\n    if (data === 'X') {\n      tdElement.classList.add('hit');\n    }\n    if (data === null) {\n      return;\n    }\n    if (data === 'miss') {\n      tdElement.classList.add('miss');\n    }\n    tdElement.classList.add('ship');\n  };\n\n  const stylizeSecretElements = function(tdElement, data) {\n    if (data === 'X') {\n      tdElement.classList.add('hit');\n    }\n    if (data === null) {\n      return;\n    }\n    if (data === 'miss') {\n      tdElement.classList.add('miss');\n    }\n    // tdElement.classList.add('secret');\n  };\n\n  const addDataIndex = (td, index) => {\n    td.setAttribute('data-index', index);\n  };\n\n  const toggleListeners = () => {\n    gameStop = !gameStop;\n  };\n\n  const addListenerToTd = (td, player, opponentObj) => {\n    td.addEventListener('click', e => {\n      // switch moves here\n      if (gameStop) {\n        return;\n      }\n      console.log(e.target.getAttribute('data-index'));\n      const index = e.target.getAttribute('data-index');\n      console.log('for', player);\n      player.move(opponentObj, index);\n      Object(_game_loop__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().nextMove(player, 'player-one', opponentObj);\n    });\n  };\n\n  const firstMove = (player, name, opponentObj) => {\n    changeLowerMessage(`It's your turn!`);\n  };\n\n  const nextMovePlayer = (player, name, opponentObj) => {\n    renderSecretBoard(opponentObj, 'player-two', player);\n    changeLowerMessage(`It's the Computer's turn!`);\n  };\n\n  const nextMoveComputer = (player, name, opponentObj) => {\n    renderPlayerBoard(opponentObj, 'player-one', player);\n    changeLowerMessage(`It's your turn!`);\n  };\n\n  const hideTopBanner = () => {\n    const banner = document.querySelector('.winner');\n    banner.classList.add('hide');\n  };\n\n  const showTopBanner = () => {\n    const banner = document.querySelector('.winner');\n    banner.classList.remove('hide');\n  };\n\n  const changeLowerMessage = message => {\n    const messageDiv = document.querySelector('.message');\n    messageDiv.innerText = message;\n  };\n\n  const changeBannerMessage = message => {\n    const bannerDiv = document.querySelector('.winner');\n    bannerDiv.innerText = message;\n  };\n\n  const addNewRoundBttn = () => {\n    const bttn = document.querySelector('#round-start');\n    bttn.addEventListener('click', () => {\n      Object(_game_loop__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().nextGame();\n    });\n  };\n\n  const handleCoordSubmission = () => {\n    const coord = document.querySelector('#player-name-field').value;\n    const board = Object(_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    board.placeShip(coord);\n  };\n\n  const addListenerShipPlacement = () => {\n    const bttn = document.querySelector('#coord-submit');\n    bttn.addEventListener('click', handleCoordSubmission);\n  };\n\n  return {\n    renderPlayerBoard,\n    renderSecretBoard,\n    nextMovePlayer,\n    nextMoveComputer,\n    changeLowerMessage,\n    hideTopBanner,\n    showTopBanner,\n    changeBannerMessage,\n    toggleListeners,\n    addNewRoundBttn,\n    handleCoordSubmission,\n    addListenerShipPlacement\n  };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/DOM.js?");

/***/ }),

/***/ "./src/game-loop.js":
/*!**************************!*\
  !*** ./src/game-loop.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return gameLoop; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\n\nconst gameLoop = function() {\n  let playerOne = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"playerFactory\"])();\n  let playerTwo = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"computer\"])();\n\n  const newGameComp = function() {\n    autoPlaceShips(playerOne);\n    autoPlaceShips(playerTwo);\n    renderBoard(playerOne, 'player-one', playerTwo);\n    renderSecretBoard(playerTwo, 'player-two', playerOne);\n    _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hideTopBanner();\n    // move start\n    firstMove(playerOne, 'player-one', playerTwo);\n  };\n\n  const handleShipPlacement = coord => {\n    console.log('placing ship', nextShip);\n    let shipsObj = playerOne.playerBoard.showShips();\n    playerOne.playerBoard.placeShip(shipsObj[nextShip], coord);\n\n    if (nextShip === 'C') {\n      console.log('game start!');\n    }\n    if (nextShip === 'B') {\n      nextShip = 'C';\n    }\n    if (nextShip === 'A') {\n      nextShip = 'B';\n    }\n  };\n\n  const autoPlaceShips = function(player) {\n    const currentBoard = player.playerBoard;\n    const shipsObj = currentBoard.showShips();\n    currentBoard.placeShip(shipsObj.A, 0);\n    currentBoard.placeShip(shipsObj.B, 3);\n    currentBoard.placeShip(shipsObj.C, 7);\n  };\n\n  const areShipsPlaced = () => {\n    const board = playerOne.playerBoard.showBoard();\n    for (var i = 0; i < board.length; i++) {\n      if (board[i] === null) {\n        continue;\n      }\n      if (board[i][0] === 'C') {\n        return true;\n      }\n    }\n    return false;\n  };\n\n  const isOver = (firstPlayer, secondPlayer) => {\n    if (firstPlayer.playerBoard.areShipsSunk()) {\n      return firstPlayer; // returns winner\n    }\n    if (secondPlayer.playerBoard.areShipsSunk()) {\n      return secondPlayer; // returns winner\n    }\n    return false;\n  };\n\n  const renderBoard = (player, name, opponentObj) => {\n    _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderPlayerBoard(player, name, opponentObj);\n  };\n\n  const renderSecretBoard = (player, name, opponentObj) => {\n    _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderSecretBoard(player, name, opponentObj);\n  };\n\n  const nextMove = (player, name, opponentObj) => {\n    // connects to DOM's next move changes\n    _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nextMovePlayer(player, name, opponentObj);\n    // run computer move\n    if (isOver(player, opponentObj)) {\n      gameOver(isOver(player, opponentObj));\n      return;\n    }\n    opponentObj.randomMove(player);\n    // reinstate player move\n    _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nextMoveComputer(opponentObj, 'player-two', player);\n    if (isOver(player, opponentObj)) {\n      gameOver(isOver());\n      return;\n    }\n  };\n\n  const firstMove = (player, name, opponentObj) => {\n    _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nextMovePlayer(player, name, opponentObj);\n    _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeLowerMessage(`It's your turn!`);\n  };\n\n  const gameOver = winner => {\n    console.log('game over!');\n    // ends game, calls to render appropriate views.\n    // THIS IS THE NEXT STEP!!!\n    // eventually ... ends clickability\n    _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showTopBanner();\n    _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeBannerMessage('Game Over!');\n    _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].changeLowerMessage('We have a winner!');\n    _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].toggleListeners();\n  };\n\n  const gameStart = () => {\n    _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addNewRoundBttn();\n  };\n\n  const nextGame = () => {\n    playerOne = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"playerFactory\"])();\n    playerTwo = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"computer\"])();\n    newGameComp();\n  };\n\n  const handleCoordSubmission = () => {\n    _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].handleCoordSubmission();\n  };\n\n  const setUpGame = () => {\n    _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addListenerShipPlacement();\n  };\n\n  return {\n    newGameComp,\n    playerOne,\n    playerTwo,\n    isOver,\n    renderBoard,\n    renderSecretBoard,\n    nextMove,\n    gameStart,\n    nextGame,\n    areShipsPlaced,\n    setUpGame,\n    handleCoordSubmission,\n    handleShipPlacement\n  };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/game-loop.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return gameboard; });\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ \"./src/ships.js\");\n\n\nconst gameboard = function() {\n  let model = new Array(64).fill(null);\n  let ships = {\n    A: Object(_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, 'A'),\n    B: Object(_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3, 'B'),\n    C: Object(_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, 'C')\n  };\n  let nextShip = 'A';\n\n  const areShipsSunk = () => {\n    // for (var i = 0; i < model.length; i++) {\n    //   if (model[i] === 'miss' || model[i] === 'X' || model[i] === null) {\n    //     // nothing\n    //   } else {\n    //     return false;\n    //   }\n    // }\n    // return true;\n\n    for (const key in ships) {\n      if (!ships[key].isSunk()) {\n        return false;\n      }\n    }\n    return true;\n  };\n\n  const isShipOverflowing = (shipLength, location) => {\n    let edge;\n    if (location < 8) {\n      edge = 8;\n    } else if (location >= 8 && location < 16) {\n      edge = 16;\n    } else if (location >= 16 && location < 24) {\n      edge = 24;\n    } else if (location >= 24 && location < 32) {\n      edge = 32;\n    } else if (location >= 32 && location < 40) {\n      edge = 40;\n    } else if (location >= 40 && location < 48) {\n      edge = 48;\n    } else if (location >= 48 && location < 56) {\n      edge = 56;\n    } else {\n      edge = 64;\n    }\n\n    if (location + (shipLength - 1) >= edge) {\n      return true;\n    }\n    return false;\n  };\n\n  const showShips = () => {\n    return ships;\n  };\n\n  const changeNextShip = () => {\n    if (nextShip === 'C') {\n      console.log('all ships placed!');\n    } else if (nextShip === 'B') {\n      nextShip = 'C';\n    } else if (nextShip === 'A') {\n      nextShip = 'B';\n    }\n  };\n\n  const placeShip = function(location) {\n    const ship = ships[nextShip];\n    const shipName = ship.showName();\n    const shipLength = ship.showLength();\n    if (isShipOverflowing(shipLength, location)) {\n      return placementError();\n    }\n    let counter = 1;\n    for (var i = location; i < shipLength + location; i++) {\n      model[i] = `${shipName}${counter}`;\n      counter++;\n    }\n    changeNextShip();\n    console.log('next ship: ', nextShip);\n  };\n\n  const placementError = () => {\n    return new Error('Could not place ships');\n  };\n\n  const showBoard = () => model;\n\n  const recieveAttack = coord => {\n    if (model[coord] === null || model[coord] === 'miss') {\n      model[coord] = 'miss';\n    } else if (model[coord] === 'X') {\n      return;\n    } else {\n      const shipName = model[coord][0];\n      const hitLocation = model[coord][1];\n      model[coord] = 'X';\n      ships[shipName].hit(hitLocation - 1);\n    }\n  };\n\n  const translateCoordinates = (a, b) => {\n    return b - 1 + (a - 1) * 8;\n  };\n\n  return {\n    placeShip,\n    showBoard,\n    placementError,\n    recieveAttack,\n    showShips,\n    areShipsSunk\n  };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_loop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-loop */ \"./src/game-loop.js\");\n\n\nfunction handleShipPlacement(e) {\n  e.preventDefault();\n  Object(_game_loop__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().handleCoordSubmission();\n}\n\nconst currentGame = Object(_game_loop__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\ncurrentGame.setUpGame();\ncurrentGame.gameStart();\ncurrentGame.newGameComp();\nconsole.log(currentGame.areShipsPlaced());\n\n// NEXT TODO: Implement placing ships from this function\n\n// HOW TO DO IT: Create a NEXT SHIP MODULE that will handle the placing of ships. ORRR, write it in the actual player modules\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: playerFactory, computer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"playerFactory\", function() { return playerFactory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"computer\", function() { return computer; });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nconst playerFactory = function() {\n  const playerBoard = Object(_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const move = (target, coord) => {\n    target.playerBoard.recieveAttack(coord);\n  };\n  const showPlayerBoard = () => {\n    return playerBoard.showBoard();\n  };\n  return { move, playerBoard };\n};\n\nconst computer = function() {\n  const playerBoard = Object(_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  const moveList = [];\n\n  const move = (target, coord) => {\n    target.playerBoard.recieveAttack(coord);\n  };\n\n  const getRandomInt = function(max) {\n    let selection = Math.floor(Math.random() * Math.floor(max));\n    if (moveList.find(element => element === selection)) {\n      return getRandomInt(max);\n    }\n    return selection;\n  };\n\n  const randomMove = target => {\n    // add logic for knowing not to repeat thine self\n    let randomCoord = getRandomInt(64);\n    move(target, randomCoord);\n    moveList.push(randomCoord);\n  };\n\n  return { randomMove, playerBoard };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return shipsFactory; });\nconst shipsFactory = function(length, identifier) {\n  const shipLength = length;\n  let shipModel = new Array(shipLength).fill(null);\n  const name = identifier;\n\n  const showName = () => name;\n\n  const showModel = () => {\n    return shipModel;\n  };\n\n  const isSunk = () => {\n    for (var i = 0; i < shipLength; i++) {\n      const currentSpece = shipModel[i];\n      if (shipModel[i] === null) {\n        return false;\n      }\n    }\n    return true;\n  };\n\n  const showLength = () => {\n    return shipLength;\n  };\n\n  const hit = n => {\n    shipModel[n] = 'x';\n  };\n\n  return { showLength, showModel, hit, isSunk, showName };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/ships.js?");

/***/ })

/******/ });