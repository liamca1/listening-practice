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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AudioPlayer\": function() { return /* binding */ AudioPlayer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/audioPlayer.module.css */ \"./styles/audioPlayer.module.css\");\n/* harmony import */ var _styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar AudioPlayer = function() {\n    var ref, ref1;\n    _s();\n    // state\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isPlaying = ref2[0], setIsPlaying = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isDownloading = ref3[0], setIsDownloading = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), duration = ref4[0], setDuration = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), currentTime = ref5[0], setCurrentTime = ref5[1];\n    // references\n    var audioPlayer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // references audio component\n    var progressBar = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // reference our progress bar\n    var animationRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // reference the animation\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var seconds = Math.floor(audioPlayer.current.duration);\n        setDuration(audioPlayer.current.duration);\n    }, [\n        audioPlayer === null || audioPlayer === void 0 ? void 0 : (ref = audioPlayer.current) === null || ref === void 0 ? void 0 : ref.loadedmetadata,\n        audioPlayer === null || audioPlayer === void 0 ? void 0 : (ref1 = audioPlayer.current) === null || ref1 === void 0 ? void 0 : ref1.readyState\n    ]);\n    var calculateTime = function(secs) {\n        var minutes = Math.floor(secs / 60);\n        var returnedMinutes = minutes < 10 ? \"0\".concat(minutes) : \"\".concat(minutes);\n        var seconds = Math.floor(secs % 60);\n        var returnedSeconds = seconds < 10 ? \"0\".concat(seconds) : \"\".concat(seconds);\n        return \"\".concat(returnedMinutes, \" : \").concat(returnedSeconds);\n    };\n    // toggles\n    var toggleDownloadStatus = function() {\n        setIsDownloading(!isDownloading);\n    };\n    var togglePlayPause = function() {\n        var prevValue = isPlaying;\n        setIsPlaying(!prevValue);\n        if (!prevValue) {\n            audioPlayer.current.play();\n            animationRef.current = requestAnimationFrame(whilePlaying);\n        } else {\n            audioPlayer.current.pause();\n            cancelAnimationFrame(animationRef.current);\n        }\n    };\n    var whilePlaying = function() {\n        progressBar.current.value = audioPlayer.current.currentTime;\n        changePlayerCurrentTime();\n        animationRef.current = requestAnimationFrame(whilePlaying);\n    };\n    var changeRange = function() {\n        audioPlayer.current.currentTime = progressBar.current.value;\n        changePlayerCurrentTime();\n    };\n    var changePlayerCurrentTime = function() {\n        progressBar.current.style.setProperty(\"--seek-before-width\", \"\".concat(progressBar.current.value / duration * 100, \"%\"));\n        setCurrentTime(progressBar.current.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"audio\", {\n                ref: audioPlayer,\n                src: \"https://res.cloudinary.com/dye2elyds/video/upload/v1673963371/Listening%20Practice/080108-005_fb0pfn.wav\",\n                preload: \"metadata\"\n            }, void 0, false, {\n                fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().latestAudioPlayer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().details),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().latest),\n                                children: \"Latest\"\n                            }, void 0, false, {\n                                fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().latestRight),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().a),\n                                        children: \"01/02/2023\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().artist),\n                                        children: \"Artist\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().player),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().playerTop),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().a),\n                                        children: \"track title\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().artist1),\n                                        children: \"artist\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().playerBottom),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: togglePlayPause,\n                                        className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().play),\n                                        children: isPlaying ? \"pause\" : \"play\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().span),\n                                        children: [\n                                            calculateTime(currentTime),\n                                            \" /\",\n                                            \" \",\n                                            duration && !isNaN(duration) && calculateTime(duration)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().progressBar),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"range\",\n                                            className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().progressBar),\n                                            defaultValue: \"0\",\n                                            ref: progressBar,\n                                            onChange: changeRange\n                                        }, void 0, false, {\n                                            fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                            lineNumber: 97,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: toggleDownloadStatus,\n                                        className: (_styles_audioPlayer_module_css__WEBPACK_IMPORTED_MODULE_2___default().pause),\n                                        children: isDownloading ? \"downloading\" : \"download\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                        lineNumber: 106,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/liamcarroll/Downloads/listening practice/components/AudioPlayer.js\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, _this);\n};\n_s(AudioPlayer, \"r1vdtPkcE3WUvrwL+xnMytsxniE=\");\n_c = AudioPlayer;\n\nvar _c;\n$RefreshReg$(_c, \"AudioPlayer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNDLFNBQVMsRUFBRXRDLDRFQUFXOzs0Q0FDeEJtQixhQUFhLENBQUNWLFdBQVcsQ0FBQzs0Q0FBQyxJQUFFOzRDQUFDLEdBQUc7NENBQ2pDRixRQUFRLElBQUksQ0FBQ21ELEtBQUssQ0FBQ25ELFFBQVEsQ0FBQyxJQUFJWSxhQUFhLENBQUNaLFFBQVEsQ0FBQzs7Ozs7OzZDQUNwRDtrREFHTiw4REFBQzhCLEtBQUc7d0NBQUNDLFNBQVMsRUFBRXRDLG1GQUFrQjtrREFDaEMsNEVBQUMyRCxPQUFLOzRDQUNKQyxJQUFJLEVBQUMsT0FBTzs0Q0FDWnRCLFNBQVMsRUFBRXRDLG1GQUFrQjs0Q0FDN0I2RCxZQUFZLEVBQUMsR0FBRzs0Q0FDaEJwQixHQUFHLEVBQUU5QixXQUFXOzRDQUNoQm1ELFFBQVEsRUFBRTVCLFdBQVc7Ozs7O2lEQUNyQjs7Ozs7NkNBQ0U7a0RBRU4sOERBQUNxQixRQUFNO3dDQUFDQyxPQUFPLEVBQUVoQyxvQkFBb0I7d0NBQUVjLFNBQVMsRUFBRXRDLDZFQUFZO2tEQUMzREssYUFBYSxHQUFHLGFBQWEsR0FBRyxVQUFVOzs7Ozs2Q0FDcEM7Ozs7OztxQ0FDTDs7Ozs7OzZCQUNGOzs7Ozs7cUJBQ0Y7Ozs7OzthQUNGLENBQ047QUFDSixDQUFDO0dBOUdLSixXQUFXO0FBQVhBLEtBQUFBLFdBQVc7QUFnSE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdWRpb1BsYXllci5qcz8xOGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9hdWRpb1BsYXllci5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IEF1ZGlvUGxheWVyID0gKCkgPT4ge1xuICAvLyBzdGF0ZVxuICBjb25zdCBbaXNQbGF5aW5nLCBzZXRJc1BsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNEb3dubG9hZGluZywgc2V0SXNEb3dubG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtjdXJyZW50VGltZSwgc2V0Q3VycmVudFRpbWVdID0gdXNlU3RhdGUoMCk7XG5cbiAgLy8gcmVmZXJlbmNlc1xuICBjb25zdCBhdWRpb1BsYXllciA9IHVzZVJlZigpOyAvLyByZWZlcmVuY2VzIGF1ZGlvIGNvbXBvbmVudFxuICBjb25zdCBwcm9ncmVzc0JhciA9IHVzZVJlZigpOyAvLyByZWZlcmVuY2Ugb3VyIHByb2dyZXNzIGJhclxuICBjb25zdCBhbmltYXRpb25SZWYgPSB1c2VSZWYoKTsgLy8gcmVmZXJlbmNlIHRoZSBhbmltYXRpb25cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKGF1ZGlvUGxheWVyLmN1cnJlbnQuZHVyYXRpb24pO1xuICAgIHNldER1cmF0aW9uKGF1ZGlvUGxheWVyLmN1cnJlbnQuZHVyYXRpb24pO1xuICB9LCBbYXVkaW9QbGF5ZXI/LmN1cnJlbnQ/LmxvYWRlZG1ldGFkYXRhLCBhdWRpb1BsYXllcj8uY3VycmVudD8ucmVhZHlTdGF0ZV0pO1xuXG4gIGNvbnN0IGNhbGN1bGF0ZVRpbWUgPSAoc2VjcykgPT4ge1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHNlY3MgLyA2MCk7XG4gICAgY29uc3QgcmV0dXJuZWRNaW51dGVzID0gbWludXRlcyA8IDEwID8gYDAke21pbnV0ZXN9YCA6IGAke21pbnV0ZXN9YDtcbiAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcihzZWNzICUgNjApO1xuICAgIGNvbnN0IHJldHVybmVkU2Vjb25kcyA9IHNlY29uZHMgPCAxMCA/IGAwJHtzZWNvbmRzfWAgOiBgJHtzZWNvbmRzfWA7XG4gICAgcmV0dXJuIGAke3JldHVybmVkTWludXRlc30gOiAke3JldHVybmVkU2Vjb25kc31gO1xuICB9O1xuXG4gIC8vIHRvZ2dsZXNcbiAgY29uc3QgdG9nZ2xlRG93bmxvYWRTdGF0dXMgPSAoKSA9PiB7XG4gICAgc2V0SXNEb3dubG9hZGluZyghaXNEb3dubG9hZGluZyk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlUGxheVBhdXNlID0gKCkgPT4ge1xuICAgIGNvbnN0IHByZXZWYWx1ZSA9IGlzUGxheWluZztcbiAgICBzZXRJc1BsYXlpbmcoIXByZXZWYWx1ZSk7XG4gICAgaWYgKCFwcmV2VmFsdWUpIHtcbiAgICAgIGF1ZGlvUGxheWVyLmN1cnJlbnQucGxheSgpO1xuICAgICAgYW5pbWF0aW9uUmVmLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUod2hpbGVQbGF5aW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXVkaW9QbGF5ZXIuY3VycmVudC5wYXVzZSgpO1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uUmVmLmN1cnJlbnQpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB3aGlsZVBsYXlpbmcgPSAoKSA9PiB7XG4gICAgcHJvZ3Jlc3NCYXIuY3VycmVudC52YWx1ZSA9IGF1ZGlvUGxheWVyLmN1cnJlbnQuY3VycmVudFRpbWU7XG4gICAgY2hhbmdlUGxheWVyQ3VycmVudFRpbWUoKTtcbiAgICBhbmltYXRpb25SZWYuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh3aGlsZVBsYXlpbmcpO1xuICB9O1xuXG4gIGNvbnN0IGNoYW5nZVJhbmdlID0gKCkgPT4ge1xuICAgIGF1ZGlvUGxheWVyLmN1cnJlbnQuY3VycmVudFRpbWUgPSBwcm9ncmVzc0Jhci5jdXJyZW50LnZhbHVlO1xuICAgIGNoYW5nZVBsYXllckN1cnJlbnRUaW1lKCk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlUGxheWVyQ3VycmVudFRpbWUgPSAoKSA9PiB7XG4gICAgcHJvZ3Jlc3NCYXIuY3VycmVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgIFwiLS1zZWVrLWJlZm9yZS13aWR0aFwiLFxuICAgICAgYCR7KHByb2dyZXNzQmFyLmN1cnJlbnQudmFsdWUgLyBkdXJhdGlvbikgKiAxMDB9JWBcbiAgICApO1xuICAgIHNldEN1cnJlbnRUaW1lKHByb2dyZXNzQmFyLmN1cnJlbnQudmFsdWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICA8YXVkaW9cbiAgICAgICAgcmVmPXthdWRpb1BsYXllcn1cbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHllMmVseWRzL3ZpZGVvL3VwbG9hZC92MTY3Mzk2MzM3MS9MaXN0ZW5pbmclMjBQcmFjdGljZS8wODAxMDgtMDA1X2ZiMHBmbi53YXZcIlxuICAgICAgICBwcmVsb2FkPVwibWV0YWRhdGFcIlxuICAgICAgPjwvYXVkaW8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhdGVzdEF1ZGlvUGxheWVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxzfT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMubGF0ZXN0fT5MYXRlc3Q8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGF0ZXN0UmlnaHR9PlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuYX0+MDEvMDIvMjAyMzwvYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aXN0fT5BcnRpc3Q8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheWVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsYXllclRvcH0+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5hfT50cmFjayB0aXRsZTwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmFydGlzdDF9PmFydGlzdDwvYT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGxheWVyQm90dG9tfT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlUGxheVBhdXNlfSBjbGFzc05hbWU9e3N0eWxlcy5wbGF5fT5cbiAgICAgICAgICAgICAge2lzUGxheWluZyA/IFwicGF1c2VcIiA6IFwicGxheVwifVxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3Bhbn0+XG4gICAgICAgICAgICAgIHtjYWxjdWxhdGVUaW1lKGN1cnJlbnRUaW1lKX0gL3tcIiBcIn1cbiAgICAgICAgICAgICAge2R1cmF0aW9uICYmICFpc05hTihkdXJhdGlvbikgJiYgY2FsY3VsYXRlVGltZShkdXJhdGlvbil9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIHByb2dyZXNzIGJhciAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZ3Jlc3NCYXJ9PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2dyZXNzQmFyfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIjBcIlxuICAgICAgICAgICAgICAgIHJlZj17cHJvZ3Jlc3NCYXJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVJhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlRG93bmxvYWRTdGF0dXN9IGNsYXNzTmFtZT17c3R5bGVzLnBhdXNlfT5cbiAgICAgICAgICAgICAge2lzRG93bmxvYWRpbmcgPyBcImRvd25sb2FkaW5nXCIgOiBcImRvd25sb2FkXCJ9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IEF1ZGlvUGxheWVyIH07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkF1ZGlvUGxheWVyIiwiYXVkaW9QbGF5ZXIiLCJpc1BsYXlpbmciLCJzZXRJc1BsYXlpbmciLCJpc0Rvd25sb2FkaW5nIiwic2V0SXNEb3dubG9hZGluZyIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJjdXJyZW50VGltZSIsInNldEN1cnJlbnRUaW1lIiwicHJvZ3Jlc3NCYXIiLCJhbmltYXRpb25SZWYiLCJzZWNvbmRzIiwiTWF0aCIsImZsb29yIiwiY3VycmVudCIsImxvYWRlZG1ldGFkYXRhIiwicmVhZHlTdGF0ZSIsImNhbGN1bGF0ZVRpbWUiLCJzZWNzIiwibWludXRlcyIsInJldHVybmVkTWludXRlcyIsInJldHVybmVkU2Vjb25kcyIsInRvZ2dsZURvd25sb2FkU3RhdHVzIiwidG9nZ2xlUGxheVBhdXNlIiwicHJldlZhbHVlIiwicGxheSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndoaWxlUGxheWluZyIsInBhdXNlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ2YWx1ZSIsImNoYW5nZVBsYXllckN1cnJlbnRUaW1lIiwiY2hhbmdlUmFuZ2UiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImF1ZGlvIiwicmVmIiwic3JjIiwicHJlbG9hZCIsImxhdGVzdEF1ZGlvUGxheWVyIiwiZGV0YWlscyIsImgxIiwibGF0ZXN0IiwibGF0ZXN0UmlnaHQiLCJhIiwiYXJ0aXN0IiwicGxheWVyIiwicGxheWVyVG9wIiwiYXJ0aXN0MSIsInBsYXllckJvdHRvbSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwiaXNOYU4iLCJpbnB1dCIsInR5cGUiLCJkZWZhdWx0VmFsdWUiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AudioPlayer.js\n"));

/***/ })

});