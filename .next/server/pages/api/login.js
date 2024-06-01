"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/db */ \"(api)/./utils/db.js\");\n// pages/api/login.js\n\nasync function handler(req, res) {\n    const { email , password  } = req.body;\n    const result = await (0,_utils_db__WEBPACK_IMPORTED_MODULE_0__.query)(`SELECT * FROM users WHERE email = ? AND password = ?`, [\n        email,\n        password\n    ]);\n    if (result.length > 0) {\n        res.status(200).json(result[0]);\n    } else {\n        res.status(401).json({\n            error: \"Invalid credentials\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQkFBcUI7QUFDa0I7QUFFeEIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNLEVBQUVDLEtBQUssR0FBRUMsUUFBUSxHQUFFLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtJQUNwQyxNQUFNQyxNQUFNLEdBQUcsTUFBTVAsZ0RBQUssQ0FDeEIsQ0FBQyxvREFBb0QsQ0FBQyxFQUN0RDtRQUFDSSxLQUFLO1FBQUVDLFFBQVE7S0FBQyxDQUNsQjtJQUNELElBQUlFLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNyQkwsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsT0FBTztRQUNMSixHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSxxQkFBcUI7U0FBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbHdlYnMvLi9wYWdlcy9hcGkvbG9naW4uanM/YWU4OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvbG9naW4uanNcclxuaW1wb3J0IHsgcXVlcnkgfSBmcm9tICcuLi8uLi91dGlscy9kYic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHF1ZXJ5KFxyXG4gICAgYFNFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgZW1haWwgPSA/IEFORCBwYXNzd29yZCA9ID9gLFxyXG4gICAgW2VtYWlsLCBwYXNzd29yZF1cclxuICApO1xyXG4gIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzdWx0WzBdKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogJ0ludmFsaWQgY3JlZGVudGlhbHMnIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsicXVlcnkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJyZXN1bHQiLCJsZW5ndGgiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"query\": () => (/* binding */ query)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n// utils/db.js\n\nasync function query(sql, values) {\n    const db = await mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n        host: \"localhost\",\n        user: \"root\",\n        password: \"root\",\n        database: \"aa\"\n    });\n    const [results] = await db.execute(sql, values);\n    db.end();\n    return results;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxjQUFjO0FBQ3FCO0FBRTVCLGVBQWVDLEtBQUssQ0FBQ0MsR0FBRyxFQUFFQyxNQUFNLEVBQUU7SUFDdkMsTUFBTUMsRUFBRSxHQUFHLE1BQU1KLHNFQUFzQixDQUFDO1FBQ3RDTSxJQUFJLEVBQUUsV0FBVztRQUNqQkMsSUFBSSxFQUFFLE1BQU07UUFDWkMsUUFBUSxFQUFFLE1BQU07UUFDaEJDLFFBQVEsRUFBRSxJQUFJO0tBQ2YsQ0FBQztJQUNGLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsTUFBTU4sRUFBRSxDQUFDTyxPQUFPLENBQUNULEdBQUcsRUFBRUMsTUFBTSxDQUFDO0lBQy9DQyxFQUFFLENBQUNRLEdBQUcsRUFBRSxDQUFDO0lBQ1QsT0FBT0YsT0FBTyxDQUFDO0FBQ2pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbHdlYnMvLi91dGlscy9kYi5qcz83Y2IyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHV0aWxzL2RiLmpzXHJcbmltcG9ydCBteXNxbCBmcm9tICdteXNxbDIvcHJvbWlzZSc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcXVlcnkoc3FsLCB2YWx1ZXMpIHtcclxuICBjb25zdCBkYiA9IGF3YWl0IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgICB1c2VyOiAncm9vdCcsXHJcbiAgICBwYXNzd29yZDogJ3Jvb3QnLFxyXG4gICAgZGF0YWJhc2U6ICdhYScsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3Jlc3VsdHNdID0gYXdhaXQgZGIuZXhlY3V0ZShzcWwsIHZhbHVlcyk7XHJcbiAgZGIuZW5kKCk7XHJcbiAgcmV0dXJuIHJlc3VsdHM7XHJcbn1cclxuICJdLCJuYW1lcyI6WyJteXNxbCIsInF1ZXJ5Iiwic3FsIiwidmFsdWVzIiwiZGIiLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwicmVzdWx0cyIsImV4ZWN1dGUiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();