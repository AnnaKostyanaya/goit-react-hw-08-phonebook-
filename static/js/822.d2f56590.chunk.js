"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[822],{4822:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(9434),a=t(7689),i=t(8724),u=t(9869),o=t(1413),l=t(4272),s=t(3932),c=t(158),d={name:{type:"text",name:"name",required:!0,label:"User name",placeholder:"User name"},email:{type:"email",name:"email",required:!0,label:"User email",placeholder:"User email"},password:{type:"password",name:"password",required:!0,label:"User password",placeholder:"User password"}},f={name:"",email:"",password:""},m="RegisterForm_form__Tv43W",h=t(184),p=function(e){var n=e.onSubmit,t=(0,c.Z)({initialState:f,onSubmit:n}),r=t.state,a=t.handleChange,i=t.handleSubmit,u=r.name,p=r.email,v=r.password;return(0,h.jsxs)("form",{onSubmit:i,className:m,children:[(0,h.jsx)(l.Z,(0,o.Z)({value:u,handleChange:a},d.name)),(0,h.jsx)(l.Z,(0,o.Z)({value:p,handleChange:a},d.email)),(0,h.jsx)(l.Z,(0,o.Z)({value:v,handleChange:a},d.password)),(0,h.jsx)(s.Z,{variant:"contained",children:"Register"})]})},v="RegisterPage_header__RHKrh",g=function(){var e=(0,r.v9)(u.y6),n=(0,r.I0)();return e?(0,h.jsx)(a.Fg,{to:"/contacts"}):(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:v,children:"Register page"}),(0,h.jsx)(p,{onSubmit:function(e){n((0,i.IU)(e))}})]})}},9869:function(e,n,t){t.d(n,{PR:function(){return a},v0:function(){return i},y6:function(){return r}});var r=function(e){return e.auth.isLogin},a=function(e){return e.auth.user},i=function(e){var n=e.auth;return{isLogin:n.isLogin,token:n.token}}},3932:function(e,n,t){t.d(n,{Z:function(){return i}});var r="Button_btn__wi4ey",a=t(184),i=function(e){var n=e.children,t=e.type,i=void 0===t?"submit":t;return(0,a.jsx)("button",{type:i,className:r,children:n})}},4272:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(1413);function a(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=t(2791),u=t(5984),o="TextField_wrapper__OQN5w",l="TextField_field__f880x",s=t(184),c=["label","handleChange"],d=function(e){var n=e.label,t=e.handleChange,d=a(e,c),f=(0,i.useMemo)((function(){return(0,u.x0)()}),[]);return(0,s.jsxs)("div",{className:o,children:[(0,s.jsx)("label",{htmlFor:f,children:n}),(0,s.jsx)("input",(0,r.Z)({className:l,id:f,onChange:t},d))]})}},158:function(e,n,t){var r=t(4942),a=t(1413),i=t(9439),u=t(2791);n.Z=function(e){var n=e.initialState,t=e.onSubmit,o=(0,u.useState)((0,a.Z)({},n)),l=(0,i.Z)(o,2),s=l[0],c=l[1],d=(0,u.useCallback)((function(e){var n=e.target,t=n.name,i=n.value;c((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},t,i))}))}),[c]);return{state:s,setState:c,handleChange:d,handleSubmit:function(e){e.preventDefault(),t((0,a.Z)({},s)),c((0,a.Z)({},n))}}}},5984:function(e,n,t){t.d(n,{x0:function(){return r}});var r=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&t[e];n+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return n}}}]);
//# sourceMappingURL=822.d2f56590.chunk.js.map