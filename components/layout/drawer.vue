<script setup lang="ts">
import { getMenu } from "~/utils/navigation/menu.js";
</script>

<template>
  <VNavigationDrawer class="drawer">
    <VListItem>
      <div class="d-flex ga-2 align-center">
        <VListItemMedia>
          <Icon name="tabler:home" size="32" />
        </VListItemMedia>
        <div>
          <VListItemTitle>
            <h2>MomentoEdu</h2>
          </VListItemTitle>
          <VListItemSubtitle>
            <h5>School Management System</h5>
          </VListItemSubtitle>
        </div>
      </div>
    </VListItem>
    <VDivider opacity=".3" />
    <VList nav>
      <VListItem v-for="link in getMenu()" :title="link.label" link>
        <VListItemMedia>
          <Icon :name="`tabler:${link.icon}`" />
        </VListItemMedia>
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<style scoped lang="scss">
.drawer {
  background-color: $primaryDark;
}
</style>
