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

eval("const burgerBar = document.querySelector('.burger'),\n      navBar = document.querySelector('.navbar')\n\nburgerBar.addEventListener('click', () => {\n    navBar.classList.toggle('active')\n})\n\n//# sourceURL=webpack://gulp-test/./src/assets/js/burger.js?");

/***/ }),

/***/ "./src/assets/js/resume__array.js":
/*!****************************************!*\
  !*** ./src/assets/js/resume__array.js ***!
  \****************************************/
/***/ (() => {

eval("const ResumeCards = document.querySelector(\".resume__inner\");\n\nconst data = [\n  {\n    title: \"Experience\",\n    name: \"Google\",\n    course: \"UX Design Intern\",\n    tel: \"\",\n    text: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sed ac orci, et in. Massa egestas eu, augue eget lorem ullamcorper blandit. Dui, semper elementum volutpat non vulputate ultrices sed. \",\n    years: \"May 2022 - Present\",\n  },\n  {\n    title: \"Education\",\n    name: \"Univesity Name\",\n    course: \"Course Take\",\n    tel: \"\",\n    text: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque sed ac orci, et in. Massa egestas eu, augue eget lorem ullamcorper blandit. Dui, semper elementum volutpat non vulputate ultrices sed. \",\n    years: \"May 2022 - Present\",\n  },\n  {\n    title: \"Skills\",\n    name: \"\",\n    course: \"\",\n    tel: \"\",\n    text: \"Interaction Design, Wireframing, Copywriting, User Research, Wireframe, Story boarding\",\n    years: \"\",\n  },\n  {\n    title: \"Tools\",\n    name: \"\",\n    course: \"\",\n    tel: \"\",\n    text: \"Sketch, Figma, Photoshop, Invsion, ProtoPie\",\n    years: \"\",\n  },\n  {\n    title: \"Contact\",\n    name: \"\",\n    course: \"\",\n    tel: \"+91 822 4444 222\",\n    email: \"email@emailaddress.com\",\n    text: \"\",\n    years: \"\",\n  },\n];\n\nconst html = data\n  .map((item) => {\n    const title = item.title;\n    const name = item.name;\n    return `\n    <div class=\"resume__card\">\n        <h1 class=\"resume__title\">\n            ${title}\n        </h1>\n        <div class=\"resume__card--content\">\n            <div class=\"resume__card--top\">\n                <div class=\"resume__top--left\">\n                    <h1>\n                        ${name}\n                    </h1>\n                    <h2>\n                        ${item.course}\n                    </h2>\n                </div>\n                <h3>\n                    ${item.years}\n                </h3>\n            </div>\n            <div class=\"resume__text\">\n                ${item.text}\n                ${item.tel}\n            </div>\n        </div>\n    </div>\n\n    `;\n  })\n  .join(\"\");\n\nResumeCards.innerHTML = html;\n\n\n//# sourceURL=webpack://gulp-test/./src/assets/js/resume__array.js?");

/***/ }),

/***/ "./src/assets/js/scroll__top.js":
/*!**************************************!*\
  !*** ./src/assets/js/scroll__top.js ***!
  \**************************************/
/***/ (() => {

eval("const ScrollTop = document.getElementById('scroll__top');\n\n\nScrollTop.addEventListener('click', () => {\n  window.scrollTo({\n      top: 0,\n      behavior: 'smooth'\n  },15)\n})\n\n//# sourceURL=webpack://gulp-test/./src/assets/js/scroll__top.js?");

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
