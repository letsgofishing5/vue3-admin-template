<template>
  <header class="flex flex-col h-20 overflow-hidden">
    <NavComponent></NavComponent>
    <Tabs></Tabs>
  </header>
</template>
<script setup lang="ts">
import Tabs from "./components/TabsComponent.vue";
import NavComponent from "./components/NavComponent.vue";
</script>
<style scoped lang="scss">
header {
  border-bottom: 1px solid #ecf0f1;
  nav {
    border-bottom: 1px solid #ecf0f1;
  }
}
</style>
