module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 77);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___ = __webpack_require__(18);
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'VSelect',
	data: function data() {
		return {
			title: '选择城市',
			startY: 0,
			endY: 0,
			disY: 0
		};
	},

	props: {
		list: {
			required: true,
			type: Array
		}
	},
	mounted: function mounted() {},

	methods: {
		startMove: function startMove(e) {
			var scrollEle = this.$refs.scrollEle[0];
			var top = parseFloat(scrollEle.dataset['top']);
			this.startY = e.touches[0].pageY - top;
			console.log(this.startY);
		},
		moving: function moving(e, item) {
			var scrollEle = this.$refs.scrollEle[0];
			this.endY = e.changedTouches[0].pageY;
			this.disY = scrollEle.dataset['top'] = this.endY - this.startY;
			console.log(this.disY);
			scrollEle.style.transform = 'translate3d(0,' + this.disY + 'px, 0)';
			scrollEle.style.webkitTransform = 'translate3d(0,' + this.disY + 'px, 0)';
		}
	},

	computed: {
		style: function style() {
			return {
				top: this.disY + 'px'
			};
		},
		selectData: function selectData() {
			var temp = [];
			if (this.list.length && !(this.list[0] instanceof Array)) {
				temp = [this.list];
			} else {
				temp = this.list;
			}

			return temp.map(function (labels) {
				return {
					value: '',
					label: '',
					disY: 0,
					span: parseInt(12 / temp.length),
					options: labels
				};
			});
		}
	}
});

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_main_vue__ = __webpack_require__(59);


__WEBPACK_IMPORTED_MODULE_0__src_main_vue__["a" /* default */].install = function (Vue) {
  console.info('VSelect----install----');
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__src_main_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__src_main_vue__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__src_main_vue__["a" /* default */]);

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_vue_vue_type_template_id_4851d900___ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_vue_vue_type_script_lang_js___ = __webpack_require__(17);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_7_1_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_7_1_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__main_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__main_vue_vue_type_template_id_4851d900___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__main_vue_vue_type_template_id_4851d900___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) {
  var api = require("/Users/admin/Documents/favorites/basev-ui/node_modules/_vue-hot-reload-api@2.3.3@vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('4851d900')) {
      api.createRecord('4851d900', component.options)
    } else {
      api.reload('4851d900', component.options)
    }
    module.hot.accept("./main.vue?vue&type=template&id=4851d900&", function () {
      api.rerender('4851d900', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "src/components/v-select/src/main.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_4851d900___ = __webpack_require__(61);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_4851d900___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_4851d900___["b"]; });


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "v-select-container" },
    [
      _c(
        "v-row",
        { staticClass: "plr10" },
        [
          _c("v-col", { staticClass: "h50 lh50", attrs: { span: "3" } }, [
            _vm._v("取消")
          ]),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "txt-center h50 lh50", attrs: { span: "6" } },
            [_vm._v(_vm._s(_vm.title))]
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "txt-right h50 lh50", attrs: { span: "3" } },
            [_vm._v("完成")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "v-touch-container of-hidden" },
        _vm._l(_vm.selectData, function(item, i) {
          return _c(
            "div",
            {
              key: i,
              ref: "scrollEle",
              refInFor: true,
              staticClass: "v-touch-content",
              attrs: { "data-top": "0" },
              on: {
                touchstart: function($event) {
                  return _vm.startMove($event)
                },
                "&touchmove": function($event) {
                  return _vm.moving($event, item)
                }
              }
            },
            [
              _c("div", { staticClass: "h50 txt-center lh50" }),
              _vm._v(" "),
              _c("div", { staticClass: "h50 txt-center lh50" }),
              _vm._v(" "),
              _vm._l(item.options, function(option, j) {
                return _c(
                  "div",
                  {
                    key: j,
                    staticClass: "h50 txt-center lh50",
                    on: {
                      click: function($event) {
                        return _vm.select(option, j)
                      }
                    }
                  },
                  [_vm._v("\n\t\t\t\t\t" + _vm._s(option.label) + "\n\t\t\t\t")]
                )
              }),
              _vm._v(" "),
              _c("div", { staticClass: "h50 txt-center lh50" }),
              _vm._v(" "),
              _c("div", { staticClass: "h50 txt-center lh50" })
            ],
            2
          )
        }),
        0
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(58);


/***/ })

/******/ });