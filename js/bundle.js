/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/addDeletetodo.js":
/*!**********************************!*\
  !*** ./modules/addDeletetodo.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDeletetodo": () => (/* binding */ addDeletetodo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local */ "./modules/local.js");


function addDeletetodo(pointDoneSelector, pointDeleteBtnSelector, textPointSelector){

    const pointDone = document.querySelectorAll(pointDoneSelector),
          pointDeleteBtn = document.querySelectorAll(pointDeleteBtnSelector),
          textPoint = document.querySelectorAll(textPointSelector);

    pointDeleteBtn.forEach(item =>{
        item.addEventListener('click', (i) =>{
            let parentDelete = item.parentElement;
            parentDelete.parentElement.remove();
            (0,_local__WEBPACK_IMPORTED_MODULE_0__.saveCheck)();
            (0,_local__WEBPACK_IMPORTED_MODULE_0__.saveToDo)();  
        });
    });

    for (let i = 0; i < pointDone.length; i++) {
        pointDone[i].onclick = function() {
            textPoint[i].classList.toggle('line');
            if(textPoint[i].classList.contains('line')){
                (0,_local__WEBPACK_IMPORTED_MODULE_0__.saveCheck)();
                (0,_local__WEBPACK_IMPORTED_MODULE_0__.saveToDo)();
            }else{
                (0,_local__WEBPACK_IMPORTED_MODULE_0__.saveCheck)();
                (0,_local__WEBPACK_IMPORTED_MODULE_0__.saveToDo)();
            }
        };
    };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDeletetodo);



/***/ }),

/***/ "./modules/local.js":
/*!**************************!*\
  !*** ./modules/local.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "load": () => (/* binding */ load),
/* harmony export */   "saveCheck": () => (/* binding */ saveCheck),
/* harmony export */   "saveToDo": () => (/* binding */ saveToDo)
/* harmony export */ });
function saveToDo(){
    localStorage.setItem('todoLoc', document.querySelector('.points__list').innerHTML);
}

function load(){    
    let checked = localStorage.getItem('ok');
    if (checked === 'true') {
        document.querySelectorAll("#done").forEach(item => {
            if(item.classList.contains('checke')){
                item.setAttribute('checked','checked');
            }
            else{
                item.removeAttribute('checked','checked');
            }
        }) 
    }
}

function saveCheck(){
    document.querySelectorAll('#done').forEach(item => {
        if(item.checked){
            item.classList.add('checke');
            localStorage.setItem('ok', true);
        }
        else{
            item.classList.remove('checke');
            localStorage.setItem('ok', true);
        }
    });
}




/***/ }),

/***/ "./modules/todos.js":
/*!**************************!*\
  !*** ./modules/todos.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addDeletetodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addDeletetodo */ "./modules/addDeletetodo.js");
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local */ "./modules/local.js");



function todos(pointAreaSelector, pointSubmitBtnSelector, pointsAreaSelector, pointDoneSelector, pointDeleteBtnSelector, textPointSelector, allXPSelector, moneyAreaSelector){
    const pointArea = document.querySelector(pointAreaSelector),
          pointSubmitBtn = document.querySelector(pointSubmitBtnSelector),
          pointsAreaInPage = document.querySelector(pointsAreaSelector),
          fromStorage = localStorage.getItem('todoLoc');

    if(fromStorage){
        document.querySelector('.points__list').innerHTML = fromStorage;    
    }
    (0,_local__WEBPACK_IMPORTED_MODULE_1__.load)();
    
    pointSubmitBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        if(pointArea.value === '' || pointArea.value === ' '){

        }else{
            let point = document.createElement('li');

            point.innerHTML = `
                <div class="points__list-item-left">
                    <input id="done" class="point__done" type="checkbox">
                    <span class="point__list-textpoint">${pointArea.value}</span>
                </div>
                <div class="points__list-item-right">
                    <button class="point__delete"><img class="point__delete-img" src="images/point-delete.png" alt="point-delete"></button>
                </div>
            `;
            point.classList.add('points__list-item');
            pointsAreaInPage.append(point);
            pointArea.value = '';
            (0,_addDeletetodo__WEBPACK_IMPORTED_MODULE_0__.addDeletetodo)(pointDoneSelector, pointDeleteBtnSelector, textPointSelector, allXPSelector, moneyAreaSelector);
            (0,_local__WEBPACK_IMPORTED_MODULE_1__.saveCheck)();
            (0,_local__WEBPACK_IMPORTED_MODULE_1__.saveToDo)();
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todos);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todos */ "./modules/todos.js");
/* harmony import */ var _modules_addDeletetodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addDeletetodo */ "./modules/addDeletetodo.js");



window.addEventListener('DOMContentLoaded', function(){

    (0,_modules_todos__WEBPACK_IMPORTED_MODULE_0__["default"])('.points__add-area', '.points__add-submit', '.points__list', '#done', '.point__delete', '.point__list-textpoint', '.all__xp', '.score__point');
    (0,_modules_addDeletetodo__WEBPACK_IMPORTED_MODULE_1__["default"])('#done', '.point__delete', '.point__list-textpoint');

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map