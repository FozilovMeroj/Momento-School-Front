<script lang="ts" setup>
import {navigationLinks} from "@/utils/navigation/menu";

const config = useRuntimeConfig();
const rail = ref(true)
</script>

<template>
  <VNavigationDrawer
      :rail="rail"
      class="drawer pt-2"
      expand-on-hover>
    <VListItem>
      <div class="d-flex ga-2 align-center justify-between">
        <VListItemMedia>
          <IconsLogo/>
        </VListItemMedia>
        <VListItemTitle>
          <p class="font-bold">{{ config.public.appTitle }}</p>
        </VListItemTitle>
        <VListItemMedia class="float-right">
          <VBtn color="transparent" density="compact" flat icon="" @click="rail=!rail">
            <Icon :name="rail ? 'tabler:chevron-right-pipe' : 'tabler:chevron-left-pipe'"/>
          </VBtn>
        </VListItemMedia>
      </div>
    </VListItem>
    <VDivider class="my-1" opacity=".3"/>
    <VList nav>
      <VListItem v-for="link in navigationLinks" :title="$t(link.label)" :to="link.route" density="compact" link>
        <template #prepend>
          <Icon :name="`tabler:${link.icon}`" class="mr-5 ml-1"/>
        </template>
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<style lang="scss" scoped>
.drawer {
  background-color: $primaryDark;
}
</style>
