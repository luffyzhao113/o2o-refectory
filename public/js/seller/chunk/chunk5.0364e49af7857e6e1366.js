webpackJsonp([5],{"+fyE":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default"),t._v(" "),n("div",{staticClass:"box-flex-list"},[n("Card",{attrs:{"dis-hover":""}},[n("p",{attrs:{slot:"title"},slot:"title"},[t._t("title",[n("span",[t._v("列表")])]),t._v(" "),t._t("button")],2),t._v(" "),n("Table",{ref:"table",attrs:{columns:t.tableCol,data:t.value.data,size:"small","row-class-name":t.rowClassName,loading:t.loading}}),t._v(" "),n("Page",{attrs:{total:t.value.page.total,size:"small",current:t.value.page.current,"page-size":t.value.page.page_size,"show-total":""},on:{"on-change":t.change}})],1)],1)],2)},staticRenderFns:[]}},"79/q":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,o=n("wbiy"),r=(a=o)&&a.__esModule?a:{default:a};e.default={mixins:[r.default],data:function(){return{searchForm:{},data:{data:[],page:{total:0,current:1,page_size:20}},component:{current:"",data:{}}}},mounted:function(){this.search()},methods:{search:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]},assignmentData:function(t){this.data.data=t.data,this.data.page.total=t.total,this.data.page.current=t.current_page,this.data.page.page_size=t.per_page},showComponent:function(t,e){this.component.current=t,this.component.data=e},hideComponent:function(){this.component.current="",this.component.data={},this.search()},destroyItem:function(t,e){var n=this;this.$http.delete(e).then(function(t){n.search()}).catch(function(t){n.formatErrors(t)})},request:function(t){var e=JSON.parse(JSON.stringify(this.searchForm));return e.page=t,e}}}},DT5D:function(t,e,n){var a=n("uknp");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("73dff458",a,!0,{})},PqZK:function(t,e,n){var a=n("T+rx");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("23a4e33b",a,!0,{})},"T+rx":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".box-flex-list{position:relative}.box-flex-list .ivu-card-head .ivu-btn{float:right}.box-flex-list .ivu-card-head p{height:24px;line-height:24px}.box-flex-list .ivu-table .table-info-row td{background-color:#2db7f5;color:#fff}.box-flex-list .ivu-page{text-align:right}.box-flex-list .ivu-table-wrapper{margin-bottom:15px}",""])},UxZ5:function(t,e,n){var a=n("VU/8")(n("rwfZ"),n("nz2+"),!1,function(t){n("DT5D")},"data-v-1d98f8a1",null);t.exports=a.exports},dRdT:function(t,e,n){var a=n("VU/8")(n("mTUa"),n("+fyE"),!1,function(t){n("PqZK")},null,null);t.exports=a.exports},mTUa:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"my-lists",props:{value:{type:Object,default:function(){return{data:[],page:{total:100,current:1,page_size:20}}}},columns:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1}},data:function(){return{leftCol:[{title:"序号",render:function(t,e){var n=e.index;return t("span",null,[++n])},width:75}],rightCol:[]}},computed:{tableCol:function(){return this.leftCol.concat(this.columns,this.rightCol)}},methods:{change:function(t){this.$emit("change",t)},rowClassName:function(t,e){}}}},"nz2+":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("my-lists",{attrs:{columns:t.columns},model:{value:t.data,callback:function(e){t.data=e},expression:"data"}})},staticRenderFns:[]}},rwfZ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(n("dRdT")),o=r(n("79/q"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={name:"index",components:{MyLists:a.default},mixins:[o.default],data:function(){var t=this;return{columns:[{title:"商品名称",key:"name",tooltip:!0},{title:"分类",maxWidth:150,render:function(t,e){return t("span",null,[e.row.categories.name])}},{title:"条码",maxWidth:150,key:"bar_code"},{title:"价格",maxWidth:150,key:"price"},{title:"库存",maxWidth:150,key:"stock"},{title:"销量",maxWidth:150,key:"sale"},{title:"操作",maxWith:100,render:function(e,n){var a=n.row;return e("poptip",{attrs:{confirm:!0,transfer:!0,title:"确定要恢复吗？"},on:{"on-ok":function(){return t.restore(a.id)}}},[e("i-button",{attrs:{size:"small"}},["恢复"])])}}]}},methods:{search:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$http.get("goods/recycle",{params:this.request(e)}).then(function(e){t.assignmentData(e.data.data)}).catch(function(e){t.formatErrors(e)}).finally(function(){t.loading=!1})},restore:function(t){var e=this;this.$http.put("goods/"+t+"/restore").then(function(){e.search()}).catch(function(t){e.formatErrors(t)}).finally(function(){e.loading=!1})}}}},uknp:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])}});