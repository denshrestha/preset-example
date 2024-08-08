<template>
  <div class="flex flex-col not-prose">
    <Swiper
      v-loading="loading"
      element-loading-background="rgba(2, 66, 66, 1)"
      :modules="[Navigation, Virtual, Pagination]"
      :slides-per-view="1"
      centered-slides
      navigation
      virtual
      :pagination="{
        type: 'fraction',
      }"
      class="w-full aspect-video rounded-card shadow"
      @resize="resize"
      @swiper="onSwiperInit"
      @slide-change="onSlideChange"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index + 1" :virtual-index="index">
        <img
          class="w-full h-full object-cover"
          :src="slide"
          :alt="slide"
        >
      </SwiperSlide>
    </Swiper>
    <div class="mt-3 self-end z-20">
      <el-popover
        placement="left"
        popper-class="!p-1 !rounded-md !z-0"
        trigger="click"
        :hide-after="0"
        :teleported="false"
      >
        <template #reference>
          <AppButton
            :size="$buttonSize.default"
            :type="$buttonType.secondary"
          >
            Go to slide
          </AppButton>
        </template>

        <el-input
          v-model="inputValue"
          v-maska
          data-maska="###"
          placeholder="Slide number"
          aria-label="Type the slide number you want to go to"
          @input="slideTo"
        />
      </el-popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/virtual'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Virtual, Pagination } from 'swiper'

const props = defineProps<{
  slides: string[]
}>()

const swiperRef = ref<typeof Swiper | null>(null)
const inputValue = ref<number>(1)

function onSwiperInit (swiper: unknown) {
  swiperRef.value = swiper as typeof Swiper
}

function onSlideChange () {
  inputValue.value = swiperRef.value?.activeIndex + 1
}

const loading = ref(false)

const debounceResize = useDebounceFn((swiper) => {
  (swiper as typeof Swiper).virtual.update('force')
  loading.value = false
}, 300)

function resize (swiper: unknown) {
  loading.value = true
  debounceResize(swiper)
}

const slideTo = useDebounceFn(() => {
  const position = parseInt(inputValue.value.toString())
  if (swiperRef.value && !isNaN(position)) {
    swiperRef.value.slideTo(position - 1, 0)
  }
}, 300)

watch(() => props.slides, () => {
  inputValue.value = 1
  slideTo()
})

</script>

<style lang="scss">
.swiper-button-prev,
.swiper-button-next {
  @apply bg-white h-9 w-9 rounded-full;

  &:after {
    content: '';
    mask: url('@/assets/icons/arrow-small.svg') no-repeat;
    mask-size: contain;
    @apply bg-grey rotate-90 w-2 h-1;
  }
}

.swiper-button-prev.swiper-button-disabled:after,
.swiper-button-next.swiper-button-disabled:after {
  @apply bg-grey-light;
}

.swiper-button-next:after {
  @apply -rotate-90;
}

.swiper-button-prev:after {
  @apply rotate-90;
}

.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  @apply opacity-100;

  &:after {
    @apply bg-grey-light;
  }
}

.swiper {
  @apply overflow-visible;
}

.swiper-pagination-fraction {
  @apply font-500 text-base text-grey absolute -bottom-8;
}
</style>
