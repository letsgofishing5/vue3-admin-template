import{s as g,d as R}from"./index-d20202bf.js";import{d as S,D as j,r as C,a as d,o as a,c as p,w as o,j as b,F as B,k as z,u as F,L as N,O as s,P as U,G as E,b as i,y as M,l as h}from"./vendor-9004f6b8.js";const q=S({__name:"SearchForm",props:{modelValue:{default:()=>({})},formItems:{default:()=>[]},inline:{type:Boolean,default:!0},api:{}},emits:["update:modelValue","loading"],setup(w,{expose:D,emit:P}){const f=w,t=j({get(){return f.modelValue},set(l){P("update:modelValue",l)}}),n=C(),_=C(!1);function u(){if(!n.value)return!1;n.value.validate(async l=>{if(l){const v=await R({url:f.api},_);console.log(v)}else return!1})}function r(){n.value&&n.value.resetFields()}return D({reset:r,submit:u}),(l,v)=>{const c=d("el-form-item"),$=d("el-input"),V=d("el-button"),G=d("el-form");return a(),p(G,s({ref_key:"formRef",ref:n},l.$attrs,{model:t.value,inline:l.inline}),{default:o(()=>[(a(!0),b(B,null,z(l.formItems,(e,L)=>{var y,k;return a(),b(B,{key:L},[e.el&&F(g)((y=e.display)==null?void 0:y.value,!0)?(a(),p(c,N(s({key:0},e)),{default:o(()=>[e.el==="slot"?U(l.$slots,e.slotName||"default",{key:0,props:e,events:{reset:r,submit:u}}):(a(),p(E(e.el),s({key:1},e,{modelValue:t.value[e.prop],"onUpdate:modelValue":m=>t.value[e.prop]=m}),null,16,["modelValue","onUpdate:modelValue"]))]),_:2},1040)):F(g)((k=e.display)==null?void 0:k.value,!0)?(a(),p(c,N(s({key:1},e)),{default:o(()=>[i($,s({modelValue:t.value[e.prop],"onUpdate:modelValue":m=>t.value[e.prop]=m},e),null,16,["modelValue","onUpdate:modelValue"])]),_:2},1040)):M("",!0)],64)}),128)),i(c,null,{default:o(()=>[U(l.$slots,"btns",{events:{reset:r,submit:u}},()=>[i(V,{type:"primary",onClick:u,loading:_.value},{default:o(()=>[h(" 查询 ")]),_:1},8,["loading"]),i(V,{onClick:r},{default:o(()=>[h("重置")]),_:1})])]),_:3})]),_:3},16,["model","inline"])}}});export{q as _};
