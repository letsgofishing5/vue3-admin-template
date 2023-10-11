import{d as S,r as C,a as f,c as h,w,o as d,b as z,z as W,e as G,E as R,f as H,g as J,N as _,h as K,i as Q,j as V,k as M,F as N,l as X,t as Y,u as Z,M as c,m as k,n as ee,p as te,q as oe,s as ne,v as re}from"./.pnpm-de04094d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const se=S({__name:"App",setup(e){const t=C(W);return(o,s)=>{const r=f("RouterView"),n=f("el-config-provider");return d(),h(n,{locale:t.value},{default:w(()=>[z(r)]),_:1},8,["locale"])}}}),ae="modulepreload",ie=function(e){return"/vue3-admin-template/"+e},I={},u=function(t,o,s){if(!o||o.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(o.map(n=>{if(n=ie(n),n in I)return;I[n]=!0;const a=n.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(!!s)for(let m=r.length-1;m>=0;m--){const E=r[m];if(E.href===n&&(!a||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${i}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":ae,a||(l.as="script",l.crossOrigin=""),l.href=n,document.head.appendChild(l),a)return new Promise((m,E)=>{l.addEventListener("load",m),l.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},P=[{path:"/",name:"layout-container-root-19980301",component:()=>u(()=>import("./index-597d587a.js"),["assets/index-597d587a.js","assets/.pnpm-de04094d.js","assets/.pnpm-fd54a71a.css","assets/_plugin-vue_export-helper-c27b6911.js","assets/index-81cbc701.css"])},{path:"/login",name:"Login",component:()=>u(()=>import("./index-94faee57.js"),["assets/index-94faee57.js","assets/LoginForm.vue_vue_type_script_setup_true_lang-28e7fec4.js","assets/.pnpm-de04094d.js","assets/.pnpm-fd54a71a.css","assets/BasicForm.vue_vue_type_script_setup_true_lang-749418c9.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/index-d3ba50f5.css"])}],ue=[{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>u(()=>import("./404-26352357.js"),["assets/404-26352357.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/.pnpm-de04094d.js","assets/.pnpm-fd54a71a.css"])}],x=G("userInfo",{state:()=>({username:"",token:"",roles:[],dynamicRoutes:[]}),actions:{setUserName(e){this.username=e},setToken(e){this.token=e},setRoles(e){this.roles=e},async setDynamicRoutes(e){this.dynamicRoutes=e},clearAll(){this.username="",this.token="",this.roles=[],this.dynamicRoutes=[],localStorage.removeItem("userInfo")}},persist:{storage:window.localStorage,paths:["username","token","roles"]}});class L{static Succ(t,o=!0){R({showClose:o,grouping:!0,message:t,type:"success"})}static Err(t,o=!0){R({showClose:o,grouping:!0,message:t,type:"error"})}static Info(t,o=!0){R({showClose:o,grouping:!0,message:t})}static Warn(t,o=!0){R({showClose:o,grouping:!0,message:t,type:"warning"})}static Confirm(t={}){const{title:o="提示",type:s="info",confirmButtonText:r="确定",cancelButtonText:n="取消",message:a="是否执行该操作？",cancelCallback:i,confirmCallback:p,cancelCallbackParams:l,confirmCallbackParams:m}=t;H.confirm(a,o,{confirmButtonText:r,cancelButtonText:n,type:s}).then(()=>{p==null||p(m)}).catch(()=>{i==null||i(l)})}}const g=new Map;function ce(e){U(e);const t=new AbortController;e.signal=t.signal,e.url&&!g.has(e.url)&&g.set(e.url,t)}function U(e){if(e.url&&g.has(e.url)){const t=g.get(e.url);t==null||t.abort(),g.delete(e.url)}}const D=J.create({baseURL:"/dev",timeout:100*1e3});D.interceptors.request.use(function(e){const{headers:t}=e;return typeof t>"u"&&(e.headers={}),localStorage.getItem("token")&&(e.headers.token=localStorage.getItem("token")),ce(e),e},function(e){return Promise.reject(e)});D.interceptors.response.use(function(e){const{data:t}=e,{code:o,msg:s}=t;return o!==200&&L.Err(s),U(e.config),e},function(e){return e.code!=="ERR_CANCELED"&&L.Err(e.message),Promise.reject(e)});async function F(e,t){typeof t>"u"?t=C(!1):t.value=!0,_.start();try{const{data:o}=await D(e);return o}catch(o){return console.error("捕获请求错误：",o),Promise.resolve({msg:o.message,data:null,code:999})}finally{t.value=!1,_.done()}}function le(e,t){return F(e,t)}function j(e,t){return e.method="POST",F(e,t)}const O={Login:"/login",Logout:"/logout",GetRoutes:"/getRoutes"};function De(e){return j({url:O.Login,data:e})}function Oe(){return j({url:O.Logout})}function me(){return le({url:O.GetRoutes})}const A=Object.assign({"/src/views/dashboard/index.vue":()=>u(()=>import("./index-7f525260.js"),["assets/index-7f525260.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/.pnpm-de04094d.js","assets/.pnpm-fd54a71a.css"]),"/src/views/demo/demo01.vue":()=>u(()=>import("./demo01-56d1bb00.js"),["assets/demo01-56d1bb00.js","assets/PaginationComponent.vue_vue_type_script_setup_true_lang-e5edf09e.js","assets/.pnpm-de04094d.js","assets/.pnpm-fd54a71a.css"]),"/src/views/demo/demo02.vue":()=>u(()=>import("./demo02-5d006b01.js"),["assets/demo02-5d006b01.js","assets/PaginationComponent.vue_vue_type_script_setup_true_lang-e5edf09e.js","assets/.pnpm-de04094d.js","assets/.pnpm-fd54a71a.css"]),"/src/views/demo/demo03.vue":()=>u(()=>import("./demo03-9c22f3f6.js"),["assets/demo03-9c22f3f6.js","assets/BasicForm.vue_vue_type_script_setup_true_lang-749418c9.js","assets/.pnpm-de04094d.js","assets/.pnpm-fd54a71a.css"]),"/src/views/demo/demo04.vue":()=>u(()=>import("./demo04-fc6d5839.js"),["assets/demo04-fc6d5839.js","assets/BasicForm.vue_vue_type_script_setup_true_lang-749418c9.js","assets/.pnpm-de04094d.js","assets/.pnpm-fd54a71a.css"]),"/src/views/login/components/LoginForm.vue":()=>u(()=>import("./LoginForm-b4536a59.js"),["assets/LoginForm-b4536a59.js","assets/LoginForm.vue_vue_type_script_setup_true_lang-28e7fec4.js","assets/.pnpm-de04094d.js","assets/.pnpm-fd54a71a.css","assets/BasicForm.vue_vue_type_script_setup_true_lang-749418c9.js"]),"/src/views/login/components/RegisterForm.vue":()=>u(()=>import("./RegisterForm-5301613e.js"),["assets/RegisterForm-5301613e.js","assets/_plugin-vue_export-helper-c27b6911.js"]),"/src/views/login/index.vue":()=>u(()=>import("./index-94faee57.js"),["assets/index-94faee57.js","assets/LoginForm.vue_vue_type_script_setup_true_lang-28e7fec4.js","assets/.pnpm-de04094d.js","assets/.pnpm-fd54a71a.css","assets/BasicForm.vue_vue_type_script_setup_true_lang-749418c9.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/index-d3ba50f5.css"]),"/src/views/system/notFound/404.vue":()=>u(()=>import("./404-26352357.js"),["assets/404-26352357.js","assets/_plugin-vue_export-helper-c27b6911.js","assets/.pnpm-de04094d.js","assets/.pnpm-fd54a71a.css"]),"/src/views/system/redirect/index.vue":()=>u(()=>import("./index-fffa9e77.js"),["assets/index-fffa9e77.js","assets/.pnpm-de04094d.js","assets/.pnpm-fd54a71a.css"])});async function de(e){const t=x(),{code:o,data:s}=await me();if(o===200)B(s);else return[];return t.setDynamicRoutes(s),P[0].redirect=pe(s),e.addRoute(P[0]),s==null||s.forEach(r=>{e.addRoute("layout-container-root-19980301",r)}),s}function B(e){e.forEach(t=>{A[t.component]&&(t.component=A[t.component]),t.children&&t.children.length&&B(t.children)})}function pe(e){let t=e[0];for(;t!=null&&t.children&&t.children.length;)t=t.children[0];return t}const v=K({history:Q(),routes:[...P,...ue]}),fe=["/login","/404"];v.beforeEach(async(e,t)=>{_.start();const o=x();if(document.title=e.meta.title?"走我们钓鱼去-"+e.meta.title:e.meta.title,o.token){if(e.path==="/login")return"/";if(!o.dynamicRoutes.length)return await de(v),e.fullPath}else if(fe.indexOf(e.fullPath)===-1)return"/login"});v.afterEach(()=>{_.done()});v.onError(e=>{_.done(),console.warn("router occurence error",e)});const _e=S({__name:"RadioComponent",props:{key:{default:"label"},val:{default:"value"},list:{}},setup(e){return(t,o)=>{const s=f("el-radio"),r=f("el-radio-group");return d(),h(r,null,{default:w(()=>[(d(!0),V(N,null,M(t.list,(n,a)=>(d(),h(s,{label:n[t.val],key:a},{default:w(()=>[X(Y(n[t.key]),1)]),_:2},1032,["label"]))),128))]),_:1})}}});function Te(){L.Warn("功能暂未开发，敬请期待")}function ge(e){return Object.prototype.toString.call(e).slice(1,-1).split(" ")[1]}function he(e,t){return ge(e)==="Undefined"?t:e}const ve=S({__name:"SelectComponent",props:{key:{default:"label"},val:{default:"value"},list:{}},setup(e){return(t,o)=>{const s=f("el-option"),r=f("el-select");return d(),h(r,null,{default:w(()=>[(d(!0),V(N,null,M(t.list,n=>(d(),h(s,{key:n[t.val],label:n[t.key],value:n[t.val],disabled:Z(he)(n.disabled,!1)},null,8,["label","value","disabled"]))),128))]),_:1})}}}),ye=Object.freeze(Object.defineProperty({__proto__:null,SubItemRadio:_e,SubItemSelect:ve},Symbol.toStringTag,{value:"Module"}));function $(e){return JSON.parse(e)}function b(e,t="ok",o=0){return{code:200,data:e,msg:t,count:o}}function Ee(e="error",t=0){return{code:500,data:null,msg:e,count:t}}const Re=[{path:"/dashboard",name:"Dashboard",component:"/src/views/dashboard/index.vue",meta:{title:"首页",isTab:!0}},{path:"/demo",name:"Demo",meta:{title:"demo管理"},children:[{path:"/demo/demo01",name:"Demo01",component:"/src/views/demo/demo01.vue",meta:{title:"表格",isTab:!0}},{path:"/demo/demo02",name:"Demo02",component:"/src/views/demo/demo02.vue",meta:{title:"分页",isTab:!0}},{path:"/demo/demo03",name:"Demo03",component:"/src/views/demo/demo03.vue",meta:{title:"表单",isTab:!0}},{path:"/demo/demo04",name:"Demo04",component:"/src/views/demo/demo04.vue",meta:{title:"功能表单",isTab:!0}}]}],we=[{username:"admin",password:"123456",token:"admin123456",role:["admin"]},{username:"user",password:"123456",token:"user123456",role:["user"]}];function be(e){const t=$(e.body),o=we.find(s=>t.username===s.username&&t.password===s.password);return o?b(o):Ee("账号或密码错误")}function ke(){return b(null)}function Pe(e){return b(Re)}c.mock("/dev/login","post",be);c.mock("/dev/logout","post",ke);c.mock("/dev/getRoutes","get",Pe);c.mock("/dev/test","post",{code:200,data:{name:"@cname","age|1-10":10},msg:"测试通过"});const Le=[17560543966,18575492448,15195609796,17762930836,19713987488,17344519018,14565424517,18145657588,19625443794,13494063957,13588714511,17825136925,19099889656,18643409532,13046552460,19046135866,15152868375,19513561126,19891287976,14974507347,18687423324,15368084234,17744279769,13073994871,19164981442,15858247813,18454964376];function T(e){const t=$(e.body),o=[];let s=(t.page-1)*t.pageSize;const r=31,n=s+t.pageSize>r?31:s+t.pageSize;for(let a=s;a<n;a++){const i={};i.address=k.Random.county(!0),i.name=c.mock("@cname()");const{phone:p}=c.mock({"phone|1":Le});i.phone=p,i.email=c.mock("@email"),i.avator=k.Random.dataImage("200x100","Hello Mock.js!"),i.birthday=k.Random.date("yyyy-MM-dd"),o.push(i)}return b(o,"获取信息成功",r)}c.mock("/dev/getUserList1","get",T);c.mock("/dev/getUserList2","get",T);c.mock("/dev/getUserList3","get",T);_.configure({easing:"ease",speed:500,showSpinner:!1});const y=ee(se);for(const[e,t]of Object.entries({...te,...ye}))y.component(e,t);const q=oe();q.use(ne);y.use(q);y.use(v);y.use(re);y.mount("#app");export{De as a,le as d,Oe as l,L as n,he as s,Te as t,x as u};
