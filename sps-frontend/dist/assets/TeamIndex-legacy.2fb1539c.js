System.register(["./index-legacy.61f8d398.js","./DeleteDialog-legacy.480721f3.js","./TeamApiService-legacy.6d98872a.js","./VListItemAction-legacy.95905544.js","./VSubheader-legacy.02f008b3.js","./VTooltip-legacy.32b0b8e8.js","./VDialog-legacy.ec36ba2d.js","./EntityApiService-legacy.b2f891be.js"],(function(e,t){"use strict";var a,l,i,s,n,o,r,d,u,c,m,_,f,v,g,p,y,b,I,h,T,D,E;return{setters:[e=>{a=e.d,l=e.u,i=e.x,s=e.r,n=e.c,o=e.n,r=e.f,d=e.g,u=e.z,c=e.B,m=e.o,_=e.e,f=e.h,v=e._,g=e.i,p=e.k,y=e.l},e=>{b=e.L,I=e.D},e=>{h=e.T},e=>{T=e._},e=>{D=e._},e=>{E=e._},()=>{},()=>{}],execute:function(){const t=o(a({__name:"TeamListItem",props:{team:null},emits:["deleted"],setup(e,{emit:t}){const a=e,o=l(),r=i(),d=s(!1),u=s(!1),c=n((()=>`${a.team.name}`)),m=n((()=>""));return{__sfc:!0,props:a,emits:t,snackbarStore:o,router:r,deleteDialogVisible:d,deleteDialogIsLoading:u,title:c,subtitle:m,openItem:function(){var e,t;r.push({name:"team.detail",params:{id:null!==(e=null===(t=a.team.id)||void 0===t?void 0:t.toString())&&void 0!==e?e:""}})},editItem:function(){var e,t;r.push({name:"team.edit",params:{id:null!==(e=null===(t=a.team.id)||void 0===t?void 0:t.toString())&&void 0!==e?e:""}})},deleteItem:function(){d.value=!0},deleteConfirmed:function(){u.value=!0,h.delete(a.team.id).then((()=>{t("deleted",a.team)})).catch((e=>{o.showMessage(e)})).finally((()=>{u.value=!1,d.value=!1}))},ListItemActions:b,DeleteDialog:I}}}),(function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t(r,{on:{click:a.openItem}},[t(d,[t(u,[e._v(e._s(a.title))]),t(c,[e._v(e._s(a.subtitle))])],1),t(a.ListItemActions,{on:{open:a.openItem,edit:a.editItem,delete:a.deleteItem}}),t(a.DeleteDialog,{attrs:{"is-loading-animation":a.deleteDialogIsLoading,"descriptor-string":e.team.identifierString},on:{delete:a.deleteConfirmed},model:{value:a.deleteDialogVisible,callback:function(e){a.deleteDialogVisible=e},expression:"deleteDialogVisible"}})],1)}),[],!1,null,"c9dbdf3e",null,null).exports,x=o(a({__name:"TeamList",setup(e){const a=l(),i=s([]),o=s(!1),r=s(-1),d=s(Number.MAX_VALUE),u=s(null);function c(){o.value=!0,h.getAllPaged(r.value+1).then((e=>{i.value.push(...e.data),r.value=e.page,d.value=e.totalPages,u.value=e.totalElements})).catch((e=>{a.showMessage(e)})).finally((()=>{o.value=!1}))}m((()=>{c()}));const _=n((()=>r.value>=d.value-1));return{__sfc:!0,snackbarStore:a,teams:i,busy:o,currentPage:r,totalPages:d,totalElements:u,loadMore:c,teamDeleted:function(e){i.value=i.value.filter((t=>t.id!=e.id))},allPagesLoaded:_,TeamListItem:t}}}),(function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t(_,{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:a.loadMore,expression:"loadMore"}],attrs:{id:"infinite-scroll","two-line":"","infinite-scroll-disabled":"busy"}},[e._l(a.teams,(function(e,l){return[t(a.TeamListItem,{key:`team-${e.id}`,attrs:{team:e},on:{deleted:a.teamDeleted}}),t(T,{key:`divider-${l}`,staticClass:"divider"})]})),a.allPagesLoaded?t(r,[t(d,{staticClass:"text--secondary d-flex justify-center"},[e._v(" "+e._s(a.totalElements)+" Einträge insgesamt ")])],1):e._e(),!a.busy&&(void 0===a.teams||a.teams.length<1)?[t(D,[e._v("Keine Teams vorhanden")])]:e._e(),a.busy?[t(f,{attrs:{indeterminate:"",color:"accent"}})]:e._e()],2)}),[],!1,null,"c977ff97",null,null).exports;e("default",o(a({__name:"TeamIndex",setup:e=>({__sfc:!0,TeamList:x})}),(function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t(v,[t(g,{attrs:{flat:""}},[t("h1",{staticClass:"text-h5"},[e._v("Teams")]),t(a.TeamList)],1),t(E,{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function({on:a}){return[t(p,e._g({directives:[{name:"security",rawName:"v-security",value:"BEISPIELPROJEKT_BACKEND_WRITE_TEAM",expression:"'BEISPIELPROJEKT_BACKEND_WRITE_TEAM'"}],attrs:{id:"create-team",bottom:"",right:"",fixed:"",fab:"",dark:"",color:"accent",to:{name:"team.create"}}},a),[t(y,[e._v("mdi-plus")])],1)]}}])},[t("span",[e._v("Neues Team anlegen")])])],1)}),[],!1,null,"af2a1036",null,null).exports)}}}));