<template>
  <div
    ref="imageWrapperRef"
    class="relative z-[1]"
    :class="{'skeleton-loading': !isLoaded}"
  >
    <transition name="fade">
      <img
        v-if="isVisible"
        draggable="false"
        class="h-full w-full transition duration-700"
        :class="[
          isLoaded ? 'opacity-100 blur-none' : 'opacity-0 blur-sm',
          imagePosition,
          imageFit
        ]"
        :src="src"
        :alt="alt"
        @error="handleImageError"
        @load="isLoaded = true"
      >
    </transition>
  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  src: string
  alt?: string
  imagePosition?: string
  imageFit?: string
}>(), {
  imagePosition: 'object-center',
  imageFit: 'object-cover'
})

const imageWrapperRef = ref<HTMLDivElement>()
const isLoaded = ref(false)
const isVisible = ref(false)

const handleImageError = (event: Event) => {
  if (event.target instanceof HTMLImageElement) {
    event.target.src = '/images/medihuanna.png'
    isLoaded.value = true
  }
}

const { stop } = useIntersectionObserver(imageWrapperRef, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    isVisible.value = true
    stop()
  }
})
</script>
