<template>
  <div class="flex justify-end items-center pt-4 h-[50px]">
    <AppButton
      class="h-8 min-w-[115px]"
      :type="$buttonType.secondary"
      :size="$buttonSize.default"
    >
      {{ type === EMarketingType.books ? 'Buy' : 'View details' }}
    </AppButton>
  </div>
</template>

<script lang="ts" setup>
import { EMarketingType } from '@/types/enums'

defineProps<{ item: any; type: keyof typeof EMarketingType }>()
</script>
