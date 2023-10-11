import { defineStore } from "pinia";
import { RouteLocationNormalized } from "vue-router";
export const useTabsStore = defineStore("tabs", {
  state: () => {
    return {
      tabs: [] as RouteLocationNormalized[],
    };
  },
  actions: {
    /**
     * 设置标签栏，删除或增加
     * @param tab 
     * @param del 为true时，删除，默认false，增加
     */
    setTabs(tab: RouteLocationNormalized, del: boolean = false) {
      tab = { ...tab }
      const idx = this.tabs.findIndex((item) => item.fullPath === tab.fullPath)
      if (tab?.meta?.isTab || this.tabs[idx].meta?.isTab) {
        if (idx == -1 && tab.meta.title && !del) {
          this.tabs.push(tab)
        } else if (del && idx !== -1) {
          this.tabs.splice(idx, 1)
        }
      }
    },
  },
});
