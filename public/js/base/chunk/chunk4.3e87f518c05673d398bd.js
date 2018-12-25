webpackJsonp([4],{"/cFX":function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("Table",{attrs:{columns:this.mergeCol,data:this.parent,loading:this.loading}})},staticRenderFns:[]}},"/sfj":function(t,e,a){var n=a("VU/8")(a("hPTO"),a("mbik"),!1,function(t){a("yheb")},"data-v-117bdab6",null);t.exports=n.exports},"1QZw":function(t,e,a){var n=a("68z6");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("4b8e2108",n,!0,{})},"3A9z":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{componentProps:{}},data:function(){return{loading:!1}},methods:{change:function(t){!1===t&&this.$emit("on-change")}}}},"3Vps":function(t,e,a){var n=a("Sh2H");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("99928668",n,!0,{})},"4G3h":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=l(a("3A9z")),r=l(a("Am3z")),o=l(a("/sfj")),i=l(a("P6q2"));function l(t){return t&&t.__esModule?t:{default:t}}e.default={components:{GroupCascader:i.default,ComponentModal:o.default},name:"update",mixins:[n.default,r.default],data:function(){return{formUpdate:{islink:0,name:"",parent_id:0,icon:"",display_name:"",description:"",sort:1},parents:[]}},mounted:function(){var t=this;this.$http.get("permission/"+this.componentProps.id+"/edit").then(function(e){t.formUpdate=Object.assign({},t.formUpdate,e.data.data.row),t.parents=e.data.data.parents}).catch(function(e){t.formatErrors(e)})}}},"4UMB":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("component-modal",{attrs:{title:"修改权限",loading:t.loading}},[a("Form",{ref:"formUpdate",attrs:{model:t.formUpdate,"label-width":80}},[a("FormItem",{attrs:{label:"权限标识",prop:"name",rules:{required:!0,message:"权限标识不能为空，并且格式为 a-z.a-z ！",pattern:/[a-z]+(\.[a-z]+)?/}}},[a("Input",{attrs:{placeholder:"标识"},model:{value:t.formUpdate.name,callback:function(e){t.$set(t.formUpdate,"name",e)},expression:"formUpdate.name"}})],1),t._v(" "),a("FormItem",{attrs:{label:"权限名称",prop:"display_name",rules:{required:!0,message:"权限名称不能为空"}}},[a("Input",{attrs:{placeholder:"权限名称"},model:{value:t.formUpdate.display_name,callback:function(e){t.$set(t.formUpdate,"display_name",e)},expression:"formUpdate.display_name"}})],1),t._v(" "),a("FormItem",{attrs:{label:"上级菜单",prop:"parent_id"}},[a("group-cascader",{attrs:{placeholder:"顶级菜单可不选择",data:t.parents},model:{value:t.formUpdate.parent_id,callback:function(e){t.$set(t.formUpdate,"parent_id",e)},expression:"formUpdate.parent_id"}})],1),t._v(" "),a("FormItem",{attrs:{label:"排序",prop:"sort"}},[a("Input",{attrs:{placeholder:"排序",rules:{required:!0,message:"排序不能为空"}},model:{value:t.formUpdate.sort,callback:function(e){t.$set(t.formUpdate,"sort",e)},expression:"formUpdate.sort"}})],1),t._v(" "),a("FormItem",{attrs:{label:"菜单图标",prop:"icon"}},[a("Input",{attrs:{placeholder:"菜单图标"},model:{value:t.formUpdate.icon,callback:function(e){t.$set(t.formUpdate,"icon",e)},expression:"formUpdate.icon"}})],1),t._v(" "),a("FormItem",{attrs:{label:"是否菜单",prop:"islink"}},[a("RadioGroup",{attrs:{type:"button"},model:{value:t.formUpdate.islink,callback:function(e){t.$set(t.formUpdate,"islink",e)},expression:"formUpdate.islink"}},[a("Radio",{attrs:{label:1,value:1}},[t._v("菜单")]),t._v(" "),a("Radio",{attrs:{label:0,value:0}},[t._v("权限")])],1)],1),t._v(" "),a("FormItem",{attrs:{label:"菜单描述",prop:"description",rules:{max:200}}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"菜单描述"},model:{value:t.formUpdate.description,callback:function(e){t.$set(t.formUpdate,"description",e)},expression:"formUpdate.description"}})],1)],1),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{on:{click:function(e){t.updateSubmit("formUpdate","permission/"+t.componentProps.id)}}},[t._v("更新")])],1)],1)},staticRenderFns:[]}},"68z6":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},Am3z:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=a("y6l7"),o=(n=r)&&n.__esModule?n:{default:n};e.default={mixins:[o.default],methods:{updateSubmit:function(t,e){var a=this;this.$refs[t].validate(function(n){n?(a.loading=!0,a.$http.put(e,a.unObserver(a._data[t])).then(function(t){a.$Message.success("Success!"),a.change(!1)}).catch(function(t){a.formatErrors(t)}).finally(function(){a.loading=!1})):a.$Message.error("验证不通过!")})},createSubmit:function(t,e){var a=this;this.$refs[t].validate(function(n){n&&(a.loading=!0,a.$http.post(e,a._data[t]).then(function(t){a.$Message.success("Success!"),a.change(!1)}).catch(function(t){a.formatErrors(t)}).finally(function(){a.loading=!1}))})}}}},J2lI:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=l(a("VWqC")),r=l(a("hx4d")),o=l(a("z2w4")),i=l(a("e4VV"));function l(t){return t&&t.__esModule?t:{default:t}}e.default={components:{TabelExpandTree:i.default,Create:r.default,Update:o.default},mixins:[n.default],name:"index",data:function(){var t=this;return{columns:[{title:"菜单名称",key:"title",render:function(t,e){return t("span",{class:"table-col-title"},[e.row.title])}},{title:"菜单路径",key:"name"},{title:"排序",key:"sort"},{title:"是否菜单",render:function(t,e){var a=e.row;return t("tag",{attrs:{color:a.islink?"green":"orange"}},[a.islink?"菜单":"权限"])}},{title:"菜单图标",key:"icon"},{title:"操作",render:function(e,a){var n=a.row;return e("button-group",null,[e("i-button",{attrs:{size:"small"},on:{click:function(){return t.showComponent("Update",n)}}},["修改"]),e("i-button",{attrs:{disabled:t.child(n.id).length>0,size:"small"},on:{click:function(){return t.destroyItem(n,"permission/"+n.id)}}},["删除"])])}}],lists:[]}},methods:{search:function(){var t=this;arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.loading=!0,this.$http.get("permission").then(function(e){t.lists=e.data.data}).catch(function(e){t.formatErrors(e)}).finally(function(){t.loading=!1})},child:function(t){return this.lists.filter(function(e){return e.parent_id==t})}}}},Kktj:function(t,e,a){var n=a("VU/8")(a("J2lI"),a("eoa5"),!1,function(t){a("w5U0")},null,null);t.exports=n.exports},LTAw:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".modal-body[data-v-117bdab6]{max-height:500px;overflow-y:auto}",""])},P6q2:function(t,e,a){var n=a("VU/8")(a("RNND"),a("pVnx"),!1,function(t){a("3Vps")},"data-v-85964954",null);t.exports=n.exports},RNND:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"group-cascader",props:{data:{type:Array,default:function(){return[]}},value:{},label:{type:String,default:"title"},fValue:{type:String,default:"id"},placeholder:{type:String,default:""},changeOnSelect:{type:Boolean,default:!0}},computed:{formatData:function(){return this.convert(JSON.parse(JSON.stringify(this.data)))},formatValue:{get:function(){var t=this,e=this.data.find(function(e){return e[t.fValue]===t.value});if(e){var a=this.findP(this.data,e);return a.push(e[this.fValue]),a}return[]},set:function(t){t[t.length-1]?this.$emit("input",t[t.length-1]):this.$emit("input",0)}}},methods:{convert:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[];return t.forEach(function(r,o){r.parent_id===a&&(delete t[o],n.push({value:r[e.fValue],label:r[e.label],children:e.convert(t,r.id)}))}),n},findP:function(t,e){var a=this,n=[];return t.forEach(function(r){r.id===e.parent_id&&(n.push(r[a.fValue]),n=a.findP(t,r).concat(n))}),n}}}},S3A8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"tabel-expand-tree",props:{data:Array,columns:Array,loading:{type:Boolean,default:!1}},data:function(){var t=this;return{defaultColumn:[{type:"expand",render:function(e,a){var n=a.row;a.index;return e("i-table",{attrs:{"show-header":!1,data:t.child(n.id),columns:t.mergeCol},directives:[{name:"show",value:t.child(n.id)&&t.child(n.id).length}],class:"table-expand-tree-"+t.level(n).length},[])},width:50}]}},computed:{parent:function(){return this.child(0)},mergeCol:function(){return this.defaultColumn.concat(this.columns)},defaultData:function(){var t=JSON.parse(JSON.stringify(this.data));return t.forEach(function(e,a){t[a]._expanded=!0}),t}},methods:{child:function(t){return JSON.parse(JSON.stringify(this.defaultData.filter(function(e){return e.parent_id==t})))},level:function(t){var e,a=[];return(e=this.defaultData.find(function(e){return e.id==t.parent_id}))&&(a.push(e),a=a.concat(this.level(e))),a}}}},Sh2H:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},VWqC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(a("y6l7")),r=o(a("dgho"));function o(t){return t&&t.__esModule?t:{default:t}}e.default={mixins:[n.default,r.default],data:function(){return{searchForm:{},data:{data:[],page:{total:0,current:1,page_size:20}}}},mounted:function(){var t=this;this.$nextTick(function(){t.search()})},methods:{search:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]},assignmentData:function(t){this.data.data=t.data,this.data.page.total=t.total,this.data.page.current=t.current_page,this.data.page.page_size=t.per_page},destroyItem:function(t,e){var a=this;this.$http.delete(e).then(function(t){a.search()}).catch(function(t){a.formatErrors(t)})},request:function(t){var e=JSON.parse(JSON.stringify(this.searchForm));return e.page=t,e}}}},bKU2:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("component-modal",{attrs:{title:"创建权限",loading:t.loading}},[a("Form",{ref:"formCreate",attrs:{model:t.formCreate,"label-width":80}},[a("FormItem",{attrs:{label:"权限标识",prop:"name",rules:{required:!0,message:"权限标识不能为空，并且格式为 a-z.a-z ！",pattern:/[a-z]+(\.[a-z]+)?/}}},[a("Input",{attrs:{placeholder:"标识"},model:{value:t.formCreate.name,callback:function(e){t.$set(t.formCreate,"name",e)},expression:"formCreate.name"}})],1),t._v(" "),a("FormItem",{attrs:{label:"权限名称",prop:"display_name",rules:{required:!0,message:"权限名称不能为空"}}},[a("Input",{attrs:{placeholder:"权限名称"},model:{value:t.formCreate.display_name,callback:function(e){t.$set(t.formCreate,"display_name",e)},expression:"formCreate.display_name"}})],1),t._v(" "),a("FormItem",{attrs:{label:"上级菜单",prop:"parent_id"}},[a("group-cascader",{attrs:{placeholder:"顶级菜单可不选择",data:t.parents},model:{value:t.formCreate.parent_id,callback:function(e){t.$set(t.formCreate,"parent_id",e)},expression:"formCreate.parent_id"}})],1),t._v(" "),a("FormItem",{attrs:{label:"排序",prop:"sort",rules:{required:!0,message:"排序不能为空"}}},[a("Input",{attrs:{placeholder:"排序"},model:{value:t.formCreate.sort,callback:function(e){t.$set(t.formCreate,"sort",e)},expression:"formCreate.sort"}})],1),t._v(" "),a("FormItem",{attrs:{label:"菜单图标",prop:"icon"}},[a("Input",{attrs:{placeholder:"菜单图标"},model:{value:t.formCreate.icon,callback:function(e){t.$set(t.formCreate,"icon",e)},expression:"formCreate.icon"}})],1),t._v(" "),a("FormItem",{attrs:{label:"是否菜单",prop:"islink"}},[a("RadioGroup",{attrs:{type:"button"},model:{value:t.formCreate.islink,callback:function(e){t.$set(t.formCreate,"islink",e)},expression:"formCreate.islink"}},[a("Radio",{attrs:{label:1,value:1}},[t._v("菜单")]),t._v(" "),a("Radio",{attrs:{label:0,value:0}},[t._v("权限")])],1)],1),t._v(" "),a("FormItem",{attrs:{label:"菜单描述",prop:"description",rules:{max:200}}},[a("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"菜单描述"},model:{value:t.formCreate.description,callback:function(e){t.$set(t.formCreate,"description",e)},expression:"formCreate.description"}})],1)],1),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("Button",{on:{click:function(e){t.createSubmit("formCreate","permission")}}},[t._v("创建")])],1)],1)},staticRenderFns:[]}},cWh5:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".ivu-table-expanded-cell{padding:0!important;height:auto!important;border-bottom:none!important}.ivu-table-expanded-cell>.ivu-table-wrapper{height:100%!important;margin-bottom:0!important;border:none!important}.ivu-table-expanded-cell .table-expand-tree-0 .table-col-title{padding-left:20px}.ivu-table-expanded-cell .table-expand-tree-1 .table-col-title{padding-left:40px}.ivu-table-expanded-cell .table-expand-tree-2 .table-col-title{padding-left:60px}.ivu-table-expanded-cell .table-expand-tree-3 .table-col-title{padding-left:80px}.ivu-table-expanded-cell .table-expand-tree-4 .table-col-title{padding-left:100px}.ivu-table-expanded-cell .table-expand-tree-5 .table-col-title{padding-left:120px}",""])},dgho:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{component:{current:"",data:{}}}},methods:{showComponent:function(t,e){this.component.current=t,this.component.data=e},hideComponent:function(){this.component.current="",this.component.data={},this.search()}}}},e4VV:function(t,e,a){var n=a("VU/8")(a("S3A8"),a("/cFX"),!1,function(t){a("rYAc")},null,null);t.exports=n.exports},eoa5:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"box-flex-list"},[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[a("span",[t._v("列表")]),t._v(" "),a("Button",{attrs:{size:"small",type:"success"},on:{click:function(e){t.showComponent("Create")}}},[t._v("添加")])],1),t._v(" "),a("TabelExpandTree",{staticClass:"permission-role",attrs:{columns:t.columns,data:t.lists,loading:t.loading}})],1)],1),t._v(" "),a(t.component.current,{tag:"components",attrs:{componentProps:t.component.data},on:{"on-change":t.hideComponent}})],1)},staticRenderFns:[]}},hPTO:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"component-modal",props:{title:{type:String,default:"弹窗"},width:{type:Number,default:520},loading:{type:Boolean,default:!1}},methods:{change:function(t){this.$parent.$emit("on-change")}}}},hx4d:function(t,e,a){var n=a("VU/8")(a("z318"),a("bKU2"),!1,function(t){a("odSK")},"data-v-59f72b4e",null);t.exports=n.exports},mbik:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Modal",{attrs:{title:t.title,value:!0,transfer:!1,"mask-closable":!1,width:t.width},on:{"on-visible-change":t.change}},[a("div",{staticClass:"modal-body"},[t._t("default")],2),t._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[t._t("footer")],2),t._v(" "),t.loading?a("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)},staticRenderFns:[]}},o6Zm:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},odSK:function(t,e,a){var n=a("o6Zm");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("6edf6312",n,!0,{})},pVnx:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("Cascader",{attrs:{data:t.formatData,"change-on-select":t.changeOnSelect,trigger:"hover",placeholder:t.placeholder,transfer:""},model:{value:t.formatValue,callback:function(e){t.formatValue=e},expression:"formatValue"}})},staticRenderFns:[]}},rYAc:function(t,e,a){var n=a("cWh5");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("b9901bca",n,!0,{})},w5U0:function(t,e,a){var n=a("z29L");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("05fa80fa",n,!0,{})},yheb:function(t,e,a){var n=a("LTAw");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("bf9a99e2",n,!0,{})},z29L:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".permission-role .ivu-table-body{overflow-y:auto}",""])},z2w4:function(t,e,a){var n=a("VU/8")(a("4G3h"),a("4UMB"),!1,function(t){a("1QZw")},"data-v-c6cddbcc",null);t.exports=n.exports},z318:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=l(a("3A9z")),r=l(a("Am3z")),o=l(a("/sfj")),i=l(a("P6q2"));function l(t){return t&&t.__esModule?t:{default:t}}e.default={components:{GroupCascader:i.default,ComponentModal:o.default},name:"create",mixins:[n.default,r.default],data:function(){return{formCreate:{islink:0,name:"",parent_id:0,icon:"",display_name:"",description:"",sort:1},parents:[]}},mounted:function(){var t=this;this.loading=!0,this.$http.get("permission/create").then(function(e){t.parents=e.data.data}).finally(function(){t.loading=!1})}}}});