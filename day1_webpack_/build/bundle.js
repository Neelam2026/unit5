/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".redtext{\\r\\n    color: rgb(213, 227, 14);\\r\\n    margin-left: 78%;\\r\\n\\r\\n}\\r\\n*{\\r\\n    font-family:  sans-serif;\\r\\n}\\r\\n\\r\\n#img1{\\r\\n    width: 7%;;\\r\\n    padding: .1%;\\r\\n    border-radius: 30%;\\r\\n    border: 3px solid rgb(199, 188, 188);\\r\\n   \\r\\n}\\r\\n#div1{\\r\\n    background-color: rgb(9, 76, 100);\\r\\n    display: flex;\\r\\n  \\r\\n}\\r\\n#container{\\r\\n   \\r\\n    width: 90%;\\r\\n    display: flex;\\r\\nmargin-top: 3%;\\r\\nmargin-left: 5%;\\r\\n\\r\\n}\\r\\n#textvalue{\\r\\n    border-right: 1px solid rgb(90, 81, 81);\\r\\n    width: 46%;   \\r\\n}\\r\\n#textdisplay{\\r\\n    \\r\\n    width: 46%;   \\r\\n}\\r\\n#add_btn{\\r\\n    background-color: rgb(6, 76, 92);\\r\\n    border: 3px solid grey;\\r\\n    color: white;\\r\\n    font-weight: 600;\\r\\n    font-size: 120%;\\r\\n    width:80%;\\r\\n    height: 40px;\\r\\n  \\r\\n    \\r\\n}\\r\\ntextarea{\\r\\n    background-color: rgb(176, 179, 164);\\r\\n   \\r\\n    font-size: 120%;\\r\\n}\\r\\n#div11{\\r\\nborder: .5px solid grey;\\r\\nmargin: 3%;\\r\\nbox-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\r\\n}\\r\\n#div4{\\r\\n    background-color: rgb(49, 49, 48);\\r\\n    color :white;\\r\\n    border: .5px solid rgb(68, 70, 70);\\r\\n    font-size: 120;\\r\\n    font-weight: 600;\\r\\n    height: 20px;\\r\\n    padding: 1%;\\r\\n}\\r\\n#div3{\\r\\n    background-color: rgb(221, 59, 31);\\r\\n    height: 30px;\\r\\n    padding: 1%;\\r\\n}\\r\\n#div2{\\r\\n    background-color: rgb(239, 244, 241);\\r\\n    padding: 1%;\\r\\n    font-size: 110;\\r\\n    font-family: cursive;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack_assg/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack_assg/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack_assg/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack_assg/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack_assg/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack_assg/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack_assg/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack_assg/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack_assg/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack_assg/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images.jpg":
/*!************************!*\
  !*** ./src/images.jpg ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"data:image/jpeg;base64,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\");\n\n//# sourceURL=webpack://webpack_assg/./src/images.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _images_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images.jpg */ \"./src/images.jpg\");\n\r\n\r\n//navbar\r\nconst root = document.getElementById(\"root\");\r\nconst div1 = document.createElement(\"div\");\r\ndiv1.id = \"div1\";\r\nconst h1 = document.createElement(\"h1\");\r\nh1.innerText = \"Create Notes\";\r\nh1.classList.add(\"redtext\");\r\nconst img1 = document.createElement(\"img\");\r\nimg1.src =_images_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\nimg1.id = \"img1\";\r\ndiv1.append(img1, h1);\r\nroot.append(div1);\r\n\r\n//notes\r\n\r\nlet notes = JSON.parse(localStorage.getItem(\"notes\")) || [];\r\nlet add_btn = document.getElementById(\"add_btn\");\r\nadd_btn.addEventListener(\"click\", function (e) {\r\n  let addTxt = document.getElementById(\"addTxt\");\r\n  notes.push(addTxt.value);\r\n  localStorage.setItem(\"notes\", JSON.stringify(notes));\r\n  addTxt.value = \"\";\r\n  showNotes();\r\n});\r\n\r\n// Function to show elements from localStorage\r\nfunction showNotes() {\r\n  document.getElementById(\"textdisplay\").innerHTML = \"\";\r\n  notes.forEach(function (el, index) {\r\n    let div11 = document.createElement(\"div\");\r\n    div11.id = \"div11\";\r\n    let div4 = document.createElement(\"div\");\r\n    div4.textContent = `Note ${index + 1}`;\r\n    div4.id = \"div4\";\r\n    let div2 = document.createElement(\"div\");\r\n    div2.textContent = el;\r\n    div2.id = \"div2\";\r\n    let div3 = document.createElement(\"button\");\r\n    div3.textContent = \"Delete\";\r\n    div3.id = \"div3\";\r\n    div3.addEventListener(\"click\", function () {\r\n      deleteNote(index);\r\n    });\r\n    div11.append(div4, div2, div3);\r\n    document.getElementById(\"textdisplay\").append(div11);\r\n  });\r\n}\r\n\r\nfunction deleteNote(index) {\r\n  notes.splice(index, 1);\r\n  localStorage.setItem(\"notes\", JSON.stringify(notes));\r\n  showNotes();\r\n}\r\n\n\n//# sourceURL=webpack://webpack_assg/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;