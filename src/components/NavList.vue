<template>
  <ul class="nav-list" :class="{ 'nav-list--dark': dark }">
    <li v-for="nav in navigation" :key="nav.label">
      <router-link #default="{ isActive, href, navigate }" :to="nav.route" custom>
        <el-tooltip
          effect="customized"
          placement="right"
          :disabled="showLabel"
          :hide-after="0"
          :offset="15"
          popper-class="nav-popper"
        >
          <template #content>
            <span class="font-700 text-sm">{{ nav.label }}</span>
          </template>
          <a
            :href="href" class="nav-list__item"
            :class="{ 'nav-list__item--active': isActive }"
            @click.prevent="navigateToNav(href, navigate)"
          >
            <!-- ICON -->
            <div class="w-5 flex items-center justify-center shrink-0">
              <component :is="nav.icon" class="nav-list__item-icon" />
            </div>

            <!-- LABEL -->
            <span v-show="showLabel" class="nav-list__item-label">{{ nav.label }}</span>
          </a>
        </el-tooltip>
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  navigation: TNavigation
  showLabel?: boolean
  dark?: boolean
}>(), {
  showLabel: true
})

const generalStore = useGeneralStore()
const { isOpenMobileSidebar } = storeToRefs(generalStore)

const customRouter = useCustomRouter()
const { $routeNames } = useGlobalProperties()

async function navigateToNav (href: string, navigate: () => void) {
  if (href === `/${$routeNames.community}`) {
    if ((user.value?.ahpra_no_present || user.value?.access_override) && !user.value?.community_block) {
      isOpenMobileSidebar.value = false
      navigate()
    } else {
      const confirmed = await useElConfirm(
        h('div', { class: 'max-w-lg' },
          h('h2', { class: 'text-center text-base font-500 text-primary mt-3' }, "Access to the community requires a valid AHPRA/MCNZ number. Please click 'Update' to enter your number in your user profile, or 'Cancel' if you wish to do this later.")
        ),
        {
          cancelButtonText: 'Cancel',
          confirmButtonText: 'Update'
        }
      )
        .catch(() => false)

      if (confirmed) {
        isOpenMobileSidebar.value = false
        customRouter.navigateTo(
          { name: $routeNames.profileProfessionalInfo }
        )
      } else {
        isOpenMobileSidebar.value = false
        customRouter.navigateTo({ name: $routeNames.dashboard })
      }
    }
  } else {
    navigate()
    isOpenMobileSidebar.value = false
  }
}
</script>

<style lang="scss">
.nav-list {
  $parent: &;
  @apply space-y-1 flex-grow;

  &__item {
    @apply flex items-center h-12 px-5 text-grey-light cursor-pointer rounded-lg text-sm relative font-600;
    @apply transition-colors duration-100;

    &:before {
      @apply content-[''] block absolute left-0 rounded-r-[2px] opacity-0 transition-opacity duration-100;
      @apply w-[2px] h-4 top-1/2 transform -translate-y-1/2 bg-success;
    }

    &:hover,
    &--active {
      @apply bg-primary-light;

      &:before {
        @apply opacity-100;
      }

      #{$parent}__item-icon {
        @apply text-success;
      }
    }
  }

  &__item-label {
    @apply ml-4 whitespace-nowrap;
  }

  &--dark {
    #{$parent}__item {
      @apply text-black;

      &:hover,
      &--active {
        @apply bg-primary text-grey-light;
      }

      &:not(:hover):not(#{$parent}__item--active) {
        #{$parent}__item-icon {
          @apply text-grey;
        }
      }
    }
  }
}

.nav-popper.is-customized {
  /* Set padding to ensure the height is 32px */
  padding: 6px 12px;
  @apply bg-primary text-white border border-primary-light;

  .el-popper__arrow::before {
    @apply text-white;
    right: 0;
    background: linear-gradient(45deg, theme('colors.primary-light') 50%, theme('colors.primary') 50%);
  }
}
</style>
