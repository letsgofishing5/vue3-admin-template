<template>
  <el-menu
    :default-active="menuStore.defaultActive"
    class="flex items-center"
    mode="horizontal"
    :ellipsis="false"
  >
    <el-tabs
      closable
      v-model="menuStore.defaultActive"
      type="card"
      @tab-click="activeRoute"
      @tab-remove="removeTab"
    >
      <el-tab-pane
        v-for="(item, idx) in tabsStore.tabs"
        :key="item.path + idx"
        :label="item.meta.title"
        :name="item.path"
      >
      </el-tab-pane>
    </el-tabs>
    <div class="flex-grow" />
    <!-- TODO:预留的右侧布局空间， -->
  </el-menu>
</template>
<script setup lang="ts">
import { useTabsStore } from "@/store/tabs";
import { useMenuStore } from "@/store/menu";
import { TabsPaneContext } from "element-plus/lib/components/index.js";
import { useRouter } from "vue-router";
import { computed, watch } from "vue";
import { RouteLocationNormalized } from "vue-router";
import { useUserStore } from "@/store/user";
import { notify } from "@/hocks/useMessage";
import { useRoute } from "vue-router";
const tabsStore = useTabsStore();
const menuStore = useMenuStore();
const router = useRouter();
const userStore = useUserStore();
const route = useRoute();
// 监听路由，设置标签
watch(
  () => route,
  (newVal) => {
    tabsStore.setTabs(newVal);
  },
  {
    deep: true,
    immediate: true,
  }
);
// 发现首页
const findDashboard = computed(() => {
  let route = userStore.dynamicRoutes[0];
  while (route?.children && route.children.length) {
    route = route.children[0];
  }
  return route.path;
});
function activeRoute(pane: TabsPaneContext, _ev: Event) {
  router.push(pane.paneName as string);
}
function removeTab(targetName: string) {
  const len = tabsStore.tabs.length;
  if (findDashboard.value === targetName && len === 1) {
    notify.Warn("唯一标签页已是首页，无法关闭");
    return;
  }
  let idx = tabsStore.tabs.findIndex((tab) => tab.fullPath === targetName);
  if (targetName !== menuStore.defaultActive) {
    tabsStore.setTabs(
      { fullPath: targetName } as RouteLocationNormalized,
      true
    );
    return;
  }
  if (len == 1) {
    router.push("/");
  } else if (idx === 0 && len > 1) {
    router.push(tabsStore.tabs[++idx]);
  } else if (idx) {
    router.push(tabsStore.tabs[--idx]);
  }
  tabsStore.setTabs(
    { fullPath: targetName, meta: { isTab: true } } as RouteLocationNormalized,
    true
  );
}
</script>
<style scoped></style>
