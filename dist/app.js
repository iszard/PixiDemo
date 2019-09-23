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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* global PIXI */\r\n// The application will create a renderer using WebGL, if possible,\r\n// with a fallback to a canvas render. It will also setup the ticker\r\n// and the root stage PIXI.Container\r\nPIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;\r\nvar app = new PIXI.Application({\r\n    width: 480,\r\n    height: 320\r\n});\r\nvar tileSize = 16;\r\nvar SCALE = 2;\r\nvar map = {\r\n    width: 16,\r\n    height: 9,\r\n    tiles: [\r\n        12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,\r\n        12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,\r\n        12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,\r\n        12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,\r\n        12, 12, 12, 23, 12, 12, 12, 3, 4, 4, 5, 12, 12, 12, 12, 12,\r\n        12, 12, 12, 30, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,\r\n        12, 12, 12, 30, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,\r\n        12, 12, 12, 37, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,\r\n        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,\r\n        15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15\r\n    ],\r\n    collision: [\r\n        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\r\n        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\r\n        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\r\n        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\r\n        0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,\r\n        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\r\n        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\r\n        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\r\n        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,\r\n        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1\r\n    ]\r\n};\r\nfunction testCollision(worldX, worldY) {\r\n    var mapX = Math.floor(worldX / tileSize / SCALE);\r\n    var mapY = Math.floor(worldY / tileSize / SCALE);\r\n    return map.collision[mapY * map.width + mapX];\r\n}\r\nvar Keyboard = /** @class */ (function () {\r\n    function Keyboard() {\r\n        this.pressed = {};\r\n    }\r\n    Keyboard.prototype.watch = function (el) {\r\n        var _this = this;\r\n        el.addEventListener('keydown', function (e) {\r\n            console.log(e.key);\r\n            _this.pressed[e.key] = true;\r\n        });\r\n        el.addEventListener('keyup', function (e) {\r\n            _this.pressed[e.key] = false;\r\n        });\r\n    };\r\n    return Keyboard;\r\n}());\r\n// The application will create a canvas element for you that you\r\n// can then insert into the DOM\r\ndocument.body.appendChild(app.view);\r\napp.view.setAttribute('tabindex', 0);\r\n// load the texture we need\r\napp.loader.add('tileset', 'https://cdn.glitch.com/b2d89406-b584-43ba-af14-21fa5b4e9b79%2Fnature-paltformer-tileset-16x16.png?v=1568833250311');\r\napp.loader.add('character', 'https://cdn.glitch.com/b2d89406-b584-43ba-af14-21fa5b4e9b79%2Fmario.png?v=1568838884506');\r\napp.loader.load(function (loader, resources) {\r\n    // This creates a texture from a 'bunny.png' image\r\n    var kb = new Keyboard();\r\n    kb.watch(app.view);\r\n    // cut up background tile map\r\n    var tileTextures = [];\r\n    for (var i = 0; i < 7 * 11; i++) {\r\n        var x = i % 7;\r\n        var y = Math.floor(i / 7);\r\n        tileTextures[i] = new PIXI.Texture(resources.tileset.texture, new PIXI.Rectangle(x * tileSize, y * tileSize, tileSize, tileSize));\r\n    }\r\n    // cut up character tile map\r\n    var characterFrames = [];\r\n    for (var i = 0; i < 5; i++) {\r\n        characterFrames[i] = new PIXI.Texture(resources.character.texture, new PIXI.Rectangle(i * tileSize, 0, tileSize, tileSize * 2));\r\n    }\r\n    var blob = new PIXI.Sprite(characterFrames[0]);\r\n    blob.scale.x = SCALE;\r\n    blob.scale.y = SCALE;\r\n    var sky = new PIXI.TilingSprite(tileTextures[74], map.width * tileSize, map.height * tileSize);\r\n    sky.scale.x = SCALE;\r\n    sky.scale.y = SCALE;\r\n    var background = new PIXI.Container();\r\n    for (var y = 0; y < map.width; y++) {\r\n        for (var x = 0; x < map.width; x++) {\r\n            var tile = map.tiles[y * map.width + x];\r\n            var sprite = new PIXI.Sprite(tileTextures[tile]);\r\n            sprite.x = x * tileSize;\r\n            sprite.y = y * tileSize;\r\n            background.addChild(sprite);\r\n        }\r\n    }\r\n    background.scale.x = SCALE;\r\n    background.scale.y = SCALE;\r\n    // Add the bunny to the scene we are building\r\n    app.stage.addChild(sky);\r\n    app.stage.addChild(background);\r\n    app.stage.addChild(blob);\r\n    var character = {\r\n        x: 0, y: 0,\r\n        vx: 0, vy: 0,\r\n        direction: 0\r\n    };\r\n    // Listen for frame updates\r\n    app.ticker.add(function (time) {\r\n        blob.x = character.x;\r\n        blob.y = character.y;\r\n        character.vy = character.vy + 1;\r\n        character.x += character.vx;\r\n        var touchingGround = testCollision(character.x, character.y + tileSize * SCALE * 2 + 1) || testCollision(character.x + tileSize * SCALE - 1, character.y + tileSize * SCALE * 2 + 1);\r\n        if (character.vy > 0) {\r\n            for (var i = 0; i < character.vy; i++) {\r\n                var testX1 = character.x / tileSize;\r\n                var testX2 = character.x + tileSize * SCALE - 1;\r\n                var testY = character.y + tileSize * SCALE * 2;\r\n                if (testCollision(testX1, testY) || testCollision(testX2, testY)) {\r\n                    character.vy = 0;\r\n                    break;\r\n                }\r\n                character.y = character.y + 1;\r\n            }\r\n        }\r\n        if (character.vy < 0) {\r\n            character.y += character.vy;\r\n        }\r\n        if (kb.pressed.ArrowUp && touchingGround) {\r\n            character.vy = -16;\r\n        }\r\n        if (kb.pressed.ArrowRight) {\r\n            character.vx = Math.min(10, character.vx + 2);\r\n        }\r\n        if (kb.pressed.ArrowLeft) {\r\n            character.vx = Math.max(-10, character.vx - 2);\r\n        }\r\n        if (character.vx > 0) {\r\n            blob.scale.x = SCALE;\r\n            character.vx -= 1;\r\n        }\r\n        if (character.vx < 0) {\r\n            blob.scale.x = SCALE * -1;\r\n            character.vx += 1;\r\n        }\r\n        if (!touchingGround) {\r\n            blob.texture = characterFrames[4];\r\n        }\r\n        else {\r\n            if (character.vx !== 0) {\r\n                blob.texture = characterFrames[(Math.floor(Date.now() / 100) % 3)];\r\n            }\r\n            else if (character.vy == 0) {\r\n                blob.texture = characterFrames[0];\r\n            }\r\n            else if (character.vy < 0) {\r\n                blob.texture = characterFrames[3];\r\n            }\r\n            else if (character.vy > 0) {\r\n                blob.texture = characterFrames[4];\r\n            }\r\n        }\r\n    });\r\n});\r\napp.loader.onError.add(function (error) { return console.error(error); });\r\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ })

/******/ });