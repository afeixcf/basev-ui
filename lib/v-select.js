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
/******/ 	return __webpack_require__(__webpack_require__.s = 91);
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

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___ = __webpack_require__(21);
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_7_1_5_babel_loader_lib_index_js_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),

/***/ 21:
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

var ANIMATE_CLASS = '___animate';
/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'VSelect',
	data: function data() {
		return {
			// title: '选择城市',
			startY: 0,
			endY: 0,
			disY: 0,
			positionStyle: {
				top: 0,
				bottom: 0
			},
			tops: [],

			timestart: 0,
			power: 0,
			prev: 0,
			timer: null,
			selectOption: null
		};
	},

	props: {
		list: {
			required: true,
			type: Array
		},
		onSelect: Function,
		title: String,
		showCancelBtn: Boolean
	},
	mounted: function mounted() {
		var scrollEle = this.$refs.scrollEle;
		var scrollItem = this.$refs.scrollItem[0];
		scrollEle.style.top = scrollItem.offsetHeight * 2 + 'px';
		scrollEle.style.height = scrollItem.offsetHeight * 5 + 'px';
		this.positionStyle.top = this.positionStyle.bottom = (scrollEle.offsetHeight - scrollItem.offsetHeight) / 2 + 'px';
		this.tops = this.selectData.map(function (item, i) {
			return scrollItem.offsetHeight * i;
		});

		document.addEventListener('click', this.confirm, false);
	},

	methods: {
		touchstart: function touchstart(e) {
			clearTimeout(this.timer);
			this.power = 0;
			var scrollEle = this.$refs.scrollEle;
			var top = parseFloat(scrollEle.dataset['top']);
			this.startY = e.touches[0].pageY - top;
			this.timestart = e.timeStamp;
			this.prev = this.startY;
		},
		touchmove: function touchmove(e) {
			if (e.timeStamp - this.timestart > 100) {
				var scrollEle = this.$refs.scrollEle;
				this.endY = e.changedTouches[0].pageY;
				this.disY = scrollEle.dataset['top'] = this.endY - this.startY;
			}
			this.power = e.changedTouches[0].pageY - this.prev;
			this.prev = e.changedTouches[0].pageY;
		},
		touchend: function touchend(e) {
			var _this = this;

			var friction = ((this.power >> 31) * 2 + 1) * 0.5;
			this.timer = setInterval(function () {
				var scrollEle = _this.$refs.scrollEle;
				var scrollRst = _this.$refs.scrollRst;
				var scrollItem = _this.$refs.scrollItem[0];
				var scrollItemHeight = scrollItem.offsetHeight;
				var len = _this.selectData.length;
				var h = scrollItemHeight * (len - 1);
				_this.power -= friction;
				_this.disY += _this.power;
				scrollEle.dataset['top'] = _this.disY;
				if (_this.disY > 0) {
					_this.ease(0);
					_this.selectOption = _this.selectData[0];
				} else if (_this.disY < -h + scrollItemHeight / 2) {
					_this.ease(-h);
					_this.selectOption = _this.selectData[len - 1];
				} else if (Math.abs(_this.power) < 1) {
					_this.tops.forEach(function (top, i) {
						if (_this.disY < -top + scrollItemHeight / 2 && _this.disY > -_this.tops[i + 1] + scrollItemHeight / 2) {
							_this.ease(-top);
							_this.selectOption = _this.selectData[i];
						}
					});
				}
			}, 20);
		},
		cancel: function cancel() {
			console.log('cancel');
		},
		confirm: function confirm() {
			this.onSelect(this.selectOption);
		},
		ease: function ease(h) {
			var _this2 = this;

			var scrollEle = this.$refs.scrollEle;
			clearInterval(this.timer);
			this.timer = setInterval(function () {
				_this2.disY -= (_this2.disY - h) * 0.2;
				scrollEle.dataset['top'] = _this2.disY;
				if (Math.abs(_this2.disY - h) < 1) {
					_this2.disY = scrollEle.dataset['top'] = h;
					clearInterval(_this2.timer);
				}
			}, 20);
		}
	},

	computed: {
		selectData: function selectData() {
			return this.list.map(function (option) {
				return {
					value: option.value,
					label: option.label
				};
			});
		},
		scrollTransform: function scrollTransform() {
			return {
				transform: 'translate3d(0,' + this.disY + 'px, 0)'
			};
		}
	}
});

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_main_vue__ = __webpack_require__(68);


__WEBPACK_IMPORTED_MODULE_0__src_main_vue__["a" /* default */].install = function (Vue) {
  console.info('VSelect----install----');
  Vue.component(__WEBPACK_IMPORTED_MODULE_0__src_main_vue__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__src_main_vue__["a" /* default */]);
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__src_main_vue__["a" /* default */]);

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_vue_vue_type_template_id_4851d900___ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_vue_vue_type_script_lang_js___ = __webpack_require__(20);
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

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_4851d900___ = __webpack_require__(70);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_4851d900___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_4851d900___["b"]; });


/***/ }),

/***/ 70:
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
      _vm.title
        ? _c(
            "v-row",
            { staticClass: "plr10" },
            [
              _vm.showCancelBtn
                ? _c(
                    "v-col",
                    {
                      staticClass: "h50 lh50",
                      nativeOn: {
                        click: function($event) {
                          return _vm.cancel($event)
                        }
                      }
                    },
                    [_vm._v("取消")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("v-col", { staticClass: "flex-1 txt-center h50 lh50" }, [
                _vm._v(_vm._s(_vm.title))
              ]),
              _vm._v(" "),
              _vm.showCancelBtn
                ? _c(
                    "v-col",
                    {
                      staticClass: "txt-right h50 lh50",
                      nativeOn: {
                        click: function($event) {
                          return _vm.confirm($event)
                        }
                      }
                    },
                    [_vm._v("完成")]
                  )
                : _vm._e()
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "v-select-touch-container of-hidden",
          on: {
            touchstart: function($event) {
              return _vm.touchstart($event)
            },
            touchmove: function($event) {
              $event.preventDefault()
              return _vm.touchmove($event)
            },
            touchend: function($event) {
              return _vm.touchend($event)
            }
          }
        },
        [
          _c(
            "div",
            {
              ref: "scrollEle",
              staticClass: "v-select-touch-content",
              style: _vm.scrollTransform,
              attrs: { "data-top": "0" }
            },
            _vm._l(_vm.selectData, function(option, j) {
              return _c(
                "div",
                {
                  key: j,
                  ref: "scrollItem",
                  refInFor: true,
                  staticClass: "txt-center pt10 pb10 v-select-item"
                },
                [_vm._v("\n\t\t\t\t" + _vm._s(option.label) + "\n\t\t\t")]
              )
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "v-select-touch-result", style: _vm.positionStyle },
            [
              _c(
                "div",
                { ref: "scrollRst", style: _vm.scrollTransform },
                _vm._l(_vm.selectData, function(option, j) {
                  return _c(
                    "div",
                    {
                      key: j,
                      ref: "scrollItem",
                      refInFor: true,
                      staticClass: "txt-center pt10 pb10 v-select-item"
                    },
                    [
                      _vm._v(
                        "\n\t\t\t\t\t" + _vm._s(option.label) + "\n\t\t\t\t"
                      )
                    ]
                  )
                }),
                0
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(67);


/***/ })

/******/ });