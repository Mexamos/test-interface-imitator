(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["initOnloadWindow"] = factory();
	else
		root["initOnloadWindow"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAADpZJREFUeJzt2DuuLWcVhdF17YSAjpDQFLpgSwR0h5AEqZpBJ9wIIpDcBMwjQFhXZnr5nnP2o/asMaSV/9k3q2YAeKZvZ+bPM/PVk98BADzINzPzz5n598z8aWY+Pfc5AMC9fR7//50RAADFUvyNAAAotsXfCACAQl8SfyMAAIq8Jf5GAAAUeE/8jQAAeGEfib8RAAAv6BbxNwIA4IXcMv5GAAC8gHvE3wgAgBO7Z/yNAAA4oUfE3wgAgBN5ZPyNAAA4gWfE3wgAgCd6ZvyNAAB4gjPE3wgAgAc6U/yNAAB4gDPG3wgAgDs6c/yNAAC4g1eIvxEAADf0SvE3AgDgBl4x/kYAAHzAK8ffCACAd2iIvxEAAG/QFH8jAAC+QGP8jQAAWDTH3wgAgOAK8TcCAOAzV4q/EQAAc834GwEAXNqV428EAHBJ4m8EAHAx4m8EAHAx4m8EAHAx4m8EAHAx4m8EAHAx4m8EAHAx4m8EAHAx4m8EAHAx4m8EAHAx4m8EAHAx4m8EAHAx4m8EAHAx4m8EAHAx4m8EAHAx4m8EAHAx4v/8MwIAeCjxP88ZAQA8hPif74wAAO5K/M97RgAAdyH+5z8jAICbEv/XOSMAgJsQ/9c7IwCADxH/1z0jAIB3Ef/XPyMAgDcR/54zAgD4IuLfd0YAAKtvR/xb748DAME3I/6t9/3M/HYA4CfEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3xB+ASPx7T/wBiMS/98QfgEj8e0/8AYjEv/fEH4BI/HtP/AGIxL/3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"

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAABDJJREFUeJzt2Vms3FMYAPDfmfOfe6m1kdoaa0hoq/YtglrbVCuxe1FEBA888OqdF0JEIkRs8UItKbWVVIUHS2OpPUIqKpTYmuDemTPHw8xt0qbae+/8p204v2TeTr7/d77MzPnO96coiqIoiqIoiqIoiuJ/Jg4o7hDVXBpT6azpL1TzaOKMXpxUS3aDVKlmR/HeqFoVVdf3Gy+KV0Xx7SjeW6lm15DiBqoaY+0eNa/M8iWEGb3YwzXEHcYBhEMzR0bNxUnrEfxaQ+xaChCi5tnkq8knYTqG8GcNscdETMXx5H2j6kTCQ0lrGXI/gfsowHADe0fpWvI8zMJOCP0ktAVDOBDTyAdG1clJfAA/MNKZTMDJFCBEcZcgnZO5AGdgbzQmk8Bkno+dcQL2j9KhgWez+EqS1pngN2JCBahUO+JwnJ+Zh2MnGqNGDeyLyzOHBGFWpVqCz9raf403yHiTj5ie5TmE+Tgbe0w04wGJODFzCA4jv4jlGNexucUCRHEqZhPmYSFm9pfvwOyBywizouow8sv4MEmbPS02V4ChKB5AOB0X41RMqS/fgZmJgwhHY3EUVyRpNUY3tXhTBQhU08gzCRfhfOw3uHwHYgrmYgZhCfFpwse0f7LRn+QGBRjS3GFUno6FUViEIzZesw0EwmSP1v1wXRROSTxKtWRIWDOq9ffYgrHNNaK4W0c+FjdG5mDX/vKuS2jqr6OscFTk4MScjnxPFFcm6Xd0qig2kzQNN2WuiuxpsM3MRDXU02PsGlmYOQkP4+4o/tTA/KhaTrgFe9m+Nl+3gD0JN3f3bMFYdaP/9sY3FnT3nBt4PmmfQb4Ta7dtXlvFWvIdSXsOljaS1NLtmm4LLEq8gHU1PKjT+2wv1iVeCFyB2/F9klpjp0AnSb9WqjfwdWJBZOwYnOzUaITcqiHxfiWsSjyCpfguSevvChuc8b1LxFdUjyfhoyhfqtv+7jPx5+asz7t6DdbguSQsJn9E++f25hqhnkx7LcNvktZgJS7Eadhx8DnX4i+8gaewgsZqRkY2tXAzXd7ISOLzKP6ILwkfYIHt9zI05hM8T37J+stQ+18Xb7HN7d2m3sQ3UfyMcJ7udXhqTQnX5Re8Rl6apNd1v/7/vvOe8fb5bawOwpP4FJ9nzsVxBjdaH6+EdwPLsITwie5PYFwmdNFpa/+J96L4RRA+zFyEszDN1m+kOrp9y/LAU1leNvCRWE9O0h8MPYO3o84NOFP3yJxi8IXIuhPnVViWNO7H94xutaFoz2gH3yVu7Y3Fr9EdVI6NxQdhVPe3/Q7hwaT1qm03Fl8v9+bzK6PmIvIluoOIVGMbkPAbPiU8kbQe0/3T61udw45fktZdUVxB43ryMdjk2TtBI/iW8Bad+5L2+zXEHLhhmmd1X2z2qzqBar56XrMVRVEURVEURVEURVEU/wC/tTu109sHlwAAAABJRU5ErkJggg=="

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(4);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(6)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// Module
exports.push([module.i, "#test-interface-imitator-wrapeer {\n    width: 280px;\n    height: 260px;\n    position: fixed;\n    top: 30px;\n    padding: 10px;\n    border-radius: 1px;\n    background: linear-gradient(45deg, rgb(13, 13, 13), 30%, rgb(72, 72, 72));\n    box-shadow: 3px 3px 5px 2px rgba(0, 0, 0, 0.5);\n    font-family: sans-serif;\n    font-size: 14px;\n    color: rgb(240, 248, 255);\n    opacity: 0.6;\n    transition: opacity .5s;\n    z-index: 9999;\n}\n#test-interface-imitator-wrapeer:hover {\n    opacity: 1;\n}\n#test-interface-imitator-wrapeer label {\n    display: block;\n}\n.tii-left-position {\n    left: 30px;\n}\n.tii-right-position {\n    right: 30px;\n}\n\n.tii-expand {\n    position: fixed;\n    top: 40px;\n    right: 0px;\n    background: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 20px;\n    border-radius: 1px;\n    cursor: pointer;\n    border: 1px solid #a1a1a1;\n    border-right: unset;\n}\n#tii-img-expand {\n    width: 15px;\n    padding: 2.5px;\n}\n.display-none {\n    display: none;\n}\n\n.tii-header {\n    display: flex;\n}\n.tii-img-toggle-position-wrapper, .tii-roll-up-wrapper {\n    background: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 30px;\n    border-radius: 1px;\n    cursor: pointer;\n    border: 1px solid #a1a1a1;\n}\n.tii-img-toggle-position-wrapper:hover {\n    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\n}\n#tii-img-toggle-position {\n    width: 20px;\n    height: 20px;\n}\n#tii-roll-up {\n    width: 15px;\n    height: 12px;\n}\n.tii-roll-up-wrapper {\n    position: absolute;\n    right: 10px;\n    padding: 4px;\n    width: 15px;\n}\n\n\n\n.tii-body-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    height: 200px;\n}\n\n.tii-body-wrapper input {\n    width: 250px;\n    color: rgb(13, 13, 13);\n}\n\n.tii-body-wrapper > div:not(.tii-timers-wrapper) label {\n    text-align: center;\n}\n\n.tii-timers-wrapper {\n    display: flex;\n    box-sizing: border-box;\n    justify-content: space-between;\n    width: 100%;\n    padding: 0 15px;\n}\n.tii-interval-input-wrapper {\n\n}\n.tii-interval-input-wrapper input {\n    width: 60px;\n    float: left;\n}\n\n.tii-total-duration-input-wrapper {\n\n}\n.tii-total-duration-input-wrapper input {\n    width: 60px;\n    float: left;\n}\n.tii-format-time {\n    margin-top: 6px;\n    margin-left: 3px;\n    display: inline-block;\n}\n\n.tii-button-wrapper {\n    display: flex;\n    justify-content: center;\n    margin-top: 10px;\n}\n\n.tii-element-with-listner:hover {\n    box-shadow: 0px 0px 10px 5px #a142f4\n}", ""]);



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, (function (exports) { 'use strict';

  var eventsCache = []; // backup old handlers

  var _addEventListener = Element.prototype.addEventListener;
  var _removeEventListener = Element.prototype.removeEventListener; // new handler for adding listeners

  function _addListener(type, handler, useCapture) {
    if (_eventExists(this, type, handler, useCapture) === false) {
      eventsCache.push({
        target: this,
        type: type,
        handler: handler,
        useCapture: useCapture
      });
    }

    _addEventListener.call(this, type, handler, useCapture);
  } // check if event is in cache


  function _eventExists(target, type, handler, useCapture) {
    var e,
        len = eventsCache.length,
        i;

    for (i = 0; i < len; i++) {
      e = eventsCache[i];

      if (e.target === target && e.type === type && e.handler === handler && e.useCapture === useCapture) {
        return i;
      }
    }

    return false;
  } // new handler for removing listeners


  function _removeListener(type, handler, useCapture) {
    var pos = _eventExists(this, type, handler, useCapture);

    if (pos !== false && pos < eventsCache.length) {
      eventsCache.splice(pos, 1);
    }

    _removeEventListener.call(this, type, handler, useCapture);
  } // switch to new handlers


  Element.prototype.addEventListener = _addListener;
  Element.prototype.removeEventListener = _removeListener; // get current element listeners

  Element.prototype.getEventListeners = function () {
    var listeners = [],
        len = eventsCache.length,
        i;

    for (i = 0; i < len; i++) {
      if (eventsCache[i].target === this) {
        listeners.push(eventsCache[i]);
      }
    }

    return listeners;
  };

  document.__proto__.addEventListener = _addListener;
  document.__proto__.removeEventListener = _removeListener;
  document.__proto__.getEventListeners = Element.prototype.getEventListeners; // get all registered listeners

  function getAllEventListeners() {
    return eventsCache;
  } // get listeners of an element

  function getEventListeners(el) {
    return el.getEventListeners.bind(el);
  }
  window.getAllEventListeners = getAllEventListeners;
  window.getEventListeners = getEventListeners;

  exports.getAllEventListeners = getAllEventListeners;
  exports.getEventListeners = getEventListeners;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/style.css
var style = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@ulivz/get-event-listeners/dist/get-event-listeners.js
var get_event_listeners = __webpack_require__(8);

// EXTERNAL MODULE: ./src/images/expand.png
var expand = __webpack_require__(0);
var expand_default = /*#__PURE__*/__webpack_require__.n(expand);

// EXTERNAL MODULE: ./src/images/scroll-vertical-arrows.png
var scroll_vertical_arrows = __webpack_require__(1);
var scroll_vertical_arrows_default = /*#__PURE__*/__webpack_require__.n(scroll_vertical_arrows);

// EXTERNAL MODULE: ./src/images/roll-up.png
var images_roll_up = __webpack_require__(2);
var roll_up_default = /*#__PURE__*/__webpack_require__.n(images_roll_up);

// CONCATENATED MODULE: ./src/tii.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var tii_TestInterfaceImitator =
/*#__PURE__*/
function () {
  function TestInterfaceImitator() {
    _classCallCheck(this, TestInterfaceImitator);

    this.include_elements = '';
    this.exclude_elements = '';
    this.exclude_blocks = '';
    this.interval_timer = null;
    this.interval = 0;
    this.total_duration = 0;
    this.inner_element_listners = [];
    this.actually_target = '';
  }

  _createClass(TestInterfaceImitator, [{
    key: "init",
    value: function init() {
      var head = document.head;
      var body = document.body;
      this.plugin_wrapper = document.createElement('div');
      this.plugin_wrapper.id = 'test-interface-imitator-wrapeer';
      this.plugin_wrapper.classList.add('tii-right-position');
      body.appendChild(this.plugin_wrapper);
      var img_expand = document.createElement('img');
      img_expand.src = expand_default.a;
      img_expand.id = 'tii-img-expand';
      this.expand = document.createElement('div');
      this.expand.classList.add('tii-expand');
      this.expand.classList.add('display-none');
      this.expand.title = 'Expand plugin';
      this.expand.appendChild(img_expand);
      body.appendChild(this.expand);
      this.inner_element_listners.push(this.expand); // create header

      var img_toggle_position = document.createElement('img');
      img_toggle_position.src = scroll_vertical_arrows_default.a;
      img_toggle_position.id = 'tii-img-toggle-position';
      this.image_toggle_position_wrapper = document.createElement('div');
      this.image_toggle_position_wrapper.classList.add('tii-img-toggle-position-wrapper');
      this.image_toggle_position_wrapper.appendChild(img_toggle_position);
      this.inner_element_listners.push(this.image_toggle_position_wrapper);
      var roll_up = document.createElement('img');
      roll_up.src = roll_up_default.a;
      roll_up.id = 'tii-roll-up';
      this.roll_up_wrapper = document.createElement('div');
      this.roll_up_wrapper.classList.add('tii-roll-up-wrapper');
      this.roll_up_wrapper.title = 'Roll up plugin';
      this.roll_up_wrapper.appendChild(roll_up);
      this.inner_element_listners.push(this.roll_up_wrapper);
      var header_wrapper = document.createElement('div');
      header_wrapper.classList.add('tii-header');
      this.plugin_wrapper.appendChild(header_wrapper);
      header_wrapper.appendChild(this.image_toggle_position_wrapper);
      header_wrapper.appendChild(this.roll_up_wrapper); // create body

      var body_wrapper = document.createElement('div');
      body_wrapper.classList.add('tii-body-wrapper');
      this.plugin_wrapper.appendChild(body_wrapper); // create include input

      var include_input_wrapper = document.createElement('div');
      include_input_wrapper.classList.add('tii-include-input-wrapper');
      body_wrapper.appendChild(include_input_wrapper);
      var include_label = document.createElement('label');
      include_label["for"] = 'tii-include-elements';
      include_label.innerHTML = 'Include elements';
      include_input_wrapper.appendChild(include_label);
      this.include_input = document.createElement('input');
      this.include_input.name = this.include_input.id = 'tii-include-elements';
      this.include_input.placeholder = 'Enter selectors';
      include_input_wrapper.appendChild(this.include_input);
      this.inner_element_listners.push(this.include_input); // create exclude elements input

      var exclude_input_wrapper = document.createElement('div');
      exclude_input_wrapper.classList.add('tii-exclude-input-wrapper');
      body_wrapper.appendChild(exclude_input_wrapper);
      var exclude_label = document.createElement('label');
      exclude_label["for"] = 'tii-exclude-elements';
      exclude_label.innerHTML = 'Exclude elements';
      exclude_input_wrapper.appendChild(exclude_label);
      this.exclude_input = document.createElement('input');
      this.exclude_input.name = this.exclude_input.id = 'tii-exclude-elements';
      this.exclude_input.placeholder = 'Enter selectors';
      exclude_input_wrapper.appendChild(this.exclude_input);
      this.inner_element_listners.push(this.exclude_input); // create exclude blocks input

      var exclude_blocks_input_wrapper = document.createElement('div');
      exclude_blocks_input_wrapper.classList.add('tii-exclude-block-input-wrapper');
      body_wrapper.appendChild(exclude_blocks_input_wrapper);
      var exclude_blocks_label = document.createElement('label');
      exclude_blocks_label["for"] = 'tii-exclude-blocks';
      exclude_blocks_label.innerHTML = 'Exclude element and all children';
      exclude_blocks_input_wrapper.appendChild(exclude_blocks_label);
      this.exclude_blocks_input = document.createElement('input');
      this.exclude_blocks_input.name = this.exclude_blocks_input.id = 'tii-exclude-blocks';
      this.exclude_blocks_input.placeholder = 'Enter selectors';
      exclude_blocks_input_wrapper.appendChild(this.exclude_blocks_input);
      this.inner_element_listners.push(this.exclude_blocks_input); // create timers wrapper

      var timers_wrapper = document.createElement('div');
      timers_wrapper.classList.add('tii-timers-wrapper');
      body_wrapper.appendChild(timers_wrapper); // create intervar input

      var interval_input_wrapper = document.createElement('div');
      interval_input_wrapper.classList.add('tii-interval-input-wrapper');
      timers_wrapper.appendChild(interval_input_wrapper);
      var interval_label = document.createElement('label');
      interval_label["for"] = 'tii-interval-input';
      interval_label.innerHTML = 'Interval run listners';
      interval_input_wrapper.appendChild(interval_label);
      this.interval_input = document.createElement('input');
      this.interval_input.name = this.interval_input.id = 'tii-interval-input';
      this.interval_input.type = 'number';
      this.interval_input.step = '100';
      this._interval = this.interval_input.value = 1000;
      interval_input_wrapper.appendChild(this.interval_input);
      this.inner_element_listners.push(this.interval_input);
      var format_interval = document.createElement('div');
      format_interval.classList.add('tii-format-time');
      format_interval.innerHTML = 'ms';
      interval_input_wrapper.appendChild(format_interval); // create total duration input

      var total_duration_input_wrapper = document.createElement('div');
      total_duration_input_wrapper.classList.add('tii-total-duration-input-wrapper');
      timers_wrapper.appendChild(total_duration_input_wrapper);
      var total_duration_label = document.createElement('label');
      total_duration_label["for"] = 'tii-total-duration-input';
      total_duration_label.innerHTML = 'Total duration test';
      total_duration_input_wrapper.appendChild(total_duration_label);
      this.total_duration_input = document.createElement('input');
      this.total_duration_input.name = this.total_duration_input.id = 'tii-total-duration-input';
      this.total_duration_input.type = 'number';
      this.total_duration_input.step = '100';
      this._total_duration = this.total_duration_input.value = 10000;
      total_duration_input_wrapper.appendChild(this.total_duration_input);
      this.inner_element_listners.push(this.total_duration_input);
      var format_duration = document.createElement('div');
      format_duration.classList.add('tii-format-time');
      format_duration.innerHTML = 'ms';
      total_duration_input_wrapper.appendChild(format_duration); // create button start test

      var button_wrapper = document.createElement('div');
      button_wrapper.classList.add('tii-button-wrapper');
      this.plugin_wrapper.appendChild(button_wrapper);
      this.button_start = document.createElement('button');
      this.button_start.classList.add('tii-button');
      this.button_start.innerHTML = 'Start test';
      button_wrapper.appendChild(this.button_start);
      this.inner_element_listners.push(this.button_start);
    }
  }, {
    key: "addListners",
    value: function addListners() {
      this.image_toggle_position_wrapper.addEventListener('click', function () {
        if (this.plugin_wrapper.classList[0] === 'tii-right-position') {
          this.plugin_wrapper.classList.remove('tii-right-position');
          this.plugin_wrapper.classList.add('tii-left-position');
        } else if (this.plugin_wrapper.classList[0] === 'tii-left-position') {
          this.plugin_wrapper.classList.add('tii-right-position');
          this.plugin_wrapper.classList.remove('tii-left-position');
        }
      }.bind(this));
      this.include_input.addEventListener('input', function (event) {
        this.include_elements = event.target.value;
      }.bind(this));
      this.include_input.addEventListener('focus', function (event) {
        this.actually_target = 'include';
      }.bind(this));
      this.exclude_input.addEventListener('input', function (event) {
        this.exclude_elements = event.target.value;
      }.bind(this));
      this.exclude_input.addEventListener('focus', function (event) {
        this.actually_target = 'exclude';
      }.bind(this));
      this.exclude_blocks_input.addEventListener('input', function (event) {
        this.exclude_blocks = event.target.value;
      }.bind(this));
      this.exclude_blocks_input.addEventListener('focus', function (event) {
        this.actually_target = 'exclude_blocks';
      }.bind(this));
      this.interval_input.addEventListener('input', function (event) {
        this.interval = event.target.value = parseInt(Math.round(event.target.value));
      }.bind(this));
      this.total_duration_input.addEventListener('input', function (event) {
        this.total_duration = event.target.value = parseInt(Math.round(event.target.value));
      }.bind(this));
      this.button_start.addEventListener('click', this.initTest.bind(this));
      this.roll_up_wrapper.addEventListener('click', function () {
        this.removeContextmenuListners();
        this.plugin_wrapper.classList.add('display-none');
        this.expand.classList.remove('display-none');
      }.bind(this));
      this.expand.addEventListener('click', function () {
        this.addContextmenuListners();
        this.plugin_wrapper.classList.remove('display-none');
        this.expand.classList.add('display-none');
      }.bind(this));
    }
  }, {
    key: "initTest",
    value: function initTest() {
      var includes = this.include_elements.split(',');
      var excludes = this.exclude_elements.split(',');
      var excludes_blocks = this.exclude_blocks.split(',');
      this.selected_listners = this.allEventListners.filter(function (listner) {
        var listner_include = includes.some(function (selector) {
          if (selector.length === 0) return false;

          try {
            var element = document.querySelector(selector);
            if (element === listner.target) return true;else return false;
          } catch (error) {
            console.log('error', error);
          }
        }.bind(this));
        var listner_exclude = excludes.some(function (selector) {
          if (selector.length === 0) return false;

          try {
            var element = document.querySelector(selector);
            if (element === listner.target) return true;else return false;
          } catch (error) {
            console.log('error', error);
          }
        }.bind(this));
        var listner_exclude_block = excludes_blocks.some(function (selector) {
          if (selector.length === 0) return false;

          try {
            if (listner.target.closest(selector)) {
              return true;
            } else {
              return false;
            }
          } catch (error) {
            console.log('error', error);
          }
        }.bind(this));

        if (listner_include && !listner_exclude && !listner_exclude_block) {
          return listner;
        }
      }.bind(this));

      if (this.selected_listners.length > 0 && this.interval > 0) {
        this.not_called_listners = this.selected_listners.map(function (a) {
          return _objectSpread({}, a);
        });
        clearInterval(this.interval_timer);
        this.interval_timer = null;
        this.interval_timer = setInterval(this.randomCallListners.bind(this), this.interval);
        setTimeout(function () {
          clearInterval(this.interval_timer);
          this.interval_timer = null;
        }.bind(this), this.total_duration);
      }
    }
  }, {
    key: "randomCallListners",
    value: function randomCallListners() {
      if (this.not_called_listners.length === 0) {
        this.not_called_listners = this.selected_listners.map(function (a) {
          return _objectSpread({}, a);
        });
      }

      var random_number = Math.floor(Math.random() * this.not_called_listners.length);
      this.not_called_listners[random_number].handler(this.not_called_listners[random_number].target);
      this.not_called_listners.splice(random_number, 1);
    }
  }, {
    key: "getAllSelectorsOfListner",
    value: function getAllSelectorsOfListner(listner) {
      var selector = '';

      if (listner.target.id && listner.target.id.length > 0) {
        selector += "#".concat(listner.target.id);
      }

      if (listner.target.classList && listner.target.classList.length > 0) {
        listner.target.classList.forEach(function (class_name) {
          if (class_name !== 'tii-element-with-listner') {
            selector += ".".concat(class_name);
          }
        });
      }

      return selector;
    }
  }, {
    key: "addSelectors",
    value: function addSelectors(input_type, listner) {
      var selector = this.getAllSelectorsOfListner(listner);

      if (input_type === 'include') {
        if (this._include_elements.length === 0) {
          this._include_elements = selector;
        } else {
          var regex = new RegExp(selector);
          if (this._include_elements.match(regex)) return;
          this._include_elements = "".concat(this._include_elements, ", ").concat(selector);
        }
      } else if (input_type === 'exclude') {
        if (this._exclude_elements.length === 0) {
          this._exclude_elements = selector;
        } else {
          var _regex = new RegExp(selector);

          if (this._exclude_elements.match(_regex)) return;
          this._exclude_elements = "".concat(this._exclude_elements, ", ").concat(selector);
        }
      } else if (input_type === 'exclude_blocks') {
        if (this._exclude_blocks.length === 0) {
          this._exclude_blocks = selector;
        } else {
          var _regex2 = new RegExp(selector);

          if (this._exclude_blocks.match(_regex2)) return;
          this._exclude_blocks = "".concat(this._exclude_blocks, ", ").concat(selector);
        }
      }
    }
  }, {
    key: "getSelectorByContextMenuAndCtrl",
    value: function getSelectorByContextMenuAndCtrl(listner, event) {
      event.preventDefault();

      if (event.ctrlKey && this.actually_target) {
        event.stopPropagation();
        this.addSelectors(this.actually_target, listner);
      }
    }
  }, {
    key: "addContextmenuListners",
    value: function addContextmenuListners() {
      this.allEventListners.forEach(function (listner) {
        listner.target.classList.add('tii-element-with-listner');
        listner.target.addEventListener('contextmenu', this.getSelectorByContextMenuAndCtrl.bind(this, listner), true);
      }.bind(this));
    }
  }, {
    key: "removeContextmenuListners",
    value: function removeContextmenuListners() {
      this.allEventListners.forEach(function (listner) {
        listner.target.classList.remove('tii-element-with-listner');
        listner.target.removeEventListener('contextmenu', this.getSelectorByContextMenuAndCtrl.bind(this, listner), true);
      }.bind(this));
    }
  }, {
    key: "filterListners",
    value: function filterListners(all_listners) {
      var init_include_selectors = '';
      this.allEventListners = all_listners.filter(function (listner, index) {
        var exist_inner_element = this.inner_element_listners.includes(listner.target);

        if (!exist_inner_element && listner.target.nodeName !== '#document' && listner.target.nodeName !== 'A') {
          init_include_selectors += index === 0 ? this.getAllSelectorsOfListner(listner) : ", ".concat(this.getAllSelectorsOfListner(listner));
          return true;
        } else false;
      }.bind(this));
      this._include_elements = init_include_selectors;
    }
  }, {
    key: "_include_elements",
    set: function set(newVal) {
      this.include_input.value = this.include_elements = newVal;
    },
    get: function get() {
      return this.include_elements;
    }
  }, {
    key: "_exclude_elements",
    set: function set(newVal) {
      this.exclude_input.value = this.exclude_elements = newVal;
    },
    get: function get() {
      return this.exclude_elements;
    }
  }, {
    key: "_exclude_blocks",
    set: function set(newVal) {
      this.exclude_blocks_input.value = this.exclude_blocks = newVal;
    },
    get: function get() {
      return this.exclude_blocks;
    }
  }, {
    key: "_interval",
    set: function set(newVal) {
      this.interval = newVal;
    }
  }, {
    key: "_total_duration",
    set: function set(newVal) {
      this.total_duration = newVal;
    }
  }]);

  return TestInterfaceImitator;
}();


// CONCATENATED MODULE: ./src/index.js


 // function addTestTemplate() {
//     var compile = require("./test.html")
//     var template = compile()
//     document.body.innerHTML = template
//     let test_div = document.querySelector('.test-square')
//     test_div.addEventListener('click', function(){
//         console.log('wrapper')
//     })
//     let test_button = document.querySelector('.test-square button')
//     test_button.addEventListener('dbclick', function(){
//         alert('button')
//     })
// }

function initOnloadWindow() {
  var tii = new tii_TestInterfaceImitator();
  tii.init();
  tii.addListners();
  tii.filterListners(window.getAllEventListeners());
  tii.addContextmenuListners();
  console.log('tii', tii); // TODO
  // events that block another event
  // get events from ifames
  // block all <a>
} // if(ENV === 'dev') {
//     addTestTemplate()
//     initOnloadWindow()
// }


/* harmony default export */ var src = __webpack_exports__["default"] = (initOnloadWindow);

/***/ })
/******/ ])["default"];
});