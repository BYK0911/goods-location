(window["webpackJsonp_geo"]=window["webpackJsonp_geo"]||[]).push([["chunk-563d2f98"],{"3ef4":function(e,t,n){"use strict";n.d(t,"a",(function(){return $}));var c=n("7a23"),r=n("461c"),a=n("0898"),o=n("c23a"),s=n("c083");const u={},l=Object(a["b"])({a11y:{type:Boolean,default:!0},locale:{type:Object(a["c"])(Object)},size:o["c"],button:{type:Object(a["c"])(Object)},experimentalFeatures:{type:Object(a["c"])(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:Object(a["c"])(Object)},zIndex:Number,namespace:{type:String,default:"el"}}),i=(Object(c["defineComponent"])({name:"ElConfigProvider",props:l,setup(e,{slots:t}){Object(c["watch"])(()=>e.message,e=>{Object.assign(u,null!=e?e:{})},{immediate:!0,deep:!0});const n=Object(s["a"])(e);return()=>Object(c["renderSlot"])(t,"default",{config:null==n?void 0:n.value})}}),Object(a["b"])({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}));var b=n("2711"),d=n("304f");const p=["textContent"],f=Object(c["defineComponent"])({name:"ElBadge"}),O=Object(c["defineComponent"])({...f,props:i,setup(e,{expose:t}){const n=e,a=Object(d["b"])("badge"),o=Object(c["computed"])(()=>n.isDot?"":Object(r["isNumber"])(n.value)&&Object(r["isNumber"])(n.max)&&n.max<n.value?n.max+"+":""+n.value);return t({content:o}),(e,t)=>(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])(Object(c["unref"])(a).b())},[Object(c["renderSlot"])(e.$slots,"default"),Object(c["createVNode"])(c["Transition"],{name:Object(c["unref"])(a).namespace.value+"-zoom-in-center",persisted:""},{default:Object(c["withCtx"])(()=>[Object(c["withDirectives"])(Object(c["createElementVNode"])("sup",{class:Object(c["normalizeClass"])([Object(c["unref"])(a).e("content"),Object(c["unref"])(a).em("content",e.type),Object(c["unref"])(a).is("fixed",!!e.$slots.default),Object(c["unref"])(a).is("dot",e.isDot)]),textContent:Object(c["toDisplayString"])(Object(c["unref"])(o))},null,10,p),[[c["vShow"],!e.hidden&&(Object(c["unref"])(o)||e.isDot)]])]),_:1},8,["name"])],2))}});var j=Object(b["a"])(O,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]),m=n("0c24");const g=Object(m["a"])(j);var v=n("54bb"),y=n("f5f6"),h=n("31e7");const C=["success","info","warning","error"],w=Object(y["a"])({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:r["isClient"]?document.body:void 0}),x=Object(a["b"])({customClass:{type:String,default:w.customClass},center:{type:Boolean,default:w.center},dangerouslyUseHTMLString:{type:Boolean,default:w.dangerouslyUseHTMLString},duration:{type:Number,default:w.duration},icon:{type:h["e"],default:w.icon},id:{type:String,default:w.id},message:{type:Object(a["c"])([String,Object,Function]),default:w.message},onClose:{type:Object(a["c"])(Function),required:!1},showClose:{type:Boolean,default:w.showClose},type:{type:String,values:C,default:w.type},offset:{type:Number,default:w.offset},zIndex:{type:Number,default:w.zIndex},grouping:{type:Boolean,default:w.grouping},repeatNum:{type:Number,default:w.repeatNum}}),k={destroy:()=>!0},_=Object(c["shallowReactive"])([]),N=e=>{const t=_.findIndex(t=>t.id===e),n=_[t];let c;return t>0&&(c=_[t-1]),{current:n,prev:c}},S=e=>{const{prev:t}=N(e);return t?t.vm.exposed.bottom.value:0};var B=n("49c6");const A=["id"],T=["innerHTML"],E=Object(c["defineComponent"])({name:"ElMessage"}),V=Object(c["defineComponent"])({...E,props:x,emits:k,setup(e,{expose:t}){const n=e,{Close:a}=h["b"],o=Object(d["b"])("message"),s=Object(c["ref"])(),u=Object(c["ref"])(!1),l=Object(c["ref"])(0);let i=void 0;const b=Object(c["computed"])(()=>n.type?"error"===n.type?"danger":n.type:"info"),p=Object(c["computed"])(()=>{const e=n.type;return{[o.bm("icon",e)]:e&&h["c"][e]}}),f=Object(c["computed"])(()=>n.icon||h["c"][n.type]||""),O=Object(c["computed"])(()=>S(n.id)),j=Object(c["computed"])(()=>n.offset+O.value),m=Object(c["computed"])(()=>l.value+j.value),y=Object(c["computed"])(()=>({top:j.value+"px",zIndex:n.zIndex}));function C(){0!==n.duration&&({stop:i}=Object(r["useTimeoutFn"])(()=>{x()},n.duration))}function w(){null==i||i()}function x(){u.value=!1}function k({code:e}){e===B["a"].esc&&x()}return Object(c["onMounted"])(()=>{C(),u.value=!0}),Object(c["watch"])(()=>n.repeatNum,()=>{w(),C()}),Object(r["useEventListener"])(document,"keydown",k),Object(r["useResizeObserver"])(s,()=>{l.value=s.value.getBoundingClientRect().height}),t({visible:u,bottom:m,close:x}),(e,t)=>(Object(c["openBlock"])(),Object(c["createBlock"])(c["Transition"],{name:Object(c["unref"])(o).b("fade"),onBeforeLeave:e.onClose,onAfterLeave:t[0]||(t[0]=t=>e.$emit("destroy")),persisted:""},{default:Object(c["withCtx"])(()=>[Object(c["withDirectives"])(Object(c["createElementVNode"])("div",{id:e.id,ref_key:"messageRef",ref:s,class:Object(c["normalizeClass"])([Object(c["unref"])(o).b(),{[Object(c["unref"])(o).m(e.type)]:e.type&&!e.icon},Object(c["unref"])(o).is("center",e.center),Object(c["unref"])(o).is("closable",e.showClose),e.customClass]),style:Object(c["normalizeStyle"])(Object(c["unref"])(y)),role:"alert",onMouseenter:w,onMouseleave:C},[e.repeatNum>1?(Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["unref"])(g),{key:0,value:e.repeatNum,type:Object(c["unref"])(b),class:Object(c["normalizeClass"])(Object(c["unref"])(o).e("badge"))},null,8,["value","type","class"])):Object(c["createCommentVNode"])("v-if",!0),Object(c["unref"])(f)?(Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["unref"])(v["a"]),{key:1,class:Object(c["normalizeClass"])([Object(c["unref"])(o).e("icon"),Object(c["unref"])(p)])},{default:Object(c["withCtx"])(()=>[(Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["resolveDynamicComponent"])(Object(c["unref"])(f))))]),_:1},8,["class"])):Object(c["createCommentVNode"])("v-if",!0),Object(c["renderSlot"])(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],{key:1},[Object(c["createCommentVNode"])(" Caution here, message could've been compromised, never use user's input as message "),Object(c["createElementVNode"])("p",{class:Object(c["normalizeClass"])(Object(c["unref"])(o).e("content")),innerHTML:e.message},null,10,T)],2112)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("p",{key:0,class:Object(c["normalizeClass"])(Object(c["unref"])(o).e("content"))},Object(c["toDisplayString"])(e.message),3))]),e.showClose?(Object(c["openBlock"])(),Object(c["createBlock"])(Object(c["unref"])(v["a"]),{key:2,class:Object(c["normalizeClass"])(Object(c["unref"])(o).e("closeBtn")),onClick:Object(c["withModifiers"])(x,["stop"])},{default:Object(c["withCtx"])(()=>[Object(c["createVNode"])(Object(c["unref"])(a))]),_:1},8,["class","onClick"])):Object(c["createCommentVNode"])("v-if",!0)],46,A),[[c["vShow"],u.value]])]),_:3},8,["name","onBeforeLeave"]))}});var I=Object(b["a"])(V,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]),z=n("7d20"),D=n("83ec"),M=n("8afb"),R=n("0a08");let U=1;const L=e=>{const t=!e||Object(z["isString"])(e)||Object(c["isVNode"])(e)||Object(z["isFunction"])(e)?{message:e}:e,n={...w,...t};if(n.appendTo){if(Object(z["isString"])(n.appendTo)){let e=document.querySelector(n.appendTo);Object(D["a"])(e)||(Object(M["a"])("ElMessage","the appendTo option is not an HTMLElement. Falling back to document.body."),e=document.body),n.appendTo=e}}else n.appendTo=document.body;return n},F=e=>{const t=_.indexOf(e);if(-1===t)return;_.splice(t,1);const{handler:n}=e;n.close()},P=({appendTo:e,...t},n)=>{const{nextZIndex:r}=Object(R["a"])(),a="message_"+U++,o=t.onClose,s=document.createElement("div"),u={...t,zIndex:r()+t.zIndex,id:a,onClose:()=>{null==o||o(),F(d)},onDestroy:()=>{Object(c["render"])(null,s)}},l=Object(c["createVNode"])(I,u,Object(z["isFunction"])(u.message)||Object(c["isVNode"])(u.message)?{default:Object(z["isFunction"])(u.message)?u.message:()=>u.message}:null);l.appContext=n||q._context,Object(c["render"])(l,s),e.appendChild(s.firstElementChild);const i=l.component,b={close:()=>{i.exposed.visible.value=!1}},d={id:a,vnode:l,vm:i,handler:b,props:l.component.props};return d},q=(e={},t)=>{if(!r["isClient"])return{close:()=>{}};if(Object(r["isNumber"])(u.max)&&_.length>=u.max)return{close:()=>{}};const n=L(e);if(n.grouping&&_.length){const e=_.find(({vnode:e})=>{var t;return(null==(t=e.props)?void 0:t.message)===n.message});if(e)return e.props.repeatNum+=1,e.props.type=n.type,e.handler}const c=P(n,t);return _.push(c),c.handler};function H(e){for(const t of _)e&&e!==t.props.type||t.handler.close()}C.forEach(e=>{q[e]=(t={},n)=>{const c=L(t);return q({...c,type:e},n)}}),q.closeAll=H,q._context=null;const $=Object(m["b"])(q,"$message")},"3fa7":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n("c9a1"),r=n("d899");function a(){var e=Object(r["useI18n"])(),t=e.t;return function(e,n,r){c["a"].confirm(t(e),t("tip"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning",appendTo:document.querySelector(".map-wrap")}).then(n).catch((function(){r&&r()}))}}},ba4e:function(e,t,n){"use strict";n.r(t);var c=n("5530"),r=n("1da1"),a=(n("96cf"),n("d81d"),n("b0c0"),n("7a23")),o=n("9318"),s=n("d899"),u=n("030a");function l(e){return Object(u["a"])({method:"post",url:"/api_v2/precision/calculate",data:e})}function i(e){return Object(u["a"])({method:"post",url:"/precision/clearAllDot",data:e})}function b(e){return Object(u["a"])({method:"post",url:"/api_v2/precision/getFloor",data:e})}var d=n("e249"),p=["title"],f=["title"],O=["title"],j=["title"],m=["title"],g=Object(a["defineComponent"])({props:{result:{type:Object,default:function(){return{shelfAccuracy:"--",nextShelf:"--",twoShelves:"--",surfaceArrangement:"--",channelAccurancy:"--"}}}},setup:function(e){var t=e,n=Object(s["useI18n"])(),c=n.t;return function(e,n){var r=Object(a["resolveComponent"])("el-form-item"),o=Object(a["resolveComponent"])("el-form"),s=Object(a["resolveComponent"])("el-dialog");return Object(a["openBlock"])(),Object(a["createBlock"])(s,{title:Object(a["unref"])(c)("positioning result"),width:"30%",center:"",class:"dialogStyle"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(o,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(r,{label:Object(a["unref"])(c)("shelfAccuracy")+Object(a["unref"])(c)(":")},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("span",{title:Object(a["unref"])(c)("shelfAccuracy")},Object(a["toDisplayString"])(t.result.shelfAccuracy),9,p)]})),_:1},8,["label"]),Object(a["createVNode"])(r,{label:Object(a["unref"])(c)("Accuracy of next shelf")+Object(a["unref"])(c)(":")},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("span",{title:Object(a["unref"])(c)("shelfAccuracy")},Object(a["toDisplayString"])(t.result.nextShelf),9,f)]})),_:1},8,["label"]),Object(a["createVNode"])(r,{label:Object(a["unref"])(c)("Accuracy of adjacent two shelves")+Object(a["unref"])(c)(":")},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("span",{title:Object(a["unref"])(c)("shelfAccuracy")},Object(a["toDisplayString"])(t.result.twoShelves),9,O)]})),_:1},8,["label"]),Object(a["createVNode"])(r,{label:Object(a["unref"])(c)("Accuracy of surface arrangement")+Object(a["unref"])(c)(":")},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("span",{title:Object(a["unref"])(c)("shelfAccuracy")},Object(a["toDisplayString"])(t.result.surfaceArrangement),9,j)]})),_:1},8,["label"]),Object(a["createVNode"])(r,{label:Object(a["unref"])(c)("Accuracy of channel")+Object(a["unref"])(c)(":")},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("span",{title:Object(a["unref"])(c)("shelfAccuracy")},Object(a["toDisplayString"])(t.result.channelAccurancy),9,m)]})),_:1},8,["label"])]})),_:1})]})),_:1},8,["title"])}}});const v=g;var y=v,h=n("3ef4"),C=n("3fa7");t["default"]=Object(a["defineComponent"])({components:{AccuracyAnalysis:y},setup:function(){var e=Object(s["useI18n"])(),t=e.t,n=Object(a["ref"])([]),u=Object(C["a"])(),p=Object(a["ref"])(),f=window.__POWERED_BY_QIANKUN__?"map name":"store name",O=Object(o["b"])({searchBar:{storeId:{label:f,type:"select",value:p,options:n,props:{filterable:!0}}},pagination:{pageIndex:1,pageSize:30,total:0},loader:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var c,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(p.value){e.next=11;break}return e.next=3,Object(d["j"])();case 3:if(c=e.sent,"SUC"!==c.data.code){e.next=11;break}if(n.value=c.data.data.map((function(e){return{value:e.id,rawLabel:e.name}})),r=n.value,0!==r.length){e.next=9;break}return e.abrupt("return");case 9:p.value=r[0].value,t.storeId=p.value;case 11:return e.next=13,b(t);case 13:if(a=e.sent,o=a.data,"SUC"!==o.code){e.next=17;break}return e.abrupt("return",{tableData:o.data.list,total:o.data.total});case 17:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}),j=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n,c,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.id,e.next=3,l({floorId:n});case 3:c=e.sent,r=c.data,"SUC"===r.code&&(O.dialog.name="AccuracyAnalysis",O.dialog.visible=!0,O.dialog.data={result:{shelfAccuracy:r.data.shelfCorrectPercent||"--",nextShelf:r.data.oneShelfCorrectPercent||"--",twoShelves:r.data.twoShelfCorrectPercent||"--",surfaceArrangement:r.data.rowCorrectPercent||"--",channelAccurancy:r.data.crossCorrectPercent||"--"}});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){u("are you sure to clear?",Object(r["a"])(regeneratorRuntime.mark((function n(){var c,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return c=e.id,n.next=3,i({data:c});case 3:r=n.sent,a=r.data,"SUC"===a.code&&(Object(h["a"])({message:t("clear success"),type:"success"}),O.query());case 6:case"end":return n.stop()}}),n)}))))};return function(){return Object(o["a"])(Object(c["a"])(Object(c["a"])({},O),{},{columns:[{prop:"storeId",label:"store code"},{prop:"name",label:"floor"},{prop:"total",label:"collection number"},{type:"operations",label:"operations",showOverflowTooltip:!1,width:200,fixed:"right",align:"center",btns:[{label:"analysis",handler:j},{label:"clear",handler:m,class:"text-danger"}]}]}))}}})},e249:function(e,t,n){"use strict";n.d(t,"i",(function(){return a})),n.d(t,"j",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"f",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return i})),n.d(t,"g",(function(){return b})),n.d(t,"b",(function(){return d})),n.d(t,"k",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"h",(function(){return O}));n("99af");var c=n("0613"),r=n("030a");function a(e){return window.__POWERED_BY_QIANKUN__&&(e.org=c["a"].state.qiankun.globalState.currentCustomer),Object(r["a"])({method:"post",url:"/api_v2/store/select",data:e})}function o(){var e=window.__POWERED_BY_QIANKUN__?{org:c["a"].state.qiankun.globalState.currentCustomer}:{};return Object(r["a"])({method:"post",url:"/api_v2/store/getAll",data:e})}function s(e){return Object(r["a"])({method:"post",url:"/api_v2/store/add",data:e})}function u(e){return Object(r["a"])({method:"post",url:"/api_v2/store/update",data:e})}function l(e){return Object(r["a"])({method:"post",url:"/api_v2/store/delete",data:e})}function i(e){return Object(r["a"])({method:"post",url:"/api_v2/store/downloadTemplate",responseType:"blob",data:e})}function b(e,t){return Object(r["a"])({method:"post",url:"/api_v2/store/exportMap",responseType:"blob",data:{lang:e,storeId:t}})}var d="/store/importMapCheck";function p(e){return Object(r["a"])({method:"post",url:"/store/importMap",headers:{contentType:"multipart/form-data"},data:e})}function f(e){return Object(r["a"])({method:"post",url:"/api_v2/store/checkWaisUrl",data:e})}function O(){var e=c["a"].state.qiankun.globalState.currentUser.username,t=c["a"].state.qiankun.globalState.currentCustomer;return Object(r["a"])({method:"get",url:"/api_v2/rest/getTerminals/".concat(e,"/").concat(t)})}}}]);