<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
  <VAppBar color="transparent" elevation="0" class="px-2">
    <VCard class="w-100 bg-default border">
      <VCardText class="py-2">
        <div class="d-flex ga-2 align-center">
          <IconsLogo />
          <VAppBarTitle> {{ config.public.appTitle }}</VAppBarTitle>
        </div>
      </VCardText>
    </VCard>
  </VAppBar>
</template>

<style scoped lang="scss"></style>
