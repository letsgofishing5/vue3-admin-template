import { defineStore } from "pinia";
import { RouteLocationNormalized } from "vue-router";

// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useBreadcrumbStore = defineStore("breadcrumb", {
  state: () => ({
    breadcrumbs: [] as RouteLocationNormalized["matched"],
  }),
  actions: {
    /**
     * 设置面包屑
     * @param matched 
     */
    setBreadcrumbs(matched: RouteLocationNormalized["matched"]) {
      this.breadcrumbs.splice(0, this.breadcrumbs.length)
      matched.forEach(item => {
        if (item.meta.title) {
          this.breadcrumbs.push(item)
        }
      })
    },
  },
});
