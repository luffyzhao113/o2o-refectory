webpackJsonp([7],{"/rST":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(n("ExfY")),o=i(n("3A9z")),r=i(n("Am3z"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={name:"create",components:{IDrawer:a.default},mixins:[o.default,r.default],data:function(){return{formCreate:{values:[{name:""}],category_id:this.$route.query.category_id}}},methods:{handleAdd:function(){this.formCreate.values.push({name:""})},handleRemove:function(t){this.formCreate.values.splice(t,1)}}}},"0jOw":function(t,e,n){var a=n("VU/8")(n("A5/f"),n("Wkdi"),!1,function(t){n("lsTo")},null,null);t.exports=a.exports},"14zQ":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".box-flex-list{position:relative}.box-flex-list .ivu-card-head .right{float:right}.box-flex-list .ivu-card-head .title{height:24px;line-height:24px}.box-flex-list .ivu-table .table-info-row td{background-color:#2db7f5;color:#fff}.box-flex-list .ivu-page{text-align:right}.box-flex-list .ivu-table-wrapper{margin-bottom:15px}",""])},"339A":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])},"3A9z":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{componentProps:{}},data:function(){return{loading:!1}},methods:{change:function(t){!1===t&&this.$emit("on-change")}}}},"A5/f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"my-lists",props:{value:{type:Object,default:function(){return{data:[],page:{total:100,current:1,page_size:20}}}},columns:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1}},data:function(){return{leftCol:[{title:"序号",render:function(t,e){var n=e.index;return t("span",null,[++n])},width:75}],rightCol:[]}},computed:{tableCol:function(){return this.leftCol.concat(this.columns,this.rightCol)}},methods:{change:function(t){this.$emit("change",t)},rowClassName:function(t,e){}}}},Am3z:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,o=n("y6l7"),r=(a=o)&&a.__esModule?a:{default:a};e.default={mixins:[r.default],methods:{updateSubmit:function(t,e){var n=this;this.$refs[t].validate(function(a){a?(n.loading=!0,n.$http.put(e,n.unObserver(n._data[t])).then(function(t){n.$Message.success("Success!"),n.change(!1)}).catch(function(t){n.formatErrors(t)}).finally(function(){n.loading=!1})):n.$Message.error("验证不通过!")})},createSubmit:function(t,e){var n=this;this.$refs[t].validate(function(a){a&&(n.loading=!0,n.$http.post(e,n._data[t]).then(function(t){n.$Message.success("Success!"),n.change(!1)}).catch(function(t){n.formatErrors(t)}).finally(function(){n.loading=!1}))})}}}},ExfY:function(t,e,n){var a=n("VU/8")(n("f56g"),n("OwJx"),!1,function(t){n("fjDp")},"data-v-37740cd9",null);t.exports=a.exports},F7MY:function(t,e,n){var a=n("tgxq");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("09d99444",a,!0,{})},JsaZ:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".modal-body[data-v-37740cd9]{height:calc(100% - 53px);overflow-y:auto;margin-right:-16px;padding-right:16px}.compon-drawer-footer[data-v-37740cd9]{border-top:1px solid #e8e8e8;padding:10px 16px;text-align:right;background:#fff}.compon-drawer-footer [data-v-37740cd9]{text-align:right}",""])},Mc1r:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(n("0jOw")),o=s(n("VWqC")),r=s(n("k4Rv")),i=s(n("nvVt"));function s(t){return t&&t.__esModule?t:{default:t}}e.default={name:"index",components:{MyLists:a.default,Create:r.default,Update:i.default},mixins:[o.default],data:function(){var t=this;return{searchForm:{category_id:this.$route.query.category_id},columns:[{title:"属性名",key:"name"},{title:"属性值",render:function(t,e){var n="";return e.row.values.forEach(function(t,e){n+=0===e?t.name:","+t.name}),t("div",null,[n])}},{title:"操作",render:function(e,n){var a=n.row;return e("button-group",null,[e("i-button",{attrs:{size:"small"},on:{click:function(){return t.showComponent("Update",a)}}},["修改"]),e("i-button",{attrs:{size:"small"},on:{click:function(){return t.destroyItem(a,"attribute/"+a.id)}}},["删除"])])}}]}},methods:{search:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.loading=!0,this.$http.get("attribute",{params:this.request(e)}).then(function(e){t.assignmentData(e.data.data)}).finally(function(){t.loading=!1})},back:function(){this.$store.dispatch("closeCurrent")}}}},N240:function(t,e,n){var a=n("ZNnA");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("138fec3a",a,!0,{})},N4Yx:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i-drawer",{attrs:{title:"添加类目属性",loading:t.loading}},[n("Form",{ref:"formCreate",attrs:{model:t.formCreate,"label-width":100}},[n("FormItem",{attrs:{label:"属性名称",prop:"name",rules:{required:!0,message:"属性名称必须填写"}}},[n("Row",[n("Col",{attrs:{span:"12"}},[n("Input",{attrs:{placeholder:"属性名称"},model:{value:t.formCreate.name,callback:function(e){t.$set(t.formCreate,"name",e)},expression:"formCreate.name"}})],1)],1)],1),t._v(" "),t._l(t.formCreate.values,function(e,a){return n("FormItem",{key:a,attrs:{label:"类目属性值",prop:"values."+a+".name",rules:{required:!0,message:"类目属性值必须填写"}}},[n("Row",[n("Col",{attrs:{span:"18"}},[n("Input",{attrs:{placeholder:"类目属性值"},model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"item.name"}})],1),t._v(" "),n("Col",{attrs:{span:"4",offset:"1"}},[n("Button",{on:{click:function(e){t.handleRemove(a)}}},[t._v("删除")])],1)],1)],1)}),t._v(" "),n("FormItem",[n("Row",[n("Col",{attrs:{span:"12"}},[n("Button",{attrs:{type:"dashed",long:"",icon:"md-add"},on:{click:t.handleAdd}},[t._v("添加属性值")])],1)],1)],1)],2),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{on:{click:function(e){t.createSubmit("formCreate","attribute")}}},[t._v("创建")])],1)],1)},staticRenderFns:[]}},O8f5:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("my-lists",{attrs:{loading:t.loading,columns:t.columns},on:{change:t.search},model:{value:t.data,callback:function(e){t.data=e},expression:"data"}},[n("template",{slot:"button"},[n("button-group",[n("Button",{attrs:{size:"small",type:"success"},on:{click:function(e){t.showComponent("Create")}}},[t._v("添加")]),t._v(" "),n("Button",{attrs:{size:"small",type:"success"},on:{click:function(e){t.back()}}},[t._v("返回")])],1)],1),t._v(" "),n(t.component.current,{tag:"components",attrs:{componentProps:t.component.data},on:{"on-change":t.hideComponent}})],2)},staticRenderFns:[]}},OwJx:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Drawer",{attrs:{title:t.title,value:!0,transfer:!1,"mask-closable":!1,width:t.width},on:{"on-visible-change":t.change}},[n("div",{staticClass:"modal-body"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"compon-drawer-footer"},[t._t("footer")],2),t._v(" "),t.loading?n("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)},staticRenderFns:[]}},VWqC:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("y6l7")),o=r(n("dgho"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={mixins:[a.default,o.default],data:function(){return{searchForm:{},data:{data:[],page:{total:0,current:1,page_size:20}}}},mounted:function(){var t=this;this.$nextTick(function(){t.search()})},methods:{search:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]},assignmentData:function(t){this.data.data=t.data,this.data.page.total=t.total,this.data.page.current=t.current_page,this.data.page.page_size=t.per_page},destroyItem:function(t,e){var n=this;this.$http.delete(e).then(function(t){n.search()}).catch(function(t){n.formatErrors(t)})},request:function(t){var e=JSON.parse(JSON.stringify(this.searchForm));return e.page=t,e}}}},Wkdi:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default"),t._v(" "),n("div",{staticClass:"box-flex-list"},[n("Card",{attrs:{"dis-hover":""}},[n("div",{attrs:{slot:"title"},slot:"title"},[t._t("title",[n("span",[t._v("列表")])]),t._v(" "),n("div",{staticClass:"right"},[t._t("button")],2)],2),t._v(" "),n("Table",{ref:"table",attrs:{columns:t.tableCol,data:t.value.data,size:"small","row-class-name":t.rowClassName,loading:t.loading}}),t._v(" "),n("Page",{attrs:{total:t.value.page.total,size:"small",current:t.value.page.current,"page-size":t.value.page.page_size,"show-total":""},on:{"on-change":t.change}})],1)],1)],2)},staticRenderFns:[]}},ZNnA:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])},dUUO:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i-drawer",{attrs:{title:"修改类目属性",loading:t.loading}},[n("Form",{ref:"formUpdate",attrs:{model:t.formUpdate,"label-width":100}},[n("FormItem",{attrs:{label:"属性名称",prop:"name",rules:{required:!0,message:"属性名称必须填写"}}},[n("Row",[n("Col",{attrs:{span:"12"}},[n("Input",{attrs:{placeholder:"属性名称"},model:{value:t.formUpdate.name,callback:function(e){t.$set(t.formUpdate,"name",e)},expression:"formUpdate.name"}})],1)],1)],1),t._v(" "),t._l(t.formUpdate.values,function(e,a){return n("FormItem",{key:a,attrs:{label:"类目属性值",prop:"values."+a+".name",rules:{required:!0,message:"类目属性值必须填写"}}},[n("Row",[n("Col",{attrs:{span:"18"}},[n("Input",{attrs:{placeholder:"类目属性值"},model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"item.name"}})],1),t._v(" "),n("Col",{attrs:{span:"4",offset:"1"}},[n("Button",{on:{click:function(e){t.handleRemove(a)}}},[t._v("删除")])],1)],1)],1)}),t._v(" "),n("FormItem",[n("Row",[n("Col",{attrs:{span:"12"}},[n("Button",{attrs:{type:"dashed",long:"",icon:"md-add"},on:{click:t.handleAdd}},[t._v("添加属性值")])],1)],1)],1)],2),t._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{on:{click:function(e){t.updateSubmit("formUpdate","attribute/"+t.componentProps.id)}}},[t._v("创建")])],1)],1)},staticRenderFns:[]}},dgho:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{component:{current:"",data:{}}}},methods:{showComponent:function(t,e){this.component.current=t,this.component.data=e},hideComponent:function(){this.component.current="",this.component.data={},this.search()}}}},f56g:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"i-drawer",props:{title:{type:String,default:"弹窗"},width:{type:Number,default:520},loading:{type:Boolean,default:!1}},methods:{change:function(t){this.$parent.$emit("on-change")}}}},fjDp:function(t,e,n){var a=n("JsaZ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("7986efcc",a,!0,{})},h4E6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(n("ExfY")),o=i(n("3A9z")),r=i(n("Am3z"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={name:"update",components:{IDrawer:a.default},mixins:[o.default,r.default],mounted:function(){var t=this;this.$nextTick(function(){t.loading=!0,t.$http.get("attribute/"+t.componentProps.id+"/edit").then(function(e){t.formUpdate=e.data.data}).finally(function(){t.loading=!1})})},data:function(){return{formUpdate:{values:[]}}},methods:{handleAdd:function(){this.formUpdate.values.push({name:""})},handleRemove:function(t){this.formUpdate.values.splice(t,1)}}}},k4Rv:function(t,e,n){var a=n("VU/8")(n("/rST"),n("N4Yx"),!1,function(t){n("N240")},"data-v-0c693785",null);t.exports=a.exports},kjnc:function(t,e,n){var a=n("VU/8")(n("Mc1r"),n("O8f5"),!1,function(t){n("F7MY")},"data-v-33305230",null);t.exports=a.exports},lsTo:function(t,e,n){var a=n("14zQ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("6516009c",a,!0,{})},nvVt:function(t,e,n){var a=n("VU/8")(n("h4E6"),n("dUUO"),!1,function(t){n("ozjN")},"data-v-4088e924",null);t.exports=a.exports},ozjN:function(t,e,n){var a=n("339A");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("790bdf42",a,!0,{})},tgxq:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])}});