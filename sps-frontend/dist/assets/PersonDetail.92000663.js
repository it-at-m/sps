import{ab as r,d as l,U as u,x as p,u as i,r as c,o as m,L as d,n as f,_ as v,i as E,h as g,j as P,k as R,l as S}from"./index.5c2e6855.js";import{P as b}from"./PersonApiService.e3829719.js";import{_ as h}from"./VSimpleTable.2cf2cf19.js";import{_ as y}from"./VTooltip.3363e3a0.js";import"./EntityApiService.bdec22c4.js";r("v-table__overflow");const x=l({__name:"PersonDetail",setup(a){const e=u(),n=p(),t=i(),s=c(null);m(()=>{_()});function _(){b.get(e.params.id,["team"]).then(o=>{s.value=o}).catch(o=>{t.showMessage({level:d.ERROR,message:o}),n.back()})}return{__sfc:!0,route:e,router:n,snackbarStore:t,person:s,load:_}}});var k=function(){var e=this,n=e._self._c,t=e._self._setupProxy;return n(v,[n(E,{attrs:{flat:""}},[t.person===null?n(g,{attrs:{indeterminate:""}}):e._e(),t.person!==null?[n(P,[e._v(" Personendaten: "+e._s(t.person.fullname)+" ")]),n(h,{scopedSlots:e._u([{key:"default",fn:function(){return[n("tbody",[n("tr",[n("td",[e._v("Vorname")]),n("td",[e._v(e._s(t.person.firstname))])]),n("tr",[n("td",[e._v("Nachname")]),n("td",[e._v(e._s(t.person.lastname))])]),n("tr",[n("td",[e._v("E-Mail-Adresse")]),n("td",[e._v(e._s(t.person.email))])]),n("tr",[n("td",[e._v("Team")]),n("td",[e._v(" "+e._s(t.person.team?t.person.team.name:"Kein Team vorhanden")+" ")])])])]},proxy:!0}],null,!1,1741803188)}),n(y,{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function({on:s}){return[n(R,e._g({directives:[{name:"security",rawName:"v-security",value:"BEISPIELPROJEKT_BACKEND_WRITE_PERSON",expression:"`BEISPIELPROJEKT_BACKEND_WRITE_PERSON`"}],attrs:{id:"edit-person",bottom:"",right:"",fixed:"",fab:"",dark:"",color:"accent",to:{path:`/people/${t.person.id}/edit`}}},s),[n(S,[e._v("mdi-pencil")])],1)]}}],null,!1,1146596730)},[n("span",[e._v(e._s(t.person.fullname)+" bearbeiten")])])]:e._e()],2)],1)},T=[],I=f(x,k,T,!1,null,"4fe8e686",null,null);const A=I.exports;export{A as default};