<script lang="ts" setup>
const config = useRuntimeConfig();
</script>

<template>
  <VAppBar color="transparent" elevation="0">
    <VContainer>
      <VCard class="w-100 header_card">
        <VCardText class="py-2 flex justify-between">
          <div class="flex gap-2 align-center">
            <IconsLogo/>
            <VAppBarTitle> {{ config.public.appTitle }}</VAppBarTitle>
          </div>
          <div class="d-flex align-center gap-3">
            <VBtn v-tooltip:bottom="$t('menu.profile')" density="compact" icon>
              <Icon name="tabler:user"/>
            </VBtn>
          </div>
        </VCardText>
      </VCard>
    </VContainer>
  </VAppBar>
</template>

<style lang="scss" scoped>
</style>
