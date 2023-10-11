<template>
  <section class="relative flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
    <RouterView
      v-slot="{ Component, route }"
      class="absolute w-full h-full p-4"
    >
      <template v-if="Component">
        <Transition mode="out-in" :name="TransitionTypeEnum.fade_slide">
          <KeepAlive>
            <component :is="Component" :key="route.fullPath"></component>
          </KeepAlive>
        </Transition>
      </template>
    </RouterView>
  </section>
</template>
<script setup lang="ts">
import { TransitionTypeEnum } from "@/models";
</script>
<style scoped></style>
