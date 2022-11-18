/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/***/ (() => {

eval("const burgerBar = document.querySelector('.burger'),\r\n      navBar = document.querySelector('.navbar')\r\n\r\nburgerBar.addEventListener('click', () => {\r\n    navBar.classList.toggle('active')\r\n})\n\n//# sourceURL=webpack://gulp-test/./src/assets/js/burger.js?");

/***/ }),

/***/ "./src/assets/js/resume__array.js":
/*!****************************************!*\
  !*** ./src/assets/js/resume__array.js ***!
  \****************************************/
/***/ (() => {

eval("const ResumeCards = document.querySelector('.resume__inner');\r\n\r\nconst data = [\r\n    {\r\n        \"title\": \"Experience\",\r\n        \"name\": \"Google\",\r\n        \"course\": \"UX Design Intern\",            \r\n        \"text\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sed ac orci, et in. Massa egestas eu, augue eget lorem ullamcorper blandit. Dui, semper elementum volutpat non vulputate ultrices sed. \",\r\n        \"years\": \"May 2022 - Present\",\r\n    },\r\n    {\r\n        \"title\": \"Education\",\r\n        \"name\": \"Univesity Name \",\r\n        \"course\": \"Course Take\",\r\n        \"text\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sed ac orci, et in. Massa egestas eu, augue eget lorem ullamcorper blandit. Dui, semper elementum volutpat non vulputate ultrices sed. \",\r\n        \"years\": \"May 2022 - Present\",\r\n    },\r\n    {\r\n        \"title\": \"Skills\",\r\n        \"text\": \"Interaction Design, Wireframing, Copywriting, User Research, Wireframe, Story boarding\",\r\n    },\r\n    {\r\n        \"title\": \"Tools\",\r\n        \"text\": \"Sketch, Figma, Photoshop, Invsion, ProtoPie\",\r\n    },\r\n    {\r\n        \"title\": \"Contact\",\r\n        \"tel\": \"+91 822 4444 222\",\r\n        \"email\": \"email@emailaddress.com\",\r\n    }\r\n]\r\n\r\n\r\nconst html = data.map(item => {\r\n    const title = item.title;\r\n    const name = item.name;\r\n    return `\r\n    <div class=\"resume__card\">\r\n        <h1 class=\"resume__title\">\r\n            ${title}\r\n        </h1>\r\n        <div class=\"resume__card--content\">\r\n            <div class=\"resume__card--top\">\r\n                <div class=\"resume__top--left\">\r\n                    <h1>\r\n                        ${name}\r\n                    </h1>\r\n                    <h2>\r\n                        ${item.course}\r\n                    </h2>\r\n                </div>\r\n                <h3>\r\n                    ${item.years}\r\n                </h3>\r\n            </div>\r\n            <div class=\"resume__text\">\r\n                ${item.text}\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    `;\r\n})\r\n\r\n\r\nResumeCards.innerHTML = html;\n\n//# sourceURL=webpack://gulp-test/./src/assets/js/resume__array.js?");

/***/ }),

/***/ "./src/assets/js/scroll__top.js":
/*!**************************************!*\
  !*** ./src/assets/js/scroll__top.js ***!
  \**************************************/
/***/ (() => {

eval("const ScrollTop = document.getElementById('scroll__top');\r\n\r\n\r\nScrollTop.addEventListener('click', () => {\r\n  window.scrollTo({\r\n      top: 0,\r\n      behavior: 'smooth'\r\n  },15)\r\n})\n\n//# sourceURL=webpack://gulp-test/./src/assets/js/scroll__top.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/burger.js"]();
/******/ 	__webpack_modules__["./src/assets/js/resume__array.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/scroll__top.js"]();
/******/ 	
/******/ })()
;