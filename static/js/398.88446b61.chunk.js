/*! For license information please see 398.88446b61.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[398],{4596:function(n,t,e){e(2791);t.Z=e.p+"static/media/sprite.a5270647c44fc18ded1b86415d8b5a14.svg"},9398:function(n,t,e){e.r(t),e.d(t,{default:function(){return M}});var r=e(1002);function o(){o=function(){return t};var n,t={},e=Object.prototype,a=e.hasOwnProperty,i=Object.defineProperty||function(n,t,e){n[t]=e.value},s="function"==typeof Symbol?Symbol:{},l=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function d(n,t,e){return Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{d({},"")}catch(n){d=function(n,t,e){return n[t]=e}}function h(n,t,e,r){var o=t&&t.prototype instanceof y?t:y,a=Object.create(o.prototype),s=new S(r||[]);return i(a,"_invoke",{value:E(n,e,s)}),a}function p(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=h;var f="suspendedStart",m="executing",g="completed",x={};function y(){}function w(){}function v(){}var b={};d(b,l,(function(){return this}));var j=Object.getPrototypeOf,Z=j&&j(j(F([])));Z&&Z!==e&&a.call(Z,l)&&(b=Z);var k=v.prototype=y.prototype=Object.create(b);function P(n){["next","throw","return"].forEach((function(t){d(n,t,(function(n){return this._invoke(t,n)}))}))}function L(n,t){function e(o,i,s,l){var c=p(n[o],n,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==(0,r.Z)(d)&&a.call(d,"__await")?t.resolve(d.__await).then((function(n){e("next",n,s,l)}),(function(n){e("throw",n,s,l)})):t.resolve(d).then((function(n){u.value=n,s(u)}),(function(n){return e("throw",n,s,l)}))}l(c.arg)}var o;i(this,"_invoke",{value:function(n,r){function a(){return new t((function(t,o){e(n,r,t,o)}))}return o=o?o.then(a,a):a()}})}function E(t,e,r){var o=f;return function(a,i){if(o===m)throw new Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:n,done:!0}}for(r.method=a,r.arg=i;;){var s=r.delegate;if(s){var l=_(s,r);if(l){if(l===x)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var c=p(t,e,r);if("normal"===c.type){if(o=r.done?g:"suspendedYield",c.arg===x)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=g,r.method="throw",r.arg=c.arg)}}}function _(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),x;var a=p(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,x;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,x):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,x)}function O(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function z(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function S(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(O,this),this.reset(!0)}function F(t){if(t||""===t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(a.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}throw new TypeError((0,r.Z)(t)+" is not iterable")}return w.prototype=v,i(k,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:w,configurable:!0}),w.displayName=d(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,v):(n.__proto__=v,d(n,u,"GeneratorFunction")),n.prototype=Object.create(k),n},t.awrap=function(n){return{__await:n}},P(L.prototype),d(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(n,e,r,o,a){void 0===a&&(a=Promise);var i=new L(h(n,e,r,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(n){return n.done?n.value:i.next()}))},P(k),d(k,u,"Generator"),d(k,l,(function(){return this})),d(k,"toString",(function(){return"[object Generator]"})),t.keys=function(n){var t=Object(n),e=[];for(var r in t)e.push(r);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=F,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(z),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===n||"continue"===n)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=n,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,x):this.complete(i)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),x},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),z(e),x}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var r=e.completion;if("throw"===r.type){var o=r.arg;z(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:F(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),x}},t}function a(n,t,e,r,o,a,i){try{var s=n[a](i),l=s.value}catch(c){return void e(c)}s.done?t(l):Promise.resolve(l).then(r,o)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function s(n){a(i,r,o,s,l,"next",n)}function l(n){a(i,r,o,s,l,"throw",n)}s(void 0)}))}}var s,l,c,u,d,h,p,f,m,g,x,y,w=e(9439),v=e(5705),b=e(4596),j=e(168),Z=e(6487),k=e(1087),P=Z.ZP.div(s||(s=(0,j.Z)(["\n  //   min-height: 100%;\n  height: 100vh;\n  padding: 20px;\n  background: linear-gradient(\n    180deg,\n    rgba(196, 196, 196, 0) 25%,\n    #bedbb0 92.19%\n  );\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  margin-left: auto;\n  margin-right: auto;\n"]))),L=Z.ZP.div(l||(l=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 20px;\n  border-radius: 8px;\n  background: #151515;\n  @media screen and (min-width: 375px) {\n    max-width: 335px;\n  }\n  @media screen and (min-width: 768px) {\n    max-width: 424px;\n    padding: 40px;\n  }\n"]))),E=Z.ZP.nav(c||(c=(0,j.Z)(["\n  display: flex;\n  gap: 14px;\n  margin-bottom: 40px;\n"]))),_=(0,Z.ZP)(k.OL)(u||(u=(0,j.Z)(["\n  display: inline-block;\n  color: rgba(255, 255, 255, 0.3);\n  font-size: 18px;\n  font-weight: medium;\n  letter-spacing: -0.36px;\n  text-decoration: none;\n  &.active {\n    color: #fff;\n  }\n"]))),O=(0,Z.ZP)(v.l0)(d||(d=(0,j.Z)(["\n  width: 100%;\n  display: flex;\n  gap: 14px;\n\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),z=Z.ZP.label(h||(h=(0,j.Z)(["\n  display: block;\n  width: 100%;\n"]))),S=(0,Z.ZP)(v.gN)(p||(p=(0,j.Z)(["\n  width: 100%;\n  padding: 14px 18px;\n  font-family: Poppins;\n  font-size: 14px;\n  line-height: normal;\n  letter-spacing: -0.28px;\n\n  color: rgba(255, 255, 255, 1);\n  border-radius: 8px;\n  opacity: 0.4;\n  border: 1px solid rgba(190, 219, 176, 1);\n\n  background: #1f1f1f;\n  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);\n  transition: all 0.3s ease;\n\n  &::placeholder {\n    color: #fff;\n    font-size: 14px;\n    font-family: 'Poppins';\n    letter-spacing: -0.28px;\n  }\n    &:-webkit-autofill {\n    -webkit-box-shadow: 0 0 0px 1000px #1f1f1f inset !important;\n    background-color: #1f1f1f !important;\n    -webkit-text-fill-color: rgba(255, 255, 255, 1);\n  \n  opacity: 0.4;\n  border: 1px solid rgba(190, 219, 176, 1);\n  }\n   &:-webkit-autofill:active {\n    box-shadow: none;\n    background-color: #151515;\n    // opacity: 1;\n     -webkit-text-fill-color: #fff;!important;\n  }\n\n  &:focus {\n    opacity: 1;\n    outline: none;\n    \n  }\n \n\n"]))),F=Z.ZP.div(f||(f=(0,j.Z)(["\n  display: block;\n  position: relative;\n"]))),N=Z.ZP.svg(m||(m=(0,j.Z)(["\n  width: 18px;\n  height: 18px;\n \n"]))),A=Z.ZP.button(g||(g=(0,j.Z)(["\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  background-color: transparent;\n  border: none;\n  transform: translateY(-50%);\n  cursor: pointer;\n  opacity: 0.4;\n  &:hover * {\n    svg  {\n      fill: rgba(190, 219, 176, 1); \n    }\n  }\n"]))),C=Z.ZP.button(x||(x=(0,j.Z)(["\n  color: #161616;\n  text-align: center;\n  font-family: Poppins;\n  font-size: 14px;\n  padding: 14px 0;\n  -webkit-tap-highlight-color: transparent;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.28px;\n  margin-top: 10px;\n  width: 100%;\n  border: none;\n  border-radius: 8px;\n  background: #9DC888;\n   outline: none;\n     cursor: pointer;\n  &:disabled {\n     background: #bedbb0;\n    cursor: not-allowed;\n    &:focus {\n       -webkit-tap-highlight-color: none;\n       \n    }\n"]))),$=(0,Z.ZP)(v.Bc)(y||(y=(0,j.Z)(['\n  font-family: "Roboto";\n  color: red;\n  font-size: 14px;\n  margin-top: 5px;\n  padding-left: 5px;\n  max-width: 200px;\n']))),I=e(184),G=function(n){var t=n.showPassword,e=n.togglePassword,r=(0,v.u6)(),o=r.values,a=r.dirty,i=r.handleSubmit;return(0,I.jsxs)(O,{onSubmit:i,children:[(0,I.jsx)(z,{htmlFor:"email",children:(0,I.jsx)(S,{id:"email",name:"email",type:"email",placeholder:"Enter your email",value:o.email})}),(0,I.jsx)(z,{htmlFor:"password",children:(0,I.jsxs)(F,{children:[(0,I.jsx)(S,{id:"password",name:"password",type:t?"text":"password",placeholder:"Confirm a password",value:o.password})," ",(0,I.jsx)(A,{type:"button",onClick:e,children:(0,I.jsx)(N,{children:(0,I.jsx)("use",{href:"".concat(b.Z,"#icon-eye")})})})]})}),(0,I.jsx)(C,{type:"submit",disabled:!a,children:"Log In Now"})]})},q=e(2791),T=e(6846),B=e(5048),R=e(3541),D=e(9991),V=function(){var n=(0,q.useState)(!1),t=(0,w.Z)(n,2),e=t[0],r=t[1],a=function(){r(!e)},s=(0,T.e9)(),l=(0,w.Z)(s,2),c=l[0],u=l[1].isLoading,d=(0,B.I0)(),h=function(){var n=i(o().mark((function n(t,e){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.resetForm,n.prev=1,n.next=4,c({email:t.email,password:t.password});case 4:a=n.sent,console.log(a),a.token&&d((0,R.Dj)(a)),r(),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),console.error("Error submitting form:",n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(t,e){return n.apply(this,arguments)}}();return(0,I.jsx)(P,{children:(0,I.jsxs)(L,{children:[(0,I.jsxs)(E,{children:[(0,I.jsx)(_,{to:"/auth/register",children:"Registration"}),(0,I.jsx)(_,{to:"/auth/login",children:"Log In"})]}),(0,I.jsx)(v.J9,{initialValues:{email:"",password:""},onSubmit:h,children:function(){return(0,I.jsxs)(I.Fragment,{children:[u&&(0,I.jsx)(D.Z,{}),(0,I.jsx)(G,{showPassword:e,togglePassword:a})]})}})]})})},Y=e(6727),J=Y.Ry().shape({name:Y.Z_().min(2,"Name must be at least 2 characters").max(32,"Name must be at most 32 characters").matches(/^[a-zA-Z0-9@$!%*?& -]*$/,"Only Latin letters are allowed").trim().required("Name is required"),email:Y.Z_().trim().matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,"Invalid email format").required("Email is required"),password:Y.Z_().trim().required("Password is required").min(8,"Password must be at least 8 characters").max(64,"Password must be at most 64 characters").matches(/^\S*$/,"Password cannot contain spaces").matches(/^[a-zA-Z0-9@$!%*?& -_#+=]*$/,"Password must contain only Latin letters, digits, and certain symbols")}),U=function(n){var t=n.showPassword,e=n.togglePassword,r=(0,v.u6)(),o=r.values,a=r.handleChange,i=r.errors,s=r.touched,l=r.handleBlur,c=r.isValid,u=r.dirty,d=r.handleSubmit;return(0,I.jsxs)(O,{onSubmit:d,children:[(0,I.jsxs)(z,{htmlFor:"name",children:[(0,I.jsx)(S,{id:"name",name:"name",type:"text",placeholder:"Enter your name",value:o.name,onBlur:l,onChange:a,pattern:"^[a-zA-Z0-9@$!%*?& -]*$",title:"Only letters, digits, and certain symbols are allowed."}),s.name&&i.name&&(0,I.jsx)($,{children:i.name}),(0,I.jsx)($,{name:"name",component:"div"})]}),(0,I.jsxs)(z,{htmlFor:"email",children:[(0,I.jsx)(S,{id:"email",name:"email",type:"email",placeholder:"Enter your email",value:o.email,onBlur:l,onChange:a,pattern:"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",title:"Please enter a valid email address"}),s.email&&i.email&&(0,I.jsx)($,{children:i.email}),(0,I.jsx)($,{name:"email",component:"div"})]}),(0,I.jsxs)(z,{htmlFor:"password",children:[(0,I.jsxs)(F,{children:[(0,I.jsx)(S,{id:"password",name:"password",type:t?"text":"password",placeholder:"Create a password",value:o.password,onBlur:l,onChange:a,pattern:"^[a-zA-Z0-9@$!%*?& -_#+=]*$",title:"Password must contain at least one letter and at least one number"})," ",(0,I.jsx)(A,{type:"button",onClick:e,children:(0,I.jsx)(N,{children:(0,I.jsx)("use",{href:"".concat(b.Z,"#icon-eye")})})})]}),s.password&&i.password&&(0,I.jsx)($,{children:i.password}),(0,I.jsx)($,{name:"password",component:"div"})]}),(0,I.jsx)(C,{type:"submit",disabled:!u||!c,children:"Register Now"})]})},H=function(){var n=(0,q.useState)(!1),t=(0,w.Z)(n,2),e=t[0],r=t[1],a=function(){r(!e)},s=(0,B.I0)(),l=(0,T.l4)(),c=(0,w.Z)(l,2),u=c[0],d=c[1].isLoading,h=function(){var n=i(o().mark((function n(t,e){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.resetForm,n.prev=1,n.next=4,u({name:t.name,email:t.email,password:t.password});case 4:a=n.sent,console.log(a),a.token&&s((0,R.Dj)(a)),r(),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(t,e){return n.apply(this,arguments)}}();return(0,I.jsx)(P,{children:(0,I.jsxs)(L,{children:[(0,I.jsxs)(E,{children:[(0,I.jsx)(_,{to:"/auth/register",children:"Registration"}),(0,I.jsx)(_,{to:"/auth/login",children:"Log In"})]}),(0,I.jsx)(v.J9,{initialValues:{name:"",email:"",password:""},validationSchema:J,onSubmit:h,children:function(){return(0,I.jsxs)(I.Fragment,{children:[d&&(0,I.jsx)(D.Z,{}),(0,I.jsx)(U,{showPassword:e,togglePassword:a})]})}})]})})},K=e(7689),M=function(){var n=(0,K.UO)().id;return(0,I.jsxs)(I.Fragment,{children:["register"===n&&(0,I.jsx)(H,{}),"login"===n&&(0,I.jsx)(V,{})]})}}}]);
//# sourceMappingURL=398.88446b61.chunk.js.map