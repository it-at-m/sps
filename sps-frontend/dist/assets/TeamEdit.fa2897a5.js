import{d as p,u as f,U as v,x as g,r as m,o as h,n as S,_ as b,i as T,h as x}from"./index.5c2e6855.js";import{T as y}from"./TeamForm.7f1b5c59.js";import{T as u}from"./TeamApiService.45f87cc8.js";import"./PersonApiService.e3829719.js";import"./EntityApiService.bdec22c4.js";import"./rules.61a0ee6c.js";import"./VListItemAction.f187d94c.js";import"./VSubheader.3dd6c797.js";import"./VRow.6a903a37.js";const k=p({__name:"TeamEdit",setup(c){const a=f(),s=v(),e=g(),i=m(!0),t=m(null),r=m(""),o=m(!1);h(()=>{r.value=s.params.id,_()});function _(){u.get(r.value,["teamleader"]).then(n=>{var l;t.value={name:n.name,identifierString:n.identifierString,teamleaderId:((l=n.teamleader)==null?void 0:l.id)||""},i.value=!1}).catch(n=>{a.showMessage(n),e.back()}).finally(()=>i.value=!1)}function d(){t.value!=null&&(o.value=!0,u.update({id:r.value,name:t.value.name,identifierString:t.value.identifierString}).then(n=>{t.value!=null&&u.createRelation(n,"teamleader","persons",t.value.teamleaderId).then(()=>{o.value=!1,e.push({name:"team.detail",params:{id:r.value}})}).catch(l=>a.showMessage(l)).finally(()=>o.value=!1)}).catch(n=>{a.showMessage(n),o.value=!1}))}return{__sfc:!0,snackbarStore:a,route:s,router:e,isLoading:i,team:t,teamId:r,isSaving:o,loadTeam:_,save:d,TeamForm:y}}});var M=function(){var i;var a=this,s=a._self._c,e=a._self._setupProxy;return s(b,[s(T,{attrs:{flat:""}},[e.isLoading?s(x,{attrs:{indeterminate:""}}):[s("h1",{staticClass:"text-h5",staticStyle:{"margin-bottom":"1em"}},[a._v(" Team bearbeiten: "+a._s((i=e.team)==null?void 0:i.name)+" ")]),e.team!=null?s(e.TeamForm,{attrs:{"is-saving-animation":e.isSaving},on:{submit:e.save},model:{value:e.team,callback:function(t){e.team=t},expression:"team"}}):a._e()]],2)],1)},R=[],w=S(k,M,R,!1,null,"968b776d",null,null);const $=w.exports;export{$ as default};