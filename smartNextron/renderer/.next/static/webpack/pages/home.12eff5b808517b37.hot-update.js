"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
global["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./pages/hb_app/1_body/6_TestSummary/summary/responseContent.js":
/*!**********************************************************************!*\
  !*** ./pages/hb_app/1_body/6_TestSummary/summary/responseContent.js ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"../node_modules/next/node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"../node_modules/next/node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hb_components_popup1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hb_components/popup1 */ \"./pages/hb_components/popup1.js\");\n/* harmony import */ var _hb_components_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../hb_components/textarea */ \"./pages/hb_components/textarea.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar ResponseContent = function(param) {\n    var value = param.value, onResponseChange = param.onResponseChange;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), popupFlag = ref[0], setPopupFlag = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), responseValue = ref1[0], setResponseValue = ref1[1];\n    var handleResponseChange = function(event) {\n        var newValue = event.target.value;\n        setResponseValue(newValue);\n        onResponseChange(newValue);\n    };\n    var handlePopupSave = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                setPopupFlag(false);\n                return [\n                    2\n                ];\n            });\n        });\n        return function handlePopupSave() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hb_components_popup1__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        // logo={faFilePen}\n        buttonLabel: \"content\",\n        logoClassName: \" pr-[10px]\",\n        flag: popupFlag,\n        open: function() {\n            return setPopupFlag(true);\n        },\n        close: function() {\n            return setPopupFlag(false);\n        },\n        save: function() {\n            handlePopupSave();\n        },\n        height: \"h-[400px]\",\n        width: \"w-[45%]\",\n        header: \"Validation Details\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-2 justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-[5px] text-gray-500\",\n                    children: \"Response Content\"\n                }, void 0, false, {\n                    fileName: \"/Users/harish.baskaran/Documents/Work/Automation/smart-api-nextron/renderer/pages/hb_app/1_body/6_TestSummary/summary/responseContent.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hb_components_textarea__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    className: \"w-[500px] max-h-[200px] overflow-y-auto\",\n                    value: responseValue,\n                    setValue: setResponseValue,\n                    onChange: handleResponseChange\n                }, void 0, false, {\n                    fileName: \"/Users/harish.baskaran/Documents/Work/Automation/smart-api-nextron/renderer/pages/hb_app/1_body/6_TestSummary/summary/responseContent.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/harish.baskaran/Documents/Work/Automation/smart-api-nextron/renderer/pages/hb_app/1_body/6_TestSummary/summary/responseContent.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/harish.baskaran/Documents/Work/Automation/smart-api-nextron/renderer/pages/hb_app/1_body/6_TestSummary/summary/responseContent.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_s(ResponseContent, \"NrnhVNJE10CLD4UIeTQ0aDaDg7U=\");\n_c = ResponseContent;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponseContent);\nvar _c;\n$RefreshReg$(_c, \"ResponseContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9oYl9hcHAvMV9ib2R5LzZfVGVzdFN1bW1hcnkvc3VtbWFyeS9yZXNwb25zZUNvbnRlbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQXVFO0FBQ2I7QUFDQTtBQUUxRCxJQUFNTyxlQUFlLEdBQUcsZ0JBQWlDO1FBQTlCQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsZ0JBQWdCLFNBQWhCQSxnQkFBZ0I7O0lBQ2hELElBQWtDUCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQTFDUSxTQUFTLEdBQWtCUixHQUFlLEdBQWpDLEVBQUVTLFlBQVksR0FBSVQsR0FBZSxHQUFuQjtJQUM5QixJQUEwQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUEvQ1UsYUFBYSxHQUFzQlYsSUFBWSxHQUFsQyxFQUFFVyxnQkFBZ0IsR0FBSVgsSUFBWSxHQUFoQjtJQUV0QyxJQUFNWSxvQkFBb0IsR0FBRyxTQUFDQyxLQUFLLEVBQUs7UUFDdEMsSUFBTUMsUUFBUSxHQUFHRCxLQUFLLENBQUNFLE1BQU0sQ0FBQ1QsS0FBSztRQUNuQ0ssZ0JBQWdCLENBQUNHLFFBQVEsQ0FBQyxDQUFDO1FBQzNCUCxnQkFBZ0IsQ0FBQ08sUUFBUSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQU1FLGVBQWU7bUJBQUcsK0ZBQVk7O2dCQUNsQ1AsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7OztRQUN0QixDQUFDO3dCQUZLTyxlQUFlOzs7T0FFcEI7SUFFRCxxQkFDRSw4REFBQ2IsNkRBQVU7UUFDVCxtQkFBbUI7UUFDbkJjLFdBQVcsRUFBQyxTQUFTO1FBQ3JCQyxhQUFhLEVBQUMsWUFBWTtRQUMxQkMsSUFBSSxFQUFFWCxTQUFTO1FBQ2ZZLElBQUksRUFBRTttQkFBTVgsWUFBWSxDQUFDLElBQUksQ0FBQztTQUFBO1FBQzlCWSxLQUFLLEVBQUU7bUJBQU1aLFlBQVksQ0FBQyxLQUFLLENBQUM7U0FBQTtRQUNoQ2EsSUFBSSxFQUFFLFdBQU07WUFDVk4sZUFBZSxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUNETyxNQUFNLEVBQUMsV0FBVztRQUNsQkMsS0FBSyxFQUFDLFNBQVM7UUFDZkMsTUFBTSxFQUFDLG9CQUFvQjtrQkFFM0IsNEVBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLHFDQUFxQzs7OEJBQ2xELDhEQUFDQyxHQUFDO29CQUFDRCxTQUFTLEVBQUMsd0JBQXdCOzhCQUFDLGtCQUFnQjs7Ozs7eUJBQUk7OEJBQzFELDhEQUFDdkIsK0RBQVE7b0JBQ1B1QixTQUFTLEVBQUMseUNBQXlDO29CQUNuRHJCLEtBQUssRUFBRUksYUFBYTtvQkFDcEJtQixRQUFRLEVBQUVsQixnQkFBZ0I7b0JBQzFCbUIsUUFBUSxFQUFFbEIsb0JBQW9COzs7Ozt5QkFDOUI7Ozs7OztpQkFDRTs7Ozs7YUFDSyxDQUNiO0FBQ0osQ0FBQztHQXhDS1AsZUFBZTtBQUFmQSxLQUFBQSxlQUFlO0FBMENyQixpRUFBZUEsZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hiX2FwcC8xX2JvZHkvNl9UZXN0U3VtbWFyeS9zdW1tYXJ5L3Jlc3BvbnNlQ29udGVudC5qcz9jYWJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQb3B1cE1vZGFsIGZyb20gXCIuLi8uLi8uLi8uLi9oYl9jb21wb25lbnRzL3BvcHVwMVwiO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gXCIuLi8uLi8uLi8uLi9oYl9jb21wb25lbnRzL3RleHRhcmVhXCI7XG5cbmNvbnN0IFJlc3BvbnNlQ29udGVudCA9ICh7IHZhbHVlLCBvblJlc3BvbnNlQ2hhbmdlIH0pID0+IHtcbiAgY29uc3QgW3BvcHVwRmxhZywgc2V0UG9wdXBGbGFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Jlc3BvbnNlVmFsdWUsIHNldFJlc3BvbnNlVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlUmVzcG9uc2VDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBzZXRSZXNwb25zZVZhbHVlKG5ld1ZhbHVlKTtcbiAgICBvblJlc3BvbnNlQ2hhbmdlKG5ld1ZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQb3B1cFNhdmUgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0UG9wdXBGbGFnKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQb3B1cE1vZGFsXG4gICAgICAvLyBsb2dvPXtmYUZpbGVQZW59XG4gICAgICBidXR0b25MYWJlbD1cImNvbnRlbnRcIlxuICAgICAgbG9nb0NsYXNzTmFtZT1cIiBwci1bMTBweF1cIlxuICAgICAgZmxhZz17cG9wdXBGbGFnfVxuICAgICAgb3Blbj17KCkgPT4gc2V0UG9wdXBGbGFnKHRydWUpfVxuICAgICAgY2xvc2U9eygpID0+IHNldFBvcHVwRmxhZyhmYWxzZSl9XG4gICAgICBzYXZlPXsoKSA9PiB7XG4gICAgICAgIGhhbmRsZVBvcHVwU2F2ZSgpO1xuICAgICAgfX1cbiAgICAgIGhlaWdodD1cImgtWzQwMHB4XVwiXG4gICAgICB3aWR0aD1cInctWzQ1JV1cIlxuICAgICAgaGVhZGVyPVwiVmFsaWRhdGlvbiBEZXRhaWxzXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LVs1cHhdIHRleHQtZ3JheS01MDBcIj5SZXNwb25zZSBDb250ZW50PC9wPlxuICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs1MDBweF0gbWF4LWgtWzIwMHB4XSBvdmVyZmxvdy15LWF1dG9cIlxuICAgICAgICAgIHZhbHVlPXtyZXNwb25zZVZhbHVlfVxuICAgICAgICAgIHNldFZhbHVlPXtzZXRSZXNwb25zZVZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSZXNwb25zZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUG9wdXBNb2RhbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNlQ29udGVudDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZVJlZiIsIlBvcHVwTW9kYWwiLCJUZXh0QXJlYSIsIlJlc3BvbnNlQ29udGVudCIsInZhbHVlIiwib25SZXNwb25zZUNoYW5nZSIsInBvcHVwRmxhZyIsInNldFBvcHVwRmxhZyIsInJlc3BvbnNlVmFsdWUiLCJzZXRSZXNwb25zZVZhbHVlIiwiaGFuZGxlUmVzcG9uc2VDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlUG9wdXBTYXZlIiwiYnV0dG9uTGFiZWwiLCJsb2dvQ2xhc3NOYW1lIiwiZmxhZyIsIm9wZW4iLCJjbG9zZSIsInNhdmUiLCJoZWlnaHQiLCJ3aWR0aCIsImhlYWRlciIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzZXRWYWx1ZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/hb_app/1_body/6_TestSummary/summary/responseContent.js\n"));

/***/ })

});