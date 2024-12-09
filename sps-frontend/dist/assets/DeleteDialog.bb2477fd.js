import{d as m,y as f,c as i,n as d,G as v,k as p,l as _,e as g,f as c,z as r,i as x,j as h,H as u,I as b,J as w}from"./index.5c2e6855.js";import{a as k}from"./VListItemAction.f187d94c.js";import{_ as y}from"./VDialog.54b8c02e.js";const D=m({__name:"ListItemActions",setup(o){const e=f(),t=i(()=>e.open!=null),n=i(()=>e.edit!=null),s=i(()=>e.delete!=null);return{__sfc:!0,listeners:e,showOpen:t,showEdit:n,showDelete:s}}});var L=function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(k,[t(v,{attrs:{"offset-y":"",bottom:"",origin:"center center",transition:"scale-transition"},scopedSlots:e._u([{key:"activator",fn:function({on:s}){return[t(p,e._g({attrs:{text:"",icon:""},on:{click:function(l){l.stopPropagation()}}},s),[t(_,[e._v("mdi-dots-vertical")])],1)]}}])},[t(g,[n.showOpen?t(c,{on:{click:function(s){return s.stopPropagation(),e.$emit("open")}}},[t(r,[t(_,{staticClass:"mr-2"},[e._v(" mdi-folder-open ")]),t("span",[e._v("\xD6ffnen")])],1)],1):e._e(),n.showEdit?t(c,{on:{click:function(s){return s.stopPropagation(),e.$emit("edit")}}},[t(r,[t(_,{staticClass:"mr-2"},[e._v(" mdi-pencil ")]),t("span",[e._v("Bearbeiten")])],1)],1):e._e(),n.showDelete?t(c,{on:{click:function(s){return s.stopPropagation(),e.$emit("delete")}}},[t(r,[t(_,{staticClass:"mr-2"},[e._v(" mdi-delete ")]),t("span",[e._v("L\xF6schen")])],1)],1):e._e()],1)],1)],1)},C=[],$=d(D,L,C,!1,null,"651ca140",null,null);const B=$.exports,A=m({__name:"DeleteDialog",props:{value:{type:Boolean},isLoadingAnimation:{type:Boolean,default:!1},descriptorString:null},emits:["input","delete"],setup(o,{emit:e}){const t=o,n=i({get:()=>t.value,set:a=>e("input",a!=null?a:!1)});function s(){n.value=!1}function l(){e("delete")}return{__sfc:!0,props:t,emits:e,visible:n,cancel:s,deleteItem:l}}});var F=function(){var e=this,t=e._self._c,n=e._self._setupProxy;return t(y,{attrs:{persistent:"","max-width":"290"},model:{value:n.visible,callback:function(s){n.visible=s},expression:"visible"}},[t(x,[t(h,{staticClass:"text-h5"},[e._v(" L\xF6schen? ")]),n.props.descriptorString?t(u,[e._v(" Soll "),t("span",{staticClass:"font-weight-bold"},[e._v(e._s(e.descriptorString))]),e._v(" wirklich gel\xF6scht werden? ")]):t(u,[e._v(" Soll der Datensatz wirklich gel\xF6scht werden? ")]),t(b,[t(w),t(p,{attrs:{text:""},on:{click:n.cancel}},[e._v(" Abbrechen ")]),t(p,{attrs:{color:"error",text:"",loading:n.props.isLoadingAnimation},on:{click:n.deleteItem}},[e._v(" L\xF6schen ")])],1)],1)],1)},I=[],P=d(A,F,I,!1,null,"b3049e8f",null,null);const T=P.exports;export{T as D,B as L};