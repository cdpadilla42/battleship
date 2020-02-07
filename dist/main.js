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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DOM; });\nconst DOM = (() => {\n  let breakPoints = [7, 15, 23, 31, 39, 47, 55, 63];\n  const renderPlayerBoard = (player, name, opponentObj) => {\n    const boardData = player.playerBoard.showBoard();\n    const boardElement = document.querySelector(`.${name}`);\n\n    const newBoardElement = document.createElement('table');\n    newBoardElement.classList.add('boardtable');\n\n    let trElement = document.createElement('tr');\n    for (var i = 0; i < boardData.length; i++) {\n      let tdElement = document.createElement('td');\n      tdElement.innerText = boardData[i];\n      stylizeTdElement(tdElement, boardData[i]);\n      addDataIndex(tdElement, i);\n      // below line for two live player functionality. Not need for CPU\n      // addListenerToTd(tdElement, opponentObj, player);\n      trElement.appendChild(tdElement);\n      // if the current iteration has filled a row, start a new tr\n      if (breakPoints.find(current => current === i)) {\n        newBoardElement.appendChild(trElement);\n        trElement = document.createElement('tr');\n      }\n    }\n    boardElement.innerHTML = '';\n    boardElement.appendChild(newBoardElement);\n  };\n\n  const renderSecretBoard = (player, name, opponentObj) => {\n    const boardData = player.playerBoard.showBoard();\n    const boardElement = document.querySelector(`.${name}`);\n\n    const newBoardElement = document.createElement('table');\n    newBoardElement.classList.add('boardtable');\n\n    let trElement = document.createElement('tr');\n    for (var i = 0; i < boardData.length; i++) {\n      let tdElement = document.createElement('td');\n      tdElement.innerText = boardData[i];\n      stylizeSecretElements(tdElement, boardData[i]);\n      addDataIndex(tdElement, i);\n      addListenerToTd(tdElement, opponentObj, player);\n      trElement.appendChild(tdElement);\n      // if the current iteration has filled a row, start a new tr\n      if (breakPoints.find(current => current === i)) {\n        newBoardElement.appendChild(trElement);\n        trElement = document.createElement('tr');\n      }\n    }\n    console.log(newBoardElement);\n    boardElement.innerHTML = '';\n    boardElement.appendChild(newBoardElement);\n  };\n\n  const stylizeTdElement = function(tdElement, data) {\n    if (data === 'X') {\n      tdElement.classList.add('hit');\n    }\n    if (data === null) {\n      return;\n    }\n    if (data === 'miss') {\n      tdElement.classList.add('miss');\n    }\n    tdElement.classList.add('ship');\n  };\n\n  const stylizeSecretElements = function(tdElement, data) {\n    if (data === 'X') {\n      tdElement.classList.add('hit');\n    }\n    if (data === null) {\n      return;\n    }\n    if (data === 'miss') {\n      tdElement.classList.add('miss');\n    }\n    tdElement.classList.add('secret');\n  };\n\n  const addDataIndex = (td, index) => {\n    td.setAttribute('data-index', index);\n  };\n\n  const addListenerToTd = (td, player, opponentObj) => {\n    td.addEventListener('click', e => {\n      // switch moves here\n      console.log(e.target.getAttribute('data-index'));\n      const index = e.target.getAttribute('data-index');\n      console.log('for', player);\n      player.move(opponentObj, index);\n    });\n  };\n\n  const nextMove = (player, name, opponentObj) => {\n    // add message (player X's turn)\n    console.log('next move!');\n    // update board\n    // update current turn var\n    // if CPU\n    // if make move, return to player\n  };\n\n  const changeLowerMessage = message => {\n    const messageDiv = document.querySelector('.message');\n    messageDiv.innerText = message;\n  };\n\n  const changeBannerMessage = message => {\n    const bannerDiv = document.querySelector('.winner-space');\n    bannerDiv.innerText = message;\n  };\n\n  return { renderPlayerBoard, renderSecretBoard, nextMove };\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/DOM.js?");

/***/ }),

/***/ "./src/game-loop.js":
/*!**************************!*\
  !*** ./src/game-loop.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return gameLoop; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM */ \"./src/DOM.js\");\n\n\n\nconst gameLoop = function() {\n  let playerOne = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"playerFactory\"])();\n  let playerTwo = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"computer\"])();\n\n  const newGameComp = function() {\n    autoPlaceShips(playerOne);\n    autoPlaceShips(playerTwo);\n  };\n\n  const autoPlaceShips = function(player) {\n    const currentBoard = player.playerBoard;\n    const shipsObj = currentBoard.showShips();\n    currentBoard.placeShip(shipsObj.A, 0);\n    currentBoard.placeShip(shipsObj.B, 3);\n    currentBoard.placeShip(shipsObj.C, 7);\n  };\n\n  const isOver = () => {\n    if (playerOne.playerBoard.areShipsSunk()) {\n      // player two wins!\n      return true;\n    }\n    if (playerTwo.playerBoard.areShipsSunk()) {\n      // player one wins!\n      return true;\n    }\n    return false;\n  };\n\n  const renderBoard = (player, name, opponentObj) => {\n    _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderPlayerBoard(player, name, opponentObj);\n  };\n\n  const renderSecretBoard = (player, name, opponentObj) => {\n    _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderSecretBoard(player, name, opponentObj);\n  };\n\n  const nextMove = (player, name, opponentObj) => {\n    // connects to DOM's next move changes\n    _DOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nextMove(player, name, opponentObj);\n  };\n\n  const gameStart = () => {\n    // render boards\n    // render message\n    // start move\n    let playerOne = Object(_player__WEBPACK_IMPORTED_MODULE_0__[\"playerFactory\"])();\n    nextMove(playerOne, 'player-one', playerTwo);\n  };\n\n  return {\n    newGameComp,\n    playerOne,\n    playerTwo,\n    isOver,\n    renderBoard,\n    renderSecretBoard,\n    nextMove,\n    gameStart\n  };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/game-loop.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return gameboard; });\n/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ \"./src/ships.js\");\n\n\nconst gameboard = function() {\n  let model = new Array(64).fill(null);\n  let ships = {\n    A: Object(_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2, 'A'),\n    B: Object(_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3, 'B'),\n    C: Object(_ships__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, 'C')\n  };\n\n  const areShipsSunk = () => {\n    for (const key in ships) {\n      if (!ships[key].isSunk()) {\n        return false;\n      }\n    }\n    return true;\n  };\n\n  const isShipOverflowing = (shipLength, location) => {\n    let edge;\n    if (location < 8) {\n      edge = 8;\n    } else if (location >= 8 && location < 16) {\n      edge = 16;\n    } else if (location >= 16 && location < 24) {\n      edge = 24;\n    } else if (location >= 24 && location < 32) {\n      edge = 32;\n    } else if (location >= 32 && location < 40) {\n      edge = 40;\n    } else if (location >= 40 && location < 48) {\n      edge = 48;\n    } else if (location >= 48 && location < 56) {\n      edge = 56;\n    } else {\n      edge = 64;\n    }\n\n    if (location + (shipLength - 1) >= edge) {\n      return true;\n    }\n    return false;\n  };\n\n  const showShips = () => {\n    return ships;\n  };\n\n  const placeShip = function(ship, location) {\n    const shipName = ship.showName();\n    const shipLength = ship.showLength();\n    if (isShipOverflowing(shipLength, location)) {\n      return placementError();\n    }\n    let counter = 1;\n    for (var i = location; i < shipLength + location; i++) {\n      model[i] = `${shipName}${counter}`;\n      counter++;\n    }\n  };\n\n  const placementError = () => {\n    return new Error('Could not place ships');\n  };\n\n  const showBoard = () => model;\n\n  const recieveAttack = coord => {\n    if (model[coord] === null || model[coord] === 'miss') {\n      model[coord] = 'miss';\n    } else if (model[coord] === 'X') {\n      return;\n    } else {\n      const shipName = model[coord][0];\n      const hitLocation = model[coord][1];\n      model[coord] = 'X';\n      ships[shipName].hit(hitLocation - 1);\n    }\n  };\n\n  const translateCoordinates = (a, b) => {\n    return b - 1 + (a - 1) * 8;\n  };\n\n  return {\n    placeShip,\n    showBoard,\n    placementError,\n    recieveAttack,\n    showShips,\n    areShipsSunk\n  };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_loop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-loop */ \"./src/game-loop.js\");\n\n\nconst currentGame = Object(_game_loop__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\ncurrentGame.gameStart();\ncurrentGame.newGameComp();\ncurrentGame.renderBoard(\n  currentGame.playerOne,\n  'player-one',\n  currentGame.playerTwo\n);\n\ncurrentGame.renderBoard(\n  currentGame.playerOne,\n  'player-one',\n  currentGame.playerTwo\n);\n\ncurrentGame.renderSecretBoard(\n  currentGame.playerTwo,\n  'player-two',\n  currentGame.playerOne\n);\n\n\n//# sourceURL=webpack:///./src/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return shipsFactory; });\nconst shipsFactory = function(length, identifier) {\n  const shipLength = length;\n  const shipModel = new Array(shipLength).fill(null);\n  const name = identifier;\n\n  const showName = () => name;\n\n  const showModel = () => {\n    return shipModel;\n  };\n\n  const isSunk = () => {\n    for (var i = 0; i < shipLength; i++) {\n      if (shipModel[i] === null) {\n        return false;\n      }\n    }\n    return true;\n  };\n\n  const showLength = () => {\n    return shipLength;\n  };\n\n  const hit = n => {\n    shipModel[n] = 'x';\n  };\n\n  return { showLength, showModel, hit, isSunk, showName };\n};\n\n\n\n\n//# sourceURL=webpack:///./src/ships.js?");

/***/ })

/******/ });