System.register(["./index-legacy.61f8d398.js","./VDialog-legacy.ec36ba2d.js","./VRow-legacy.f60ab543.js"],(function(e,n){"use strict";var t,a,i,o,l,r,s,c,u,v,d,p,k,_,g,h;return{setters:[e=>{t=e.d,a=e.c,i=e.n,o=e.k,l=e.l,r=e.i,s=e.j,c=e.H,u=e.I,v=e.J,d=e.r,p=e.ac,k=e._},e=>{_=e._},e=>{g=e._,h=e.a}],execute:function(){const n=t({__name:"YesNoDialog",props:{buttontext:null,icontext:null,dialogtitle:null,dialogtext:null,value:{type:Boolean}},emits:["no","yes","input"],setup(e,{emit:n}){const t=e,i=a({get:()=>t.value,set:e=>n("input",e)});return{__sfc:!0,props:t,emits:n,visible:i,no:function(){n("no")},yes:function(){n("yes")}}}}),f=i(n,(function(){var e=this,n=e._self._c,t=e._self._setupProxy;return n(_,{key:t.props.value,attrs:{persistent:"",width:"800"},scopedSlots:e._u([{key:"activator",fn:function({on:a}){return[t.props.buttontext?[n(o,e._g({attrs:{color:"primary"}},a),[e._v(" "+e._s(e.buttontext)+" ")])]:t.props.icontext?[n(o,e._g({attrs:{text:"",color:"primary"}},a),[n(l,{attrs:{large:""}},[e._v(" "+e._s(t.props.icontext)+" ")])],1)]:e._e()]}}]),model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n(r,[n(s,[e._v(" "+e._s(t.props.dialogtitle)+" ")]),n(c,[e._v(" "+e._s(t.props.dialogtext)+" ")]),n(u,[n(v),n(o,{attrs:{id:"yesnodialog-btn-no",text:""},on:{click:t.no}},[e._v(" Nein ")]),n(o,{attrs:{id:"yesnodialog-btn-yes",color:"primary"},on:{click:t.yes}},[e._v(" Ja ")])],1)],1)],1)}),[],!1,null,null,null,null).exports;e("default",i(t({__name:"GetStarted",setup(e){const n=d(!1),t=d(function(e){const n=d("Ungespeicherte Änderungen"),t=d("Es sind ungespeicherte Änderungen vorhanden. Wollen Sie die Seite verlassen?"),a=d(!1),i=d(!1),o=d(null);return p(((n,t,l)=>{e()&&!i.value?(a.value=!0,o.value=l):(a.value=!1,l())})),{saveLeaveDialogTitle:n,saveLeaveDialogText:t,saveLeaveDialog:a,isSave:i,nextRoute:o,cancel:function(){a.value=!1,null!=o.value&&o.value(!1)},leave:function(){null!=o.value&&o.value()}}}(a));function a(){return!n.value}return{__sfc:!0,dokumentationClicked:n,saveLeave:t,isDirty:a,YesNoDialog:f}}}),(function(){var e=this,n=e._self._c,t=e._self._setupProxy;return n(k,[n(g,{staticClass:"text-center"},[n(h,[n("h1",{staticClass:"text-h3 font-weight-bold mb-10"},[e._v("Dokumentation")]),n("h3",[e._v("Weiterführende Links sind hier zu finden:")]),n("div",[n("a",{attrs:{href:"https://wiki.muenchen.de/anwendungsentwicklung/index.php/Barrakuda",target:"_blank",rel:"noopener noreferrer"},on:{click:function(e){t.dokumentationClicked=!0}}},[e._v("Barrakuda-Doku")])]),n("div",[n("a",{attrs:{href:"https://wiki.muenchen.de/anwendungsentwicklung/index.php/Archetype_API-Gateway",target:"_blank",rel:"noopener noreferrer"},on:{click:function(e){t.dokumentationClicked=!0}}},[e._v("Doku Archetype API-Gateway")])]),n("div",[n("a",{attrs:{href:"https://wiki.muenchen.de/anwendungsentwicklung/index.php/Archetype_Backend",target:"_blank",rel:"noopener noreferrer"},on:{click:function(e){t.dokumentationClicked=!0}}},[e._v("Doku Archetype Backend")])]),n("div",[n("a",{attrs:{href:"https://git.muenchen.de/ccse/refarch-archetype",target:"_blank",rel:"noopener noreferrer"},on:{click:function(e){t.dokumentationClicked=!0}}},[e._v("Git-Repo Archetypes")])]),n("div",[n("a",{attrs:{href:"https://wiki.muenchen.de/anwendungsentwicklung/index.php/JavaScript-Themen",target:"_blank",rel:"noopener noreferrer"},on:{click:function(e){t.dokumentationClicked=!0}}},[e._v("Javascript-Wiki")])])])],1),n(t.YesNoDialog,{attrs:{dialogtitle:"Wirklich verlassen?",dialogtext:"Wollen Sie wirklich nicht die Dokumentation anschauen?"},on:{no:t.saveLeave.cancel,yes:t.saveLeave.leave},model:{value:t.saveLeave.saveLeaveDialog,callback:function(n){e.$set(t.saveLeave,"saveLeaveDialog",n)},expression:"saveLeave.saveLeaveDialog"}})],1)}),[],!1,null,null,null,null).exports)}}}));