<script lang="ts" setup>
import {headerNavigationLinks} from "~/utils/navigation/header";
</script>

<template>
  <VMenu activator="parent">
    <VList density="compact" nav>
      <VListItem
          v-for="(link, index) in headerNavigationLinks"
          :key="index"
          :title="$t(link.label)"
          :to="link.route" :value="index" link
      >
        <template #prepend>
          <Icon :name="`tabler:${link.icon}`" class="mr-5 ml-0.5"/>
        </template>
      </VListItem>
      <VDivider class="my-1"/>
      <VListItem
          :title="$t('menu.logout')"
          base-color="red" link @click="logout"
      >
        <template #prepend>
          <Icon class="mr-5 ml-0.5" name="tabler:logout"/>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>

<style scoped>

</style>