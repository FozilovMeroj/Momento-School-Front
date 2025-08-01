<script lang="ts" setup>
import {navigationLinks} from "@/utils/navigation/menu";

const config = useRuntimeConfig();
const rail = ref(true)
</script>

<template>
  <VNavigationDrawer
      :rail="rail"
      class="drawer"
      expand-on-hover>
    <VListItem class="px-3 bg-primary">
      <div class="flex gap-2 align-center justify-between">
        <VListItemMedia>
          <IconsLogo class="!fill-white"/>
        </VListItemMedia>
        <VListItemTitle>
          <p class="font-bold">{{ config.public.appTitle }}</p>
        </VListItemTitle>
        <VListItemMedia class="float-right">
          <VBtn color="transparent" density="comfortable" flat icon="" @click="rail=!rail">
            <Icon :name="rail ? 'tabler:chevron-right-pipe' : 'tabler:chevron-left-pipe'"/>
          </VBtn>
        </VListItemMedia>
      </div>
    </VListItem>
    <VList nav>
      <VListItem v-for="link in navigationLinks" :title="$t(link.label)" :to="link.route" density="compact" link>
        <template #prepend class="13">
          <Icon :name="`tabler:${link.icon}`" class="mr-5 ml-0.5"/>
        </template>
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<style lang="scss" scoped>
</style>
