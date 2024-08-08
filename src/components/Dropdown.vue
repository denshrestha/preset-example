<template>
  <el-dropdown trigger="click" @visible-change="isOpened = !isOpened">
    <div class="flex items-center">
      <slot name="trigger" />

      <IconArrowSmall
        v-if="!isMobile"
        class="text-grey ml-2.5 transition-transform duration-[250ms]"
        :class="{ '-rotate-180': isOpened }"
      />
    </div>

    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in list"
          :key="item.label"
          divided
          :icon="item.icon"
          @click="item.action()"
        >
          <slot name="item" :item="item">
            {{ item.label }}
          </slot>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  list: IDropdown[]
}>(), {
  list: () => []
})

const generalStore = useGeneralStore()
const { isMobile } = storeToRefs(generalStore)
const isOpened = ref(false)
</script>
