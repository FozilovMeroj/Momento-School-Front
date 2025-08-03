<script lang="ts" setup>
import {locales} from "~/i18n/locales";
import {useI18n} from "vue-i18n";

const i18n = useI18n();
const changeLocale = (locale: string) => {
  i18n.locale.value = locale
}
</script>

<template>
  <VMenu activator="parent">
    <VList density="compact" nav>
      <VListItem
          v-for="(locale, index) in locales"
          :key="index"
          :title="$t(locale.label)"
          :value="locale.locale"
          @click="changeLocale(locale.locale)"
      >
        <template #prepend>
          <VAvatar class="text-sm" color="primary" size="32">
            {{ locale.locale.toUpperCase() }}
          </VAvatar>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>

<style scoped>

</style>