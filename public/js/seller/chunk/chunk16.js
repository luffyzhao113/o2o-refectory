webpackJsonp([16],{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(153)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(155)
/* template */
var __vue_template__ = __webpack_require__(156)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5c0aa147"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\base\\js\\components\\box\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c0aa147", Component.options)
  } else {
    hotAPI.reload("data-v-5c0aa147", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(154);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("8e96eae4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5c0aa147\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5c0aa147\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.box[data-v-5c0aa147] {\n    margin-bottom: 10px;\n    border: 1px solid #dddee1;\n    border-radius: 5px;\n}\n.box[data-v-5c0aa147]:last-child {\n    margin-bottom: 0px;\n}\n.box-header[data-v-5c0aa147] {\n    padding: 8px 48px 8px 16px;\n    color: #495060;\n    font-size: 12px;\n    line-height: 16px;\n    border-bottom: 1px solid #dddee1;\n}\n.box-detail[data-v-5c0aa147] {\n    padding: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//

exports.default = {
    name: "box",
    props: {
        title: {
            type: String,
            default: '标题'
        }
    }
};

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "box" },
    [
      _c("div", { staticClass: "box-header" }, [_vm._v(_vm._s(_vm.title))]),
      _vm._v(" "),
      _c("Row", { staticClass: "box-detail" }, [_vm._t("default")], 2)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5c0aa147", module.exports)
  }
}

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(329)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(331)
/* template */
var __vue_template__ = __webpack_require__(342)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-21b4335a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\base\\js\\views\\sysconfig\\role\\index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-21b4335a", Component.options)
  } else {
    hotAPI.reload("data-v-21b4335a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        componentProps: {}
    },
    data: function data() {
        return {
            loading: false
        };
    },

    methods: {
        change: function change(visible) {
            if (visible === false) {
                this.$emit('on-change');
            }
        }
    }
};

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(271)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(273)
/* template */
var __vue_template__ = __webpack_require__(274)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9fca2e18"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\base\\js\\components\\modal\\component-modal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9fca2e18", Component.options)
  } else {
    hotAPI.reload("data-v-9fca2e18", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = __webpack_require__(208);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_http2.default],
  methods: {
    updateSubmit: function updateSubmit(name, url) {
      var _this = this;

      this.$refs[name].validate(function (valid) {
        if (valid) {
          _this.loading = true;
          _this.$http.put(url, _this.unObserver(_this._data[name])).then(function (res) {
            _this.$Message.success('Success!');
            _this.change(false);
          }).catch(function (res) {
            _this.formatErrors(res);
          }).finally(function () {
            _this.loading = false;
          });
        } else {
          _this.$Message.error('验证不通过!');
        }
      });
    },
    createSubmit: function createSubmit(name, url) {
      var _this2 = this;

      this.$refs[name].validate(function (valid) {
        if (valid) {
          _this2.loading = true;
          _this2.$http.post(url, _this2._data[name]).then(function (res) {
            _this2.$Message.success('Success!');
            _this2.change(false);
          }).catch(function (res) {
            _this2.formatErrors(res);
          }).finally(function () {
            _this2.loading = false;
          });
        }
      });
    }
  }
};

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = __webpack_require__(208);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_http2.default],
  data: function data() {
    return {
      searchForm: {},
      data: {
        data: [],
        page: {
          total: 0,
          current: 1,
          page_size: 20
        }
      },
      component: {
        current: '',
        data: {}
      }
    };
  },
  mounted: function mounted() {
    this.search();
  },

  methods: {
    search: function search() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    },
    assignmentData: function assignmentData(data) {
      this.data.data = data.data;
      this.data.page.total = data.total;
      this.data.page.current = data.current_page;
      this.data.page.page_size = data.per_page;
    },
    showComponent: function showComponent(type, data) {
      this.component.current = type;
      this.component.data = data;
    },
    hideComponent: function hideComponent() {
      this.component.current = '';
      this.component.data = {};
      this.search();
    },
    destroyItem: function destroyItem(row, url) {
      var _this = this;

      this.$http.delete(url).then(function (res) {
        _this.search();
      }).catch(function (res) {
        _this.formatErrors(res);
      });
    },
    request: function request(page) {
      var searchForm = JSON.parse(JSON.stringify(this.searchForm));
      searchForm.page = page;
      return searchForm;
    }
  }
};

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(272);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("64136959", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9fca2e18\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./component-modal.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9fca2e18\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./component-modal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.modal-body[data-v-9fca2e18] {\n    max-height: 500px;\n    overflow-y: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    name: "component-modal",
    props: {
        title: {
            type: String,
            default: '弹窗'
        },
        width: {
            type: Number,
            default: 520
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        change: function change(v) {
            this.$parent.$emit('on-change');
        }
    }
};

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Modal",
    {
      attrs: {
        title: _vm.title,
        value: true,
        transfer: false,
        "mask-closable": false,
        width: _vm.width
      },
      on: { "on-visible-change": _vm.change }
    },
    [
      _c("div", { staticClass: "modal-body" }, [_vm._t("default")], 2),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { slot: "footer" }, slot: "footer" },
        [_vm._t("footer")],
        2
      ),
      _vm._v(" "),
      _vm.loading ? _c("Spin", { attrs: { size: "large", fix: "" } }) : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9fca2e18", module.exports)
  }
}

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(276)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(278)
/* template */
var __vue_template__ = __webpack_require__(279)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\base\\js\\components\\layout\\my-lists.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6e193d6c", Component.options)
  } else {
    hotAPI.reload("data-v-6e193d6c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(277);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("c67b1df6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e193d6c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./my-lists.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6e193d6c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/less-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./my-lists.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.box-flex-list {\n  position: relative;\n}\n.box-flex-list .ivu-card-head .ivu-btn {\n  float: right;\n}\n.box-flex-list .ivu-card-head p {\n  height: 24px;\n  line-height: 24px;\n}\n.box-flex-list .ivu-table .table-info-row td {\n  background-color: #2db7f5;\n  color: #fff;\n}\n.box-flex-list .ivu-page {\n  text-align: right;\n}\n.box-flex-list .ivu-table-wrapper {\n  margin-bottom: 15px;\n}\n", ""]);

// exports


/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    name: "my-lists",
    props: {
        value: {
            type: Object,
            default: function _default() {
                return { data: [], page: { total: 100, current: 1, page_size: 20 } };
            }
        },
        columns: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            leftCol: [{
                title: '序号',
                render: function render(h, _ref) {
                    var index = _ref.index;

                    return h(
                        'span',
                        null,
                        [++index]
                    );
                },
                width: 75
            }],
            rightCol: []
        };
    },

    computed: {
        tableCol: function tableCol() {
            return this.leftCol.concat(this.columns, this.rightCol);
        }
    },
    methods: {
        change: function change(v) {
            this.$emit('change', v);
        },
        rowClassName: function rowClassName(row, index) {}
    }
};

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._t("default"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "box-flex-list" },
        [
          _c(
            "Card",
            { attrs: { "dis-hover": "" } },
            [
              _c(
                "p",
                { attrs: { slot: "title" }, slot: "title" },
                [
                  _vm._t("title", [_c("span", [_vm._v("列表")])]),
                  _vm._v(" "),
                  _vm._t("button")
                ],
                2
              ),
              _vm._v(" "),
              _c("Table", {
                ref: "table",
                attrs: {
                  columns: _vm.tableCol,
                  data: _vm.value.data,
                  size: "small",
                  "row-class-name": _vm.rowClassName,
                  loading: _vm.loading
                }
              }),
              _vm._v(" "),
              _c("Page", {
                attrs: {
                  total: _vm.value.page.total,
                  size: "small",
                  current: _vm.value.page.current,
                  "page-size": _vm.value.page.page_size,
                  "show-total": ""
                },
                on: { "on-change": _vm.change }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6e193d6c", module.exports)
  }
}

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(330);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("62d04d70", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-21b4335a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-21b4335a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _myLists = __webpack_require__(275);

var _myLists2 = _interopRequireDefault(_myLists);

var _lists = __webpack_require__(270);

var _lists2 = _interopRequireDefault(_lists);

var _create = __webpack_require__(332);

var _create2 = _interopRequireDefault(_create);

var _update = __webpack_require__(337);

var _update2 = _interopRequireDefault(_update);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
    components: { MyLists: _myLists2.default, Create: _create2.default, Update: _update2.default },
    mixins: [_lists2.default],
    name: "index",
    data: function data() {
        var _this = this;

        return {
            columns: [{
                title: '角色名称',
                key: 'name'
            }, {
                title: '用户数量',
                key: 'users_count'
            }, {
                title: '操作',
                render: function render(h, _ref) {
                    var row = _ref.row;

                    return h(
                        "div",
                        null,
                        [h(
                            "i-button",
                            {
                                attrs: { size: "small" },
                                on: {
                                    "click": function click() {
                                        return _this.showComponent('Update', row);
                                    }
                                }
                            },
                            ["\u4FEE\u6539"]
                        ), h(
                            "poptip",
                            {
                                attrs: {
                                    confirm: true,
                                    transfer: true,
                                    title: "\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F"
                                },
                                on: {
                                    "on-ok": function onOk() {
                                        return _this.destroyItem(row, "role/" + row.id);
                                    }
                                }
                            },
                            [h(
                                "i-button",
                                {
                                    attrs: { size: "small" }
                                },
                                ["\u5220\u9664"]
                            )]
                        )]
                    );
                }
            }]
        };
    },

    methods: {
        search: function search() {
            var _this2 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

            this.loading = true;
            this.$http.get("role", { params: this.request(page) }).then(function (res) {
                _this2.assignmentData(res.data.data);
            }).catch(function (res) {
                _this2.formatError(res);
            }).finally(function () {
                _this2.loading = false;
            });
        }
    }
};

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(333)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(335)
/* template */
var __vue_template__ = __webpack_require__(336)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1d4b2ecb"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\base\\js\\views\\sysconfig\\role\\create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1d4b2ecb", Component.options)
  } else {
    hotAPI.reload("data-v-1d4b2ecb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(334);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("09ede32c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1d4b2ecb\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1d4b2ecb\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./create.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _componentModal = __webpack_require__(268);

var _componentModal2 = _interopRequireDefault(_componentModal);

var _component = __webpack_require__(267);

var _component2 = _interopRequireDefault(_component);

var _form = __webpack_require__(269);

var _form2 = _interopRequireDefault(_form);

var _tools = __webpack_require__(210);

var _tools2 = _interopRequireDefault(_tools);

var _index = __webpack_require__(130);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "create",
    components: { Box: _index2.default, ComponentModal: _componentModal2.default },
    mixins: [_form2.default, _component2.default, _tools2.default],
    data: function data() {
        return {
            formCreate: {
                name: '',
                status: 1,
                description: ''
            },
            permissions: []
        };
    },

    computed: {
        treePermissions: function treePermissions() {
            var data = [];
            JSON.parse(JSON.stringify(this.permissions)).forEach(function (item) {
                data.push({
                    id: item.id,
                    parent_id: item.parent_id,
                    title: item.title,
                    expand: true
                });
            });
            return this.toTree(data);
        },
        checkedPermissions: function checkedPermissions() {
            return this.toChecked(JSON.parse(JSON.stringify(this.treePermissions)));
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.loading = true;
        this.$http.get("role/create").then(function (res) {
            _this.permissions = res.data.data;
        }).catch(function (err) {
            _this.formatErrors(err);
        }).finally(function () {
            _this.loading = false;
        });
    },

    methods: {
        createSubmit: function createSubmit(name, url) {
            var _this2 = this;

            this.$refs[name].validate(function (valid) {
                if (valid) {
                    _this2.loading = true;
                    var data = Object.assign({}, _this2._data[name], {
                        permissions: _this2.checkedPermissions
                    });
                    _this2.$http.post(url, data).then(function (res) {
                        _this2.$Message.success('Success!');
                        _this2.change(false);
                    }).catch(function (res) {
                        _this2.formatErrors(res);
                    }).finally(function () {
                        _this2.loading = false;
                    });
                }
            });
        },
        toChecked: function toChecked(data) {
            var _this3 = this;

            var arr = [];
            data.forEach(function (item) {
                if (item.indeterminate === true || item.checked === true) {
                    arr.push(item.id);
                    if (item.children && item.children.length > 0) {
                        arr = arr.concat(_this3.toChecked(item.children));
                    }
                }
            });
            return arr;
        }
    }
}; //
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

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "component-modal",
    { attrs: { title: "创建角色", loading: _vm.loading, width: 700 } },
    [
      _c(
        "Form",
        {
          ref: "formCreate",
          attrs: { model: _vm.formCreate, "label-width": 80 }
        },
        [
          _c(
            "box",
            { attrs: { title: "角色管理" } },
            [
              _c(
                "FormItem",
                {
                  attrs: {
                    label: "角色名称",
                    prop: "name",
                    rules: { required: true, message: "角色名称不能为空" }
                  }
                },
                [
                  _c("Input", {
                    attrs: { placeholder: "角色名称" },
                    model: {
                      value: _vm.formCreate.name,
                      callback: function($$v) {
                        _vm.$set(_vm.formCreate, "name", $$v)
                      },
                      expression: "formCreate.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "是否开启", prop: "status" } },
                [
                  _c(
                    "RadioGroup",
                    {
                      attrs: { type: "button" },
                      model: {
                        value: _vm.formCreate.status,
                        callback: function($$v) {
                          _vm.$set(_vm.formCreate, "status", $$v)
                        },
                        expression: "formCreate.status"
                      }
                    },
                    [
                      _c("Radio", { attrs: { label: 1, value: 1 } }, [
                        _vm._v("开启")
                      ]),
                      _vm._v(" "),
                      _c("Radio", { attrs: { label: 0, value: 0 } }, [
                        _vm._v("关闭")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "角色描述", prop: "description" } },
                [
                  _c("Input", {
                    attrs: { type: "textarea", placeholder: "角色描述" },
                    model: {
                      value: _vm.formCreate.description,
                      callback: function($$v) {
                        _vm.$set(_vm.formCreate, "description", $$v)
                      },
                      expression: "formCreate.description"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "box",
            { attrs: { title: "权限管理" } },
            [
              _c("tree", {
                attrs: { data: _vm.treePermissions, "show-checkbox": "" }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { slot: "footer" }, slot: "footer" },
        [
          _c(
            "Button",
            {
              on: {
                click: function($event) {
                  _vm.createSubmit("formCreate", "role")
                }
              }
            },
            [_vm._v("创建")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1d4b2ecb", module.exports)
  }
}

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(338)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(340)
/* template */
var __vue_template__ = __webpack_require__(341)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8be9cfd0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\base\\js\\views\\sysconfig\\role\\update.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8be9cfd0", Component.options)
  } else {
    hotAPI.reload("data-v-8be9cfd0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(339);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("306f3e92", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8be9cfd0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./update.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8be9cfd0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./update.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _componentModal = __webpack_require__(268);

var _componentModal2 = _interopRequireDefault(_componentModal);

var _component = __webpack_require__(267);

var _component2 = _interopRequireDefault(_component);

var _form = __webpack_require__(269);

var _form2 = _interopRequireDefault(_form);

var _index = __webpack_require__(130);

var _index2 = _interopRequireDefault(_index);

var _tools = __webpack_require__(210);

var _tools2 = _interopRequireDefault(_tools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: "update",
    components: { Box: _index2.default, ComponentModal: _componentModal2.default },
    mixins: [_form2.default, _component2.default, _tools2.default],
    data: function data() {
        return {
            formUpdate: {
                name: '',
                status: 1,
                description: ''
            },
            permissions: []
        };
    },

    computed: {
        treePermissions: function treePermissions() {
            var _this = this;

            var data = [];
            JSON.parse(JSON.stringify(this.permissions)).forEach(function (item) {
                data.push({
                    id: item.id,
                    parent_id: item.parent_id,
                    title: item.title,
                    expand: true,
                    indeterminate: _this.indeterminate(item),
                    checked: _this.checked(item)
                });
            });
            return this.toTree(data);
        },
        checkedPermissions: function checkedPermissions() {
            return this.toChecked(JSON.parse(JSON.stringify(this.treePermissions)));
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        this.loading = true;
        this.$http.get("role/" + this.componentProps.id + "/edit").then(function (res) {
            _this2.formUpdate = res.data.data.row;
            _this2.permissions = res.data.data.permissions;
        }).catch(function (err) {
            _this2.formatErrors(err);
        }).finally(function () {
            _this2.loading = false;
        });
    },

    methods: {
        updateSubmit: function updateSubmit(name, url) {
            var _this3 = this;

            this.$refs[name].validate(function (valid) {
                if (valid) {
                    _this3.loading = true;
                    var data = Object.assign({}, _this3._data[name], {
                        permissions: _this3.checkedPermissions
                    });

                    _this3.$http.put(url, data).then(function (res) {
                        _this3.$Message.success('Success!');
                        _this3.change(false);
                    }).catch(function (res) {
                        _this3.formatErrors(res);
                    }).finally(function () {
                        _this3.loading = false;
                    });
                } else {
                    _this3.$Message.error('验证不通过!');
                }
            });
        },
        child: function child(parent) {
            return this.permissions.filter(function (val) {
                return val.parent_id == parent;
            });
        },
        indeterminate: function indeterminate(item) {
            var hasChild = this.child(item.id).length > 0;
            if (!hasChild) {
                return false;
            }
            var has = typeof this.formUpdate.perms.find(function (val) {
                return val.id === item.id;
            }) !== 'undefined';
            if (has) {
                return true;
            }
            return false;
        },
        checked: function checked(item) {
            var hasChild = this.child(item.id).length > 0;
            if (hasChild) {
                return false;
            }
            var has = typeof this.formUpdate.perms.find(function (val) {
                return val.id === item.id;
            }) !== 'undefined';
            if (has) {
                return true;
            }
            return false;
        },
        toChecked: function toChecked(data) {
            var _this4 = this;

            var arr = [];
            data.forEach(function (item) {
                if (item.indeterminate === true || item.checked === true) {
                    arr.push(item.id);
                    if (item.children && item.children.length > 0) {
                        arr = arr.concat(_this4.toChecked(item.children));
                    }
                }
            });
            return arr;
        }
    }
}; //
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

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "component-modal",
    { attrs: { title: "修改角色", loading: _vm.loading, width: 700 } },
    [
      _c(
        "Form",
        {
          ref: "formUpdate",
          attrs: { model: _vm.formUpdate, "label-width": 80 }
        },
        [
          _c(
            "box",
            { attrs: { title: "角色管理" } },
            [
              _c(
                "FormItem",
                {
                  attrs: {
                    label: "角色名称",
                    prop: "name",
                    rules: { required: true, message: "角色名称不能为空" }
                  }
                },
                [
                  _c("Input", {
                    attrs: { placeholder: "角色名称" },
                    model: {
                      value: _vm.formUpdate.name,
                      callback: function($$v) {
                        _vm.$set(_vm.formUpdate, "name", $$v)
                      },
                      expression: "formUpdate.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "是否开启", prop: "status" } },
                [
                  _c(
                    "RadioGroup",
                    {
                      attrs: { type: "button" },
                      model: {
                        value: _vm.formUpdate.status,
                        callback: function($$v) {
                          _vm.$set(_vm.formUpdate, "status", $$v)
                        },
                        expression: "formUpdate.status"
                      }
                    },
                    [
                      _c("Radio", { attrs: { label: 1, value: 1 } }, [
                        _vm._v("开启")
                      ]),
                      _vm._v(" "),
                      _c("Radio", { attrs: { label: 0, value: 0 } }, [
                        _vm._v("关闭")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { label: "角色描述", prop: "description" } },
                [
                  _c("Input", {
                    attrs: { type: "textarea", placeholder: "角色描述" },
                    model: {
                      value: _vm.formUpdate.description,
                      callback: function($$v) {
                        _vm.$set(_vm.formUpdate, "description", $$v)
                      },
                      expression: "formUpdate.description"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "box",
            { attrs: { title: "权限管理" } },
            [
              _c("tree", {
                attrs: { data: _vm.treePermissions, "show-checkbox": "" }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { attrs: { slot: "footer" }, slot: "footer" },
        [
          _c(
            "Button",
            {
              on: {
                click: function($event) {
                  _vm.updateSubmit(
                    "formUpdate",
                    "role/" + _vm.componentProps.id
                  )
                }
              }
            },
            [_vm._v("更新")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8be9cfd0", module.exports)
  }
}

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "my-lists",
    {
      attrs: { columns: _vm.columns, loading: _vm.loading },
      on: { change: _vm.search },
      model: {
        value: _vm.data,
        callback: function($$v) {
          _vm.data = $$v
        },
        expression: "data"
      }
    },
    [
      _c(
        "Card",
        [
          _c("p", { attrs: { slot: "title" }, slot: "title" }, [
            _c("span", [_vm._v("搜索")])
          ]),
          _vm._v(" "),
          _c(
            "Form",
            { ref: "searchForm", attrs: { model: _vm.searchForm, inline: "" } },
            [
              _c(
                "FormItem",
                {
                  attrs: { prop: "name", label: "角色名称", "label-width": 60 }
                },
                [
                  _c("Input", {
                    attrs: { type: "text" },
                    model: {
                      value: _vm.searchForm.name,
                      callback: function($$v) {
                        _vm.$set(_vm.searchForm, "name", $$v)
                      },
                      expression: "searchForm.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "FormItem",
                { attrs: { "label-width": 1 } },
                [
                  _c(
                    "Button",
                    {
                      attrs: { type: "primary" },
                      on: {
                        click: function($event) {
                          _vm.search(1)
                        }
                      }
                    },
                    [_vm._v("搜索")]
                  ),
                  _vm._v(" "),
                  _c(
                    "Button",
                    {
                      attrs: { type: "warning" },
                      on: {
                        click: function($event) {
                          _vm.showComponent("Create")
                        }
                      }
                    },
                    [_vm._v("添加")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(_vm.component.current, {
        tag: "components",
        attrs: { componentProps: _vm.component.data },
        on: { "on-change": _vm.hideComponent }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-21b4335a", module.exports)
  }
}

/***/ })

});