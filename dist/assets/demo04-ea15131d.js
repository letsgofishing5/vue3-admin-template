import{_ as c}from"./BasicForm.vue_vue_type_script_setup_true_lang-c992984d.js";import{d as _,r as f,a as d,o as b,j as C,b as o,w as n,l as t,u as v}from"./.pnpm-de04094d.js";import"./index-709a5a79.js";const w=_({__name:"demo04",setup(g){const l=f({name:"沈建政",age:12,address:"河南省濮阳市濮阳县濮阳县子岸镇",phone:null}),i=[{label:"姓名",prop:"name",rules:[{required:!0,message:"请填写姓名",trigger:"blur"}]},{label:"年龄",prop:"age"},{label:"地址",prop:"address"}];function p(a){console.log("----",a)}return(a,r)=>{const u=d("el-divider"),s=d("el-button");return b(),C("div",null,[o(u,{"content-position":"left"},{default:n(()=>[t("表单操作")]),_:1}),o(v(c),{"label-width":"100",modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=e=>l.value=e),"json-conf":i},{btns:n(({events:e})=>[o(s,{onClick:m=>p(e),type:"primary"},{default:n(()=>[t("提交")]),_:2},1032,["onClick"]),o(s,{onClick:m=>e.reset()},{default:n(()=>[t("重置")]),_:2},1032,["onClick"])]),_:1},8,["modelValue"])])}}});export{w as default};
