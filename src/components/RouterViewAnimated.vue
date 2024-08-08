<template>
  <router-view #default="{ Component: RouteComponent }">
    <transition :name="transition" :mode="mode">
      <component
        :is="RouteComponent"
        ref="componentRef"
        :class="padding"
      />
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  transition?: 'fade' | 'slide-left'
  mode?: 'default' | 'out-in' | 'in-out'
  padding?: string
}>(), {
  transition: 'slide-left',
  mode: 'out-in'
})

const componentRef = ref()

defineExpose({ componentRef })
</script>
