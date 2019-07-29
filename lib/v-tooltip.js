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
/******/ 	return __webpack_require__(__webpack_require__.s = 93);
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

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___ = __webpack_require__(25);
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ 25:
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

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'VTooltip',
	data: function data() {
		return {
			visible: false,
			positionStyle: {
				left: 0,
				top: 0,
				background: this.bgColor,
				color: this.fontColor,
				fontSize: this.fontSize + 'px'
			},
			timer: null
		};
	},

	computed: {
		cls: function cls() {
			return 'v-tooltip-' + this.position;
		},
		timeout: function timeout() {
			return parseInt(this.timeOut);
		}
	},
	props: {
		position: {
			type: String,
			default: 'top'
		},
		content: {
			required: true,
			type: String
		},
		timeOut: {
			type: [Number, String],
			default: 2000
		},
		distance: {
			type: [Number, String],
			default: 10
		},
		bgColor: {
			type: String,
			default: 'rgba(0,0,0,.7)'
		},
		fontColor: {
			type: String,
			default: 'white'
		},
		fontSize: {
			type: [Number, String],
			default: 12
		}
	},
	methods: {
		show: function show() {
			var _this = this;

			this.visible = true;
			this.$nextTick(this.setPostion);
			if (this.timeout) {
				clearTimeout(this.timer);
				this.timer = setTimeout(function () {
					_this.hide();
				}, parseInt(this.timeout));
			}
		},
		hide: function hide() {
			clearTimeout(this.timer);
			this.timer = null;
			this.visible = false;
		},
		setPostion: function setPostion() {
			var tooltipContent = document.querySelector('.' + this.cls);
			var clickContent = this.$refs.clickContent;
			var position = this.position;
			var dis = parseInt(this.distance);

			if (position === 'top') {
				this.positionStyle.left = clickContent.offsetLeft + clickContent.offsetWidth / 2 - tooltipContent.offsetWidth / 2 + 'px';
				this.positionStyle.top = clickContent.offsetTop - tooltipContent.offsetHeight - dis + 'px';
			} else if (position === 'top-start') {
				this.positionStyle.left = clickContent.offsetLeft + 'px';
				this.positionStyle.top = clickContent.offsetTop - tooltipContent.offsetHeight - dis + 'px';
			} else if (position === 'top-end') {
				this.positionStyle.left = clickContent.offsetLeft + clickContent.offsetWidth - tooltipContent.offsetWidth + 'px';
				this.positionStyle.top = clickContent.offsetTop - tooltipContent.offsetHeight - dis + 'px';
			} else if (position === 'bottom') {
				this.positionStyle.left = clickContent.offsetLeft + clickContent.offsetWidth / 2 - tooltipContent.offsetWidth / 2 + 'px';
				this.positionStyle.top = clickContent.offsetTop + clickContent.offsetHeight + dis + 'px';
			} else if (position === 'bottom-start') {
				this.positionStyle.left = clickContent.offsetLeft + 'px';
				this.positionStyle.top = clickContent.offsetTop + clickContent.offsetHeight + dis + 'px';
			} else if (position === 'bottom-end') {
				this.positionStyle.left = clickContent.offsetLeft + clickContent.offsetWidth - tooltipContent.offsetWidth + 'px';
				this.positionStyle.top = clickContent.offsetTop + clickContent.offsetHeight + dis + 'px';
			} else if (position === 'left') {
				this.positionStyle.left = clickContent.offsetLeft - tooltipContent.offsetWidth - dis + 'px';
				this.positionStyle.top = clickContent.offsetTop - (tooltipContent.offsetHeight - clickContent.offsetHeight) / 2 + 'px';
			} else if (position === 'left-start') {
				this.positionStyle.left = clickContent.offsetLeft - tooltipContent.offsetWidth - dis + 'px';
				this.positionStyle.top = clickContent.offsetTop + 'px';
			} else if (position === 'left-end') {
				this.positionStyle.left = clickContent.offsetLeft - tooltipContent.offsetWidth - dis + 'px';
				this.positionStyle.top = clickContent.offsetTop + clickContent.offsetHeight - tooltipContent.offsetHeight + 'px';
			} else if (position === 'right') {
				this.positionStyle.left = clickContent.offsetLeft + clickContent.offsetWidth + dis + 'px';
				this.positionStyle.top = clickContent.offsetTop - (tooltipContent.offsetHeight - clickContent.offsetHeight) / 2 + 'px';
			} else if (position === 'right-start') {
				this.positionStyle.left = clickContent.offsetLeft + clickContent.offsetWidth + dis + 'px';
				this.positionStyle.top = clickContent.offsetTop + 'px';
			} else if (position === 'right-end') {
				this.positionStyle.left = clickContent.offsetLeft + clickContent.offsetWidth + dis + 'px';
				this.positionStyle.top = clickContent.offsetTop + clickContent.offsetHeight - tooltipContent.offsetHeight + 'px';
			}
		}
	},
	mounted: function mounted() {
		document.addEventListener('click', this.hide, false);
	},
	beforeDestroy: function beforeDestroy() {
		document.removeEventListener('click', this.hide, false);
	}
});

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_main_vue__ = __webpack_require__(79);


__WEBPACK_IMPORTED_MODULE_0__src_main_vue__["a" /* default */].install = function (Vue) {
  console.info('VTooltip----install----');
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__src_main_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__src_main_vue__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__src_main_vue__["a" /* default */]);

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_vue_vue_type_template_id_4fc472d2___ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_vue_vue_type_script_lang_js___ = __webpack_require__(24);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_7_1_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_15_7_1_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__main_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__main_vue_vue_type_template_id_4fc472d2___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__main_vue_vue_type_template_id_4fc472d2___["b" /* staticRenderFns */],
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
    if (!api.isRecorded('4fc472d2')) {
      api.createRecord('4fc472d2', component.options)
    } else {
      api.reload('4fc472d2', component.options)
    }
    module.hot.accept("./main.vue?vue&type=template&id=4fc472d2&", function () {
      api.rerender('4fc472d2', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "src/components/v-tooltip/src/main.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_4fc472d2___ = __webpack_require__(81);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_4fc472d2___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_4fc472d2___["b"]; });


/***/ }),

/***/ 81:
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
    { staticClass: "v-tooltip-container" },
    [
      _c(
        "div",
        {
          ref: "clickContent",
          on: {
            click: function($event) {
              $event.stopPropagation()
              return _vm.show($event)
            }
          }
        },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "fade", appear: "" } }, [
        _vm.visible
          ? _c(
              "div",
              {
                staticClass: "v-tooltip-content",
                class: [_vm.cls],
                style: _vm.positionStyle
              },
              [
                _c("div", { staticClass: "v-tooltip-arrow" }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "txt-left",
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.show($event)
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.content))]
                )
              ]
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(78);


/***/ })

/******/ });