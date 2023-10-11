import { createApp } from "vue";

import ElementPlus from "element-plus";
import "@/styles/index.css";
import "element-plus/dist/index.css";
import NProgress from "nprogress"
import "nprogress/nprogress.css";
import App from "./App.vue";
import router from "@/router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import * as CusFormSubComponent from "@/components/form/src/components";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "/mock"
NProgress.configure({ easing: "ease", speed: 500, showSpinner: false });
const app = createApp(App);
// 全局组件注册
for (const [key, component] of Object.entries({ ...ElementPlusIconsVue, ...CusFormSubComponent })) {
    app.component(key, component);
}

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
