System.register(["./index-legacy.61f8d398.js"],(function(t,i){"use strict";var e,n,a,o,s,l,r,c,d,h,m,v,x=document.createElement("style");return x.innerHTML=".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;-webkit-transition:.3s cubic-bezier(.25,.8,.25,1);-moz-transition:.3s cubic-bezier(.25,.8,.25,1);transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;outline:none;-webkit-box-shadow:0px 11px 15px -7px rgba(0,0,0,.2),0px 24px 38px 3px rgba(0,0,0,.14),0px 9px 46px 8px rgba(0,0,0,.12);box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__subtitle{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:flex;height:100%;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;-webkit-transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;-moz-transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;-moz-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;-moz-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);-moz-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-moz-box-flex:1;-ms-flex:1 1 100%;flex:1 1 100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions{-webkit-box-flex:0;-moz-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;-moz-backface-visibility:hidden;backface-visibility:hidden;-webkit-box-flex:1;-moz-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.03);transform:scale(1.03)}to{-webkit-transform:scale(1);transform:scale(1)}}@-moz-keyframes animate-dialog{0%{-moz-transform:scale(1);transform:scale(1)}50%{-moz-transform:scale(1.03);transform:scale(1.03)}to{-moz-transform:scale(1);transform:scale(1)}}@keyframes animate-dialog{0%{-webkit-transform:scale(1);-moz-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.03);-moz-transform:scale(1.03);transform:scale(1.03)}to{-webkit-transform:scale(1);-moz-transform:scale(1);transform:scale(1)}}\n",document.head.appendChild(x),{setters:[t=>{e=t.K,n=t.N,a=t.O,o=t.w,s=t.P,l=t.s,r=t.p,c=t.A,d=t.S,h=t.R,m=t.Q,v=t.D}],execute:function(){const i=r(v,m,a,h,d,c);t("_",i.extend({name:"v-dialog",directives:{ClickOutside:e},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:()=>({activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}),computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var i;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(i=this.previousActiveElement)||void 0===i||i.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&n("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(t){const i=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(i)||this.overlay&&i&&!this.overlay.$el.contains(i))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):a.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{var t,i;(null===(t=this.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(this.previousActiveElement=document.activeElement,null===(i=this.$refs.dialog)||void 0===i||i.focus()),this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===o.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick((()=>t&&t.focus()))}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const i=t.target;if(i&&this.$refs.dialog&&![document,this.$refs.dialog].includes(i)&&!this.$refs.dialog.contains(i)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((t=>t.contains(i)))){const t=[...this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].find((t=>!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]')));t&&t.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(s,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:l(this.maxWidth),width:l(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}}))}}}));