<script setup lang="ts">
import { navigationLinks } from "@/utils/navigation/menu";
const i18n = useI18n()
const config = useRuntimeConfig();
onMounted(()=>{
  console.log(i18n.messages)
})
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
            <h5>{{ $t("app.description") }}</h5>
          </VListItemSubtitle>
        </div>
      </div>
    </VListItem>
    <VDivider opacity=".3" class="my-1" />
    <VList nav>
      <VListItem v-for="link in navigationLinks" link density="compact" :to="link.route">
        <div class="d-flex ga-2 align-center">
        <VListItemMedia>
          <Icon :name="`tabler:${link.icon}`" />
        </VListItemMedia>
        <VListItemTitle>
          {{ $t(link.label)}}
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
