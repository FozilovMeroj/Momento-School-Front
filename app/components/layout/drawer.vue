<script setup lang="ts">
import { navigationLinks } from "@/utils/navigation/menu";

const config = useRuntimeConfig();
</script>

<template>
  <VNavigationDrawer class="drawer pt-2">
    <VListItem>
      <div class="d-flex ga-2 align-center">
        <VListItemMedia>
          <IconsLogo />
        </VListItemMedia>
        <div>
          <VListItemTitle>
            <h3>{{ config.public.appTitle }}</h3>
          </VListItemTitle>
          <VListItemSubtitle>
            <h5>School Management System</h5>
          </VListItemSubtitle>
        </div>
      </div>
    </VListItem>
    <VDivider opacity=".3" class="my-1" />
    <VList nav>
      <VListItem v-for="link in navigationLinks" link dense>
        <div class="d-flex ga-2 align-center">
        <VListItemMedia>
          <Icon :name="`tabler:${link.icon}`" />
        </VListItemMedia>
        <VListItemTitle>
          {{link.label}}
        </VListItemTitle>
        </div>
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<style scoped lang="scss">
.drawer {
  background-color: $primaryDark;
}
</style>
