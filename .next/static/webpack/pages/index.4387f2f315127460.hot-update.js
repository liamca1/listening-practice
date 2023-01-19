"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/AudioPlayer.js":
/*!***********************************!*\
  !*** ./components/AudioPlayer.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AudioPlayer\": function() { return /* binding */ AudioPlayer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/audioPlayer.module.css */ \"./styles/audioPlayer.module.css\");\n/* harmony import */ var _styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar AudioPlayer = function() {\n    var ref, ref1;\n    _s();\n    // state\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isPlaying = ref2[0], setIsPlaying = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isDownloading = ref3[0], setIsDownloading = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), duration = ref4[0], setDuration = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentTime = ref5[0], setCurrentTime = ref5[1];\n    // references\n    var audioPlayer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // references audio component\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // const seconds = Math.floor(audioPlayer.current.duration);\n        setDuration(audioPlayer.current.duration);\n    }, [\n        audioPlayer === null || audioPlayer === void 0 ? void 0 : (ref = audioPlayer.current) === null || ref === void 0 ? void 0 : ref.loadedmetadata,\n        audioPlayer === null || audioPlayer === void 0 ? void 0 : (ref1 = audioPlayer.current) === null || ref1 === void 0 ? void 0 : ref1.readyState\n    ]);\n    var calculateTime = function(secs) {\n        var minutes = Math.floor(secs / 60);\n        var returnedMinutes = minutes < 10 ? \"0\".concat(minutes) : \"\".concat(minutes);\n        var seconds = Math.floor(secs % 60);\n        var returnedSeconds = seconds < 10 ? \"0\".concat(seconds) : \"\".concat(seconds);\n        return \"\".concat(returnedMinutes, \" : \").concat(returnedSeconds);\n    };\n    // toggles\n    var toggleDownloadStatus = function() {\n        setIsDownloading(!isDownloading);\n    };\n    var togglePlayPause = function() {\n        var prevValue = isPlaying;\n        setIsPlaying(!prevValue);\n        if (!prevValue) {\n            audioPlayer.current.play();\n        } else {\n            audioPlayer.current.pause();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                ref: audioPlayer,\n                src: \"https://res.cloudinary.com/dye2elyds/video/upload/v1673963371/Listening%20Practice/080108-005_fb0pfn.wav\",\n                preload: \"metadata\"\n            }, void 0, false, {\n                fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().latestAudioPlayer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().details),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().latest),\n                                children: \"Latest\"\n                            }, void 0, false, {\n                                fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().latestRight),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().a),\n                                        children: \"01/02/2023\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().artist),\n                                        children: \"Artist\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().player),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().playerTop),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().a),\n                                        children: \"track title\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().artist1),\n                                        children: \"artist\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().playerBottom),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: togglePlayPause,\n                                        className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().play),\n                                        children: isPlaying ? \"pause\" : \"play\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().span),\n                                        children: [\n                                            calculateTime(currentTime),\n                                            \" / \",\n                                            calculateTime(duration)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: toggleDownloadStatus,\n                                        className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().pause),\n                                        children: isDownloading ? \"downloading\" : \"download\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, _this);\n};\n_s(AudioPlayer, \"PplIXau/dQzWosGpOaMcsUk33es=\");\n_c = AudioPlayer;\n\nvar _c;\n$RefreshReg$(_c, \"AudioPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxPQUFPLEdBQUcsTUFBTTs7Ozs7NkNBQ3RCO2tEQUVULDhEQUFDd0IsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFFNUIsNEVBQVc7OzRDQUN4QmMsYUFBYSxDQUFDTCxXQUFXLENBQUM7NENBQUMsS0FBRzs0Q0FBQ0ssYUFBYSxDQUFDUCxRQUFRLENBQUM7Ozs7Ozs2Q0FDbkQ7a0RBRU4sOERBQUNzQyxRQUFNO3dDQUFDQyxPQUFPLEVBQUV4QixvQkFBb0I7d0NBQUVNLFNBQVMsRUFBRTVCLDZFQUFZO2tEQUMzREssYUFBYSxHQUFHLGFBQWEsR0FBRyxVQUFVOzs7Ozs2Q0FDcEM7Ozs7OztxQ0FDTDs7Ozs7OzZCQUNGOzs7Ozs7cUJBQ0Y7Ozs7OzthQUNGLENBQ047QUFDSixDQUFDO0dBMUVLSixXQUFXO0FBQVhBLEtBQUFBLFdBQVc7QUE0RU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdWRpb1BsYXllci5qcz8xOGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9hdWRpb1BsYXllci5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IEF1ZGlvUGxheWVyID0gKCkgPT4ge1xuICAvLyBzdGF0ZVxuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNEb3dubG9hZGluZywgc2V0SXNEb3dubG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjdXJyZW50VGltZSwgc2V0Q3VycmVudFRpbWVdID0gdXNlU3RhdGUoMCk7XG5cbiAgLy8gcmVmZXJlbmNlc1xuICBjb25zdCBhdWRpb1BsYXllciA9IHVzZVJlZigpOyAvLyByZWZlcmVuY2VzIGF1ZGlvIGNvbXBvbmVudFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoYXVkaW9QbGF5ZXIuY3VycmVudC5kdXJhdGlvbik7XG4gICAgc2V0RHVyYXRpb24oYXVkaW9QbGF5ZXIuY3VycmVudC5kdXJhdGlvbik7XG4gIH0sIFthdWRpb1BsYXllcj8uY3VycmVudD8ubG9hZGVkbWV0YWRhdGEsIGF1ZGlvUGxheWVyPy5jdXJyZW50Py5yZWFkeVN0YXRlXSk7XG5cbiAgY29uc3QgY2FsY3VsYXRlVGltZSA9IChzZWNzKSA9PiB7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3Ioc2VjcyAvIDYwKTtcbiAgICBjb25zdCByZXR1cm5lZE1pbnV0ZXMgPSBtaW51dGVzIDwgMTAgPyBgMCR7bWludXRlc31gIDogYCR7bWludXRlc31gO1xuICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKHNlY3MgJSA2MCk7XG4gICAgY29uc3QgcmV0dXJuZWRTZWNvbmRzID0gc2Vjb25kcyA8IDEwID8gYDAke3NlY29uZHN9YCA6IGAke3NlY29uZHN9YDtcbiAgICByZXR1cm4gYCR7cmV0dXJuZWRNaW51dGVzfSA6ICR7cmV0dXJuZWRTZWNvbmRzfWA7XG4gIH07XG5cbiAgLy8gdG9nZ2xlc1xuICBjb25zdCB0b2dnbGVEb3dubG9hZFN0YXR1cyA9ICgpID0+IHtcbiAgICBzZXRJc0Rvd25sb2FkaW5nKCFpc0Rvd25sb2FkaW5nKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVQbGF5UGF1c2UgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJldlZhbHVlID0gaXNQbGF5aW5nO1xuICAgIHNldElzUGxheWluZyghcHJldlZhbHVlKTtcbiAgICBpZiAoIXByZXZWYWx1ZSkge1xuICAgICAgYXVkaW9QbGF5ZXIuY3VycmVudC5wbGF5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF1ZGlvUGxheWVyLmN1cnJlbnQucGF1c2UoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIDxhdWRpb1xuICAgICAgICByZWY9e2F1ZGlvUGxheWVyfVxuICAgICAgICBzcmM9XCJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9keWUyZWx5ZHMvdmlkZW8vdXBsb2FkL3YxNjczOTYzMzcxL0xpc3RlbmluZyUyMFByYWN0aWNlLzA4MDEwOC0wMDVfZmIwcGZuLndhdlwiXG4gICAgICAgIHByZWxvYWQ9XCJtZXRhZGF0YVwiXG4gICAgICA+PC9hdWRpbz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF0ZXN0QXVkaW9QbGF5ZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbHN9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5sYXRlc3R9PkxhdGVzdDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYXRlc3RSaWdodH0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5hfT4wMS8wMi8yMDIzPC9hPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcnRpc3R9PkFydGlzdDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wbGF5ZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheWVyVG9wfT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmF9PnRyYWNrIHRpdGxlPC9hPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aXN0MX0+YXJ0aXN0PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheWVyQm90dG9tfT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlUGxheVBhdXNlfSBjbGFzc05hbWU9e3N0eWxlcy5wbGF5fT5cbiAgICAgICAgICAgICAge2lzUGxheWluZyA/IFwicGF1c2VcIiA6IFwicGxheVwifVxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3Bhbn0+XG4gICAgICAgICAgICAgIHtjYWxjdWxhdGVUaW1lKGN1cnJlbnRUaW1lKX0gLyB7Y2FsY3VsYXRlVGltZShkdXJhdGlvbil9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEb3dubG9hZFN0YXR1c30gY2xhc3NOYW1lPXtzdHlsZXMucGF1c2V9PlxuICAgICAgICAgICAgICB7aXNEb3dubG9hZGluZyA/IFwiZG93bmxvYWRpbmdcIiA6IFwiZG93bmxvYWRcIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IHsgQXVkaW9QbGF5ZXIgfTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiQXVkaW9QbGF5ZXIiLCJhdWRpb1BsYXllciIsImlzUGxheWluZyIsInNldElzUGxheWluZyIsImlzRG93bmxvYWRpbmciLCJzZXRJc0Rvd25sb2FkaW5nIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsImN1cnJlbnRUaW1lIiwic2V0Q3VycmVudFRpbWUiLCJjdXJyZW50IiwibG9hZGVkbWV0YWRhdGEiLCJyZWFkeVN0YXRlIiwiY2FsY3VsYXRlVGltZSIsInNlY3MiLCJtaW51dGVzIiwiTWF0aCIsImZsb29yIiwicmV0dXJuZWRNaW51dGVzIiwic2Vjb25kcyIsInJldHVybmVkU2Vjb25kcyIsInRvZ2dsZURvd25sb2FkU3RhdHVzIiwidG9nZ2xlUGxheVBhdXNlIiwicHJldlZhbHVlIiwicGxheSIsInBhdXNlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImF1ZGlvIiwicmVmIiwic3JjIiwicHJlbG9hZCIsImxhdGVzdEF1ZGlvUGxheWVyIiwiZGV0YWlscyIsImgxIiwibGF0ZXN0IiwibGF0ZXN0UmlnaHQiLCJhIiwiYXJ0aXN0IiwicGxheWVyIiwicGxheWVyVG9wIiwiYXJ0aXN0MSIsInBsYXllckJvdHRvbSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AudioPlayer.js\n"));

/***/ })

});