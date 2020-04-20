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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/playground.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ts/person.ts":
/*!**************************!*\
  !*** ./src/ts/person.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Person = /** @class */ (function () {\r\n    function Person(image, speed, positionX, positionY) {\r\n        if (positionX === void 0) { positionX = 0; }\r\n        if (positionY === void 0) { positionY = 0; }\r\n        this.image = image;\r\n        this.speed = speed;\r\n        this.positionX = positionX;\r\n        this.positionY = positionY;\r\n    }\r\n    Person.prototype.drawImage = function (ctx, width) {\r\n        ctx.beginPath();\r\n        ctx.drawImage(this.image, width, 0, width, this.image.height, dx, dy, width / 4, this.image.height / 4);\r\n        ctx.stroke();\r\n    };\r\n    Person.prototype.moveToRigth = function () {\r\n    };\r\n    Person.prototype.moveToLeft = function () {\r\n    };\r\n    Person.prototype.moveToUp = function () {\r\n    };\r\n    Person.prototype.moveToDown = function () {\r\n    };\r\n    Person.prototype.changeImage = function (position) {\r\n    };\r\n    return Person;\r\n}());\r\nexports.Person = Person;\r\nvar SALUDO = 'hola bryan !';\r\nexports.SALUDO = SALUDO;\r\n\n\n//# sourceURL=webpack:///./src/ts/person.ts?");

/***/ }),

/***/ "./src/ts/playground.ts":
/*!******************************!*\
  !*** ./src/ts/playground.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar saludo = __webpack_require__(/*! ./person */ \"./src/ts/person.ts\");\r\nconsole.log('Person :', saludo);\r\n// const spritePersonRight = require('../assets/image/sprite-person-left.png');\r\n// const character = new Character(spritePersonRight, 5);\r\n// console.log('Character :', Character);\r\n// const lienzo = document.getElementById('lienzo') as HTMLCanvasElement;\r\n// const ctx = lienzo.getContext('2d') as CanvasRenderingContext2D;\r\n// character.drawImage(ctx, 400);\r\n\n\n//# sourceURL=webpack:///./src/ts/playground.ts?");

/***/ })

/******/ });