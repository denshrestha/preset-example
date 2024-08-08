<template>
  <button
    type="button"
    :class="[
      'transition-colors duration-200 bg-grey-extra-light rounded-lg w-10 h-10',
      'inline-flex items-center justify-center hover:bg-grey-light'
    ]"
    @click="$emit('click-button', $event)"
  >
    <IconArrowBig class="text-grey h-[11px] w-3" />
  </button>
</template>
