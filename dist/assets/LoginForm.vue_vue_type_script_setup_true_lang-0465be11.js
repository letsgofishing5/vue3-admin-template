import{d as v,Q as b,C as g,a as m,o as y,c as V,w as n,b as c,O as C,R as x,l as U,u as d}from"./.pnpm-de04094d.js";import{u as k,a as N,n as $}from"./index-709a5a79.js";import{_ as h}from"./BasicForm.vue_vue_type_script_setup_true_lang-c992984d.js";const I=[{prop:"username",placeholder:"请输入账号",autocomplete:"off",prefixIcon:"user",rules:[{validator:P,trigger:["blur"]}]},{el:"slot",slotName:"password",prop:"password",placeholder:"请输入密码",autocomplete:"off",type:"password",showPassword:!0,clearable:!0,prefixIcon:"lock",rules:[{validator:K,trigger:["blur"]}]}];function K(a,e,o){e===""?o(new Error("请输入密码")):o()}function P(a,e,o){e===""?o(new Error("请输入账号")):o()}const B=v({__name:"LoginForm",setup(a){const e=b({username:"admin",password:"123456"}),o=g();async function u(){const{code:t,data:s}=await N(e);t===200&&(f(s),$.Succ(`登录成功，${s.username} 欢迎回来`),setTimeout(()=>{o.push("/")},500))}const l=k();function f(t){l.setToken(t.token),l.setUserName(t.username)}return(t,s)=>{const _=m("el-input"),w=m("el-button");return y(),V(d(h),{"json-conf":d(I),modelValue:e,"onUpdate:modelValue":s[1]||(s[1]=r=>e=r)},{password:n(({props:r,events:p})=>[c(_,C({onKeyup:x(i=>p.submit(u),["enter"])},r,{modelValue:e.password,"onUpdate:modelValue":s[0]||(s[0]=i=>e.password=i)}),null,16,["onKeyup","modelValue"])]),btns:n(({events:r})=>[c(w,{class:"w-full",type:"primary",onClick:p=>r.submit(u)},{default:n(()=>[U("登录")]),_:2},1032,["onClick"])]),_:1},8,["json-conf","modelValue"])}}});export{B as _};
